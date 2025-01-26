import React from "react";
import { DASHBOARD_LINKS_LIST } from "../utils/helper";

const AccountLinks = ({isCollapsed,tooltip,setTooltip}) => {
     const accountItems =
        DASHBOARD_LINKS_LIST.find((section) => section.title === "Account")
          ?.items || [];
  return (
    <div className="mt-3">
      <h6
        className={`text-muted leading_100 ${isCollapsed ? "text_hidden" : ""}`}
      >
        Account
      </h6>

      {accountItems.map((item, index) => (
        <div key={index}>
          <a
            href={item.link}
            onMouseEnter={() => setTooltip(item.name)} // Show tooltip on hover
            onMouseLeave={() => setTooltip(null)} // Hide tooltip on hover out
            className="d-flex align-items-center justify-content-between gap-2 transistion_03 p-2 link_hover position-relative text-black rounded_08"
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

export default AccountLinks;
