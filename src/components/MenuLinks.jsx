import React, { useEffect, useRef, useState } from "react";
import { DASHBOARD_LINKS_LIST } from "../utils/helper";
import { FaChevronDown } from "react-icons/fa";
import ProductPopup from "./ProductPopup";

const MenuLinks = ({ isCollapsed, tooltip, setTooltip }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isProductVisible, setProductVisible] = useState(false);
  const toggleProduct = () => setProductVisible(!isProductVisible);
  const productRef = useRef(null);
  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  const menuItems =
    DASHBOARD_LINKS_LIST.find((section) => section.title === "Menu")?.items ||
    [];
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (productRef.current && !productRef.current.contains(event.target)) {
        setProductVisible(false); // Close the dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Listen for mousedown events

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up the event listener
    };
  }, []);
  return (
    <div className="mt-3">
      <h6
        className={`text-muted leading_100 ${isCollapsed ? "text_hidden" : ""}`}
      >
        Menu
      </h6>
      {menuItems.map((item, index) => (
        <div key={index}>
          <a
           ref={item.isDropdown ? productRef : undefined}
           href={item.link}
           onMouseEnter={() => setTooltip(item.name)}
           onMouseLeave={() => setTooltip(null)}
           className="d-flex align-items-center justify-content-between gap-2 transistion_03 p-2 link_hover position-relative text-black rounded_08 text_nowrap"
           onClick={(e) => {
             if (item.isDropdown && !isCollapsed) {
               e.preventDefault();
               handleDropdownToggle(`menu-${index}`);
             }
             if (isCollapsed && item.name === "Products") {
               e.preventDefault();
               toggleProduct(); // Ensure toggleProduct is explicitly called
             }
           }}
          >
            <div className="d-flex align-items-center gap-2">
              <span className="icon_wrapper transistion_03">{item.icon}</span>
              {!isCollapsed && <p className="leading_100 mb-0">{item.name}</p>}
            </div>
            {!isCollapsed && (
              <>
                {item.badge && (
                  <span className="badge bg-primary ms-2">{item.badge}</span>
                )}
              </>
            )}
            {!isCollapsed && (
              <>
                {item.isDropdown && (
                  <FaChevronDown
                    className={`ms-auto transistion_03 ${
                      activeDropdown === `menu-${index}` ? "dropdown_arrow" : ""
                    }`}
                  />
                )}
              </>
            )}

            {/* Tooltip */}
            {isCollapsed && (
              <>
                {tooltip === item.name && (
                  <div className="custom-tooltip position-absolute bg-dark text-white p-2 rounded">
                    {item.name}
                  </div>
                )}
              </>
            )}
            {isProductVisible && item.name === "Products" && (
              <div className="position-absolute" style={{ zIndex: 10000,top:"110%",left:"4px" }}>
                <ProductPopup />
              </div>
            )}
          </a>
          {!isCollapsed && (
            <>
              {item.isDropdown &&
                activeDropdown === `menu-${index}` &&
                item.dropdownItems && (
                  <div className="ps_dropdown mb-3 position-relative">
                    {item.dropdownItems.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.link}
                        className="d-block transistion_03 p-2 link_hover text-black rounded_08 position-relative"
                      >
                        {subItem.name}
                        <span className="position-absolute link_line"></span>
                      </a>
                    ))}
                    <span className="position-absolute dropdown_line"></span>
                  </div>
                )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default MenuLinks;
