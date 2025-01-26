import React from "react";
import { DASHBOARD_LINKS_LIST } from "../utils/helper";

const SupportLinks = ({ isCollapsed, tooltip, setTooltip }) => {
  const footerItems =
    DASHBOARD_LINKS_LIST.find((section) => section.title === "Footer")?.items ||
    [];
  return (
    <div className="mt-auto">
      {footerItems.map((item, index) => (
        <div key={index}>
          <a
            href={item.link}
            onMouseEnter={() => setTooltip(item.name)}
            onMouseLeave={() => setTooltip(null)}
            className="d-flex align-items-center gap-2 transistion_03 p-2 link_hover position-relative text-black rounded_08"
          >
            <span className="icon_wrapper transistion_03">{item.icon}</span>
            {!isCollapsed && <p className="mb-0 leading_100">{item.name}</p>}
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
  );
};

export default SupportLinks;
