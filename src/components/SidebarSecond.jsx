import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaHome } from "react-icons/fa";
import { DASHBOARD_LINKS_LIST } from "../utils/helper";
import ProfilePopUp from "./ProfilePopUp";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [tooltip, setTooltip] = useState(null);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => setDropdownVisible(!isDropdownVisible);
  const dropdownRef = useRef(null);

  // Separate constants for different sections
  const menuItems =
    DASHBOARD_LINKS_LIST.find((section) => section.title === "Menu")?.items ||
    [];
  const accountItems =
    DASHBOARD_LINKS_LIST.find((section) => section.title === "Account")
      ?.items || [];
  const footerItems =
    DASHBOARD_LINKS_LIST.find((section) => section.title === "Footer")?.items ||
    [];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false); // Close the dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Listen for mousedown events

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up the event listener
    };
  }, []);
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={`d-flex flex-column bg-white sidebar_size rounded_16 transistion_03 p-1 ${
          isCollapsed ? "collapsed_sidebar" : "expanded_sidebar"
        }`}
      >
        <div className="bg_brown rounded_12 p-2 h-100">
          {/* Header */}
          <a href="/" className="d-flex align-items-center gap-2">
            <div className="p-1 rounded_12 home_link d-flex justify-content-center align-items-center">
              <FaHome className="text-black" size={20} />
            </div>
            {!isCollapsed && <span className="fw-bold">slukh</span>}
          </a>

          {/* Search Bar */}
          {!isCollapsed && (
            <div className="p-2">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          )}

          {/* Menu Section */}
          <div className="mt-3">
            {!isCollapsed && <h6 className="text-muted leading_100">Menu</h6>}
            {menuItems.map((item, index) => (
              <div key={index}>
                <a
                  href={item.link}
                  onMouseEnter={() => setTooltip(item.name)} // Show tooltip on hover
                  onMouseLeave={() => setTooltip(null)} // Hide tooltip on hover out
                  className="d-flex align-items-center justify-content-between gap-2 transistion_03 p-2 link_hover position-relative text-black"
                  onClick={
                    item.isDropdown
                      ? (e) => {
                          e.preventDefault();
                          handleDropdownToggle(`menu-${index}`);
                        }
                      : undefined
                  }
                >
                  <div className="d-flex align-items-center gap-2">
                    <span className="icon_wrapper transistion_03">
                      {item.icon}
                    </span>
                    {!isCollapsed && (
                      <p className="leading_100 mb-0">{item.name}</p>
                    )}
                  </div>
                  {!isCollapsed && (
                    <>
                      {item.badge && (
                        <span className="badge bg-primary ms-2">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                  {!isCollapsed && (
                    <>
                      {item.isDropdown && (
                        <FaChevronDown
                          className={`ms-auto ${
                            activeDropdown === `menu-${index}`
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      )}
                    </>
                  )}

                  {isCollapsed && (
                    <>
                      {tooltip === item.name && (
                        <div className="custom-tooltip position-absolute bg-dark text-white p-2 rounded">
                          {item.name}
                        </div>
                      )}
                    </>
                  )}
                </a>
                {/* Tooltip */}
                {item.isDropdown &&
                  activeDropdown === `menu-${index}` &&
                  item.dropdownItems && (
                    <div className="ps-4">
                      {item.dropdownItems.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.link}
                          className="d-block transistion_03 p-2 link_hover text-black"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </div>

          {/* Account Section */}
          <div className="mt-3">
            {!isCollapsed && (
              <h6 className="text-muted leading_100">Account</h6>
            )}
            {accountItems.map((item, index) => (
              <div key={index}>
                <a
                  href={item.link}
                  onMouseEnter={() => setTooltip(item.name)} // Show tooltip on hover
                  onMouseLeave={() => setTooltip(null)} // Hide tooltip on hover out
                  className="d-flex align-items-center justify-content-between gap-2 transistion_03 p-2 link_hover position-relative text-black"
                >
                  <div className="d-flex align-items-center gap-2">
                    <span className="icon_wrapper transistion_03">
                      {item.icon}
                    </span>
                    {!isCollapsed && (
                      <p className="leading_100 mb-0">{item.name}</p>
                    )}
                  </div>
                  {!isCollapsed && (
                    <>
                      {item.badge && (
                        <span className="badge bg-primary ms-2">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                  {isCollapsed && (
                    <>
                      {tooltip === item.name && (
                        <div className="custom-tooltip position-absolute bg-dark text-white p-2 rounded">
                          {item.name}
                        </div>
                      )}
                    </>
                  )}
                </a>
              </div>
            ))}
          </div>

          {/* Footer Section */}
          <div className="mt-auto">
            {footerItems.map((item, index) => (
              <div key={index}>
                <a
                  href={item.link}
                  onMouseEnter={() => setTooltip(item.name)} // Show tooltip on hover
                  onMouseLeave={() => setTooltip(null)} // Hide tooltip on hover out
                  className="d-flex align-items-center gap-2 transistion_03 p-2 link_hover position-relative text-black"
                >
                  <span className="icon_wrapper transistion_03">
                    {item.icon}
                  </span>
                  {!isCollapsed && (
                    <p className="mb-0 leading_100">{item.name}</p>
                  )}
                  {isCollapsed && (
                    <>
                      {tooltip === item.name && (
                        <div className="custom-tooltip position-absolute bg-dark text-white p-2 rounded">
                          {item.name}
                        </div>
                      )}
                    </>
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* User Profile */}
        <div
          onClick={toggleDropdown}
          ref={dropdownRef}
          className="d-flex align-items-center my-2 p-2 cursor_pointer"
        >
          <img
            src="https://nursinginstitutegoa.org/wp-content/uploads/2016/01/tutor-8.jpg"
            roundedCircle
            alt="User"
            className={`rounded_12 ${
              isCollapsed ? "profile_image_collapsed" : "me-2 profile_image"
            }`}
          />
          {!isCollapsed && (
            <div>
              <h6 className="mb-0 leading_100">Dianne Russell</h6>
              <small className="leading_100">dianne.russell@gmail.com</small>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-3">
        <button onClick={toggleSidebar} className="btn btn-primary">
          Toggle Sidebar
        </button>
        <h1>Main Content</h1>
      </div>
      <ProfilePopUp
        isDropdownVisible={isDropdownVisible}
      />
    </div>
  );
};

export default Sidebar;
