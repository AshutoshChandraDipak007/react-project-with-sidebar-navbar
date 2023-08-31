import React from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { navBarData } from "../../storeData/navbarItems";
import { Button, Link } from "@mui/material";
import SiwosLogo from "../images/LogoAspose.png";

export default function NavBar() {

  const imageStyle={
    width:150,
    height:40,
    marginBottom:-15

  }
  
  return (
    <div className="navbar">
      <div className="left-menu-items">
        <Button>
        <MenuIcon style={{ color: "white" }} />
        </Button>
        
        <img src={SiwosLogo} style={imageStyle} ></img>
      </div>
      <div className="right-menu-items">
        {navBarData.map((item) => {
          return (
            <Link>
              <span>
                {item.name} {item.icon}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
