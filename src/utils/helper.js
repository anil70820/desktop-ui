import { FaBell, FaBox, FaCalendarAlt, FaChartBar, FaComments, FaEnvelope, FaFileAlt, FaHome, FaQuestionCircle, FaTasks, FaUser } from "react-icons/fa";

export const DASHBOARD_LINKS_LIST = [
  {
    title: "Menu",
    items: [
      { name: "Dashboard", icon: <FaHome />, link: "#" },
      {
        name: "Products",
        icon: <FaBox />,
        link: "#",
        isDropdown: true,
        dropdownItems: [
          { name: "All Products", link: "#" },
          { name: "Add Product", link: "#" },
          { name: "Categories", link: "#" },
        ],
      },
      { name: "Schedule", icon: <FaCalendarAlt />, link: "#" },
      { name: "My Task", icon: <FaTasks />, link: "#", badge: "4" },
      { name: "Reporting", icon: <FaChartBar />, link: "#" },
    ],
  },
  {
    title: "Account",
    items: [
      { name: "User", icon: <FaUser />, link: "#" },
      { name: "Messages", icon: <FaEnvelope />, link: "#", badge: "8" },
      { name: "Document", icon: <FaFileAlt />, link: "#" },
      { name: "Notification", icon: <FaBell />, link: "#" },
    ],
  },
  {
    title: "Footer",
    items: [
      { name: "Live Chat", icon: <FaComments />, link: "#" },
      { name: "Help", icon: <FaQuestionCircle />, link: "#" },
    ],
  },
];
