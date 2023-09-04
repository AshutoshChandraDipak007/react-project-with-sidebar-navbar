import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sideBarData } from "../../storeData/sidebarItems";
import "./sidebar.css";
import { useSelector, useDispatch } from 'react-redux';

function SideBar() {

 const isToggle= useSelector((state) => state.counter.isToggle)

  return (
    <>
      {isToggle &&(<SidebarWithLogoAndTitle />)}
      {!isToggle &&(<SideBarWithLogoOnly />)}
    </>
  );
}

export default SideBar;

function SidebarWithLogoAndTitle(){
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
function SideBarWithLogoOnly(){
  return (<div className="sidebar-container-only-icon">
  {sideBarData?.map((item, index) => {
    return (
      <>
        <div         
          className="sidebar-options"
          key={index}>
          <Link style={{ textDecoration: "none", color: "#e1e9fc" }}>
            {item?.icon}
          </Link>
        </div>           
      </>
    );
  })}
</div>)

}