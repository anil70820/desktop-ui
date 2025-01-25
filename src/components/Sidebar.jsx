import React, { useState } from "react";
import {
  FaHome,
  FaBox,
  FaCalendarAlt,
  FaTasks,
  FaChartBar,
  FaUser,
  FaEnvelope,
  FaFileAlt,
  FaBell,
  FaComments,
  FaQuestionCircle,
} from "react-icons/fa";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

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

          {/* Menu Section */}
          <div className="flex-column">
            <div>
              <a
                href="#"
                className="d-flex align-items-center gap-2 transistion_03 p-2 link_hover text-black"
              >
                <FaHome className="text-black" size={20} />
                {!isCollapsed && "Dashboard"}
              </a>
            </div>
            <div>
              <a
                href="#"
                className="d-flex align-items-center gap-2 transistion_03 p-2 link_hover text-black"
              >
                <FaBox className="text-black" size={20} />
                {!isCollapsed && "Products"}
              </a>
            </div>
            <div>
              <a
                href="#"
                className="d-flex align-items-center gap-2 transistion_03 p-2 link_hover text-black"
              >
                <FaCalendarAlt className="text-black" size={20} />
                {!isCollapsed && "Schedule"}
              </a>
            </div>
            <div>
              <a
                href="#"
                className="d-flex align-items-center gap-2 transistion_03 p-2 link_hover text-black"
              >
                <FaTasks className="text-black" size={20} />
                {!isCollapsed && (
                  <>
                    My Task <span className="badge bg-primary ms-2">4</span>
                  </>
                )}
              </a>
            </div>
            <div>
              <a
                href="#"
                className="d-flex align-items-center gap-2 transistion_03 p-2 link_hover text-black"
              >
                <FaChartBar className="text-black" size={20} />
                {!isCollapsed && "Reporting"}
              </a>
            </div>
          </div>

          {/* Account Section */}
          <div className="flex-column d-flex mt-3">
            <div>
              <a
                href="#"
                className="d-flex align-items-center gap-2 transistion_03 p-2 link_hover text-black"
              >
                <FaUser className="text-black" size={20} />
                {!isCollapsed && "User"}
              </a>
            </div>
            <div>
              <a
                href="#"
                className="d-flex align-items-center gap-2 transistion_03 p-2 link_hover text-black"
              >
                <FaEnvelope className="text-black" size={20} />
                {!isCollapsed && (
                  <>
                    Messages <span className="badge bg-danger ms-2">8</span>
                  </>
                )}
              </a>
            </div>
            <div>
              <a
                href="#"
                className="d-flex align-items-center gap-2 transistion_03 p-2 link_hover text-black"
              >
                <FaFileAlt className="text-black" size={20} />
                {!isCollapsed && "Document"}
              </a>
            </div>
            <div>
              <a
                href="#"
                className="d-flex align-items-center gap-2 transistion_03 p-2 link_hover text-black"
              >
                <FaBell className="text-black" size={20} />
                {!isCollapsed && "Notification"}
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto">
            <div className="flex-column">
              <a
                href="#"
                className="d-flex align-items-center gap-2 transistion_03 p-2 link_hover text-black"
              >
                <FaComments className="text-black" size={20} />
                {!isCollapsed && "Live Chat"}
              </a>
              <a
                href="#"
                className="d-flex align-items-center gap-2 transistion_03 p-2 link_hover text-black"
              >
                <FaQuestionCircle className="text-black" size={20} />
                {!isCollapsed && "Help"}
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center my-2 p-2 cursor_pointer">
          <img
            src="https://nursinginstitutegoa.org/wp-content/uploads/2016/01/tutor-8.jpg"
            roundedCircle
            alt="User"
            className="me-2 profile_image rounded_12"
          />
          {!isCollapsed && (
            <div>
              <h6 className="mb-0">Dianne Russell</h6>
              <small>dianne.russell@gmail.com</small>
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
    </div>
  );
}

export default Sidebar;
