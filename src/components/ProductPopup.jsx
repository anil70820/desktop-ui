import React from "react";
import { DASHBOARD_LINKS_LIST } from "../utils/helper";
import { FaChevronRight } from "react-icons/fa";

const ProductPopup = () => {
  const menuItems =
    DASHBOARD_LINKS_LIST.find((section) => section.title === "Menu")?.items ||
    [];

  return (
    <div className="pe-2 py-3 bg-white shadow_dropdown_popup rounded_12">
      {menuItems
        .filter((menuItem) => menuItem.isDropdown) // Only consider items with isDropdown: true
        .map((menuItem, index) => (
          <div key={index} className="ps_dropdown position-relative">
            {menuItem.dropdownItems?.map((subItem, subIndex) => (
              <a
                key={subIndex}
                href={subItem.link}
                className="transition_03 p-2 link_hover text-black rounded_08 position-relative d-flex justify-content-between align-items-center"
              >
                {subItem.name}
                <span className="position-absolute link_line"></span>
                 <span><FaChevronRight size={16}/></span>
              </a>
            ))}
            <span className="position-absolute dropdown_line"></span>
          </div>
        ))}
    </div>
  );
};

export default ProductPopup;
