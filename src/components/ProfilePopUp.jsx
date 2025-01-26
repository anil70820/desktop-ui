import React from "react";
import { FaCog, FaCrown, FaPlus, FaSignOutAlt, FaUser } from "react-icons/fa";

const ProfilePopUp = () => {
  return (
    <div className="bg-white shadow rounded-3 p-1 popup_size">
      <div className="d-flex align-items-center cursor_pointer position-relative p-2 hover transistion_03 rounded_08">
        <img
          src="https://nursinginstitutegoa.org/wp-content/uploads/2016/01/tutor-8.jpg"
          roundedCircle
          alt="User"
          className="rounded_12 me-2 profile_image"
        />
        <div>
          <h6 className="mb-0 leading_100">Dianne Russell</h6>
          <small className="leading_100">dianne.russell@gmail.com</small>
        </div>
      </div>
      <div className="bg_brown rounded_12 p-2 mt-1">
      <a
        href="#"
        className="d-flex align-items-center gap-2 transistion_03 p-2 link_hover position-relative text-black rounded_08"
      >
        <FaUser size={16} />
        Profile
      </a>
      <a
        href="#"
        className="d-flex align-items-center gap-2 transistion_03 p-2 link_hover position-relative text-black rounded_08"
      >
        <FaCrown size={16} />
        Upgrade to Pro
      </a>
      <a
        href="#"
        className="d-flex align-items-center gap-2 transistion_03 p-2 link_hover position-relative text-black rounded_08"
      >
        <FaCog size={16} />
        Settings
      </a>
      <hr className="my-2" />
      <a
        href="#"
        className="d-flex align-items-center gap-2 transistion_03 p-2 link_hover position-relative text-black rounded_08"
      >
        <FaPlus size={16} />
        Add Account
      </a>
      <a
        href="#"
        className="d-flex align-items-center gap-2 transistion_03 p-2 link_hover position-relative text-black rounded_08"
      >
        <FaSignOutAlt size={16} />
        Log Out
      </a>
      </div>
    </div>
  );
};

export default ProfilePopUp;
