import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sideBarData } from "../../storeData/sidebarItems";
import "./sidebar.css";

function SideBar() {
  const [navBarData, setNavBarData] = useState(sideBarData);

  const handleSubMenu = (id) => {
    let newArray = navBarData.map((item) => {
      if (item.id == id) {
        item.subNavFlag = true;
      } else {
        item.subNavFlag = false;
      }
      return item;
    });
    setNavBarData(newArray);
  };

  return (
    <div className="sidebar-container">
      {navBarData?.map((item, index) => {
        return (
          <>
            <div
              onClick={() => handleSubMenu(item.id)}
              className="sidebar-options"
              key={index}>
              <Link style={{ textDecoration: "none", color: "#e1e9fc" }}>
                {item?.icon} {item?.title}
              </Link>
            </div>
            {item?.subNavFlag &&
              item.subNav?.map((item, index) => {
                return (
                  <Link
                    to={item?.to}
                    style={{ textDecoration: "none", color: "#e1e9fc" }}>
                    <div className="submenu-sidebar-options" key={index}>
                      {item?.title}
                    </div>
                  </Link>
                );
              })}
          </>
        );
      })}
    </div>
  );
}

export default SideBar;
