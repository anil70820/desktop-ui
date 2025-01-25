import React from "react";
import { FaCog, FaCrown, FaPlus, FaSignOutAlt, FaUser } from "react-icons/fa";

const ProfilePopUp = ({isDropdownVisible }) => {
  return (
    <div className="position-relative">
      {/* Dropdown Menu */}
      {isDropdownVisible && (
        <div
          className="bg-white shadow rounded-3 p-3 position-absolute"
          style={{
            top: "50px",
            right: "0",
            width: "200px",
            zIndex: 1000,
          }}
        >
          <a
            href="#"
            className="d-flex align-items-center gap-2 p-2 text-black text-decoration-none hover-bg"
          >
            <FaUser size={16} />
            Profile
          </a>
          <a
            href="#"
            className="d-flex align-items-center gap-2 p-2 text-black text-decoration-none hover-bg"
          >
            <FaCrown size={16} />
            Upgrade to Pro
          </a>
          <a
            href="#"
            className="d-flex align-items-center gap-2 p-2 text-black text-decoration-none hover-bg"
          >
            <FaCog size={16} />
            Settings
          </a>
          <hr className="my-2" />
          <a
            href="#"
            className="d-flex align-items-center gap-2 p-2 text-black text-decoration-none hover-bg"
          >
            <FaPlus size={16} />
            Add Account
          </a>
          <a
            href="#"
            className="d-flex align-items-center gap-2 p-2 text-black text-decoration-none hover-bg"
          >
            <FaSignOutAlt size={16} />
            Log Out
          </a>
        </div>
      )}
    </div>
  );
};

export default ProfilePopUp;
