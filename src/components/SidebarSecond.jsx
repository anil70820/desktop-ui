import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMacCommand } from "react-icons/ai";
import { FaChevronRight, FaSearch } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import AccountLinks from "./AccountLinks";
import MenuLinks from "./MenuLinks";
import ProfilePopUp from "./ProfilePopUp";
import SupportLinks from "./SupportLinks";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [tooltip, setTooltip] = useState(null);
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => setDropdownVisible(!isDropdownVisible);
  const dropdownRef = useRef(null);

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
        className={`d-flex flex-column bg-white sidebar_size rounded_16 transistion_03 p-1 position-relative ${
          isCollapsed ? "collapsed_sidebar" : "expanded_sidebar"
        }`}
      >
        <div
          onClick={toggleSidebar}
          className={`toggle_sidebar position-absolute d-flex justify-content-center align-items-center cursor_pointer transistion_03 ${
            isCollapsed ? "" : "dropdown_arrow"
          }`}
        >
          <FaChevronRight size={12} />
        </div>
        <div className="bg_brown rounded_12 p-2 h-100">
          {/* Header */}
          <a href="/" className="d-flex align-items-center gap-2">
            <div className="p-1 rounded_12 home_link d-flex justify-content-center align-items-center">
              <IoMdSettings className="text-black" size={20} />
            </div>
            {!isCollapsed && <span className="fw-bold text-black">Slukh</span>}
          </a>

          {/* Search Bar */}
          {!isCollapsed ? (
            <div className="py-2 mt-2 search_height search_input position-relative">
              <input
                type="text"
                className="search_spacing h-100"
                placeholder="Search"
                aria-label="Search"
              />
              <span className="position-absolute search_position">
                <FaSearch />
              </span>
              <span className="position-absolute command_position search_command_box d-flex align-items-center justify-content-center">
                <AiOutlineMacCommand size={20} className="cursor_pointer" />
              </span>
              <span className="search_command_position search_command_box position-absolute d-flex justify-content-center align-items-center cursor_pointer fw-bold">
                K
              </span>
            </div>
          ) : (
            <span className="p-2 mt-2 d-block search_height pt-3">
              <FaSearch />
            </span>
          )}
          <div className="sidebar_scroll">
            {/* Menu Section */}
            <MenuLinks
              isCollapsed={isCollapsed}
              tooltip={tooltip}
              setTooltip={setTooltip}
            />
            <span className="divider_line d-block my-4"></span>
            {/* Account Section */}
            <AccountLinks
              isCollapsed={isCollapsed}
              tooltip={tooltip}
              setTooltip={setTooltip}
            />
            <span className="divider_line d-block my-4"></span>
            {/* Footer Section */}
            <SupportLinks
              isCollapsed={isCollapsed}
              tooltip={tooltip}
              setTooltip={setTooltip}
            />
          </div>
        </div>
        {/* User Profile */}
        <div
          onClick={toggleDropdown}
          ref={dropdownRef}
          className="d-flex align-items-center justify-content-between my-2 p-2 cursor_pointer position-relative hover transistion_03 rounded_08"
        >
          <div className="d-flex align-items-center">
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
          {!isCollapsed && (
            <span className="arrow_rotate">
              <FaChevronRight />
            </span>
          )}
          {isDropdownVisible && (
            <div className="position-absolute  bottom-0 profile_position">
              <ProfilePopUp />
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 py-3 px-4">
        <h1>Main Content</h1>
      </div>
    </div>
  );
};

export default Sidebar;
