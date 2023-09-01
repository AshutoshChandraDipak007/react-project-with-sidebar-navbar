import React from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { navBarData } from "../../storeData/navbarItems";
import { Button, Link } from "@mui/material";
import SiwosLogo from "../../images/BmwLog.jpg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function NavBar() {
  const imageStyle = {
    width: 50,
    height: 40,
    marginBottom:"-15px",
    marginLeft:'25px'
  };

  const buttonStyle = {
    marginBottom: 10,
  };

  const linkStyle={
    textDecoration:'none',
  }

  return (
    <div className="navbar">
      <div className="left-menu-items">
        <Button style={buttonStyle}>
          <MenuIcon style={{color: "white"}} />
        </Button>
        <img src={SiwosLogo} style={imageStyle}/>
      </div>

      <div className="right-menu-items">
        {navBarData?.map((item,index) => {
          return (
            <Link style={linkStyle}>             
                 <DisplayNavbarItems item={item} key={index}/>             
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function DisplayNavbarItems(props) {
  const { icon, title, name } = props?.item;
  return (
    <>
      {name !== "Language" && (
        <span>
          {name} {icon}
        </span>
      )}
      {name === "Language" && (
        <span>
          <LanguageDropdown title={title} icon={icon} />
        </span>
      )}
    </>
  );
}

function LanguageDropdown(props) {
  const { icon } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [language, setLanguage] = React.useState("English");
  const open = Boolean(anchorEl);

  const buttonStyle = {
    textTransform: "none",
    color: "black",
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEnglish = () => {
    setLanguage("English");
    setAnchorEl(null);
  };
  const handleGerman = () => {
    setLanguage("German");
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        style={{ color: "white" }}
        sx={buttonStyle}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}>
        {language} {icon}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}>
        <MenuItem onClick={handleEnglish} style={buttonStyle}>
          English
        </MenuItem>
        <MenuItem onClick={handleGerman} style={buttonStyle}>
          German
        </MenuItem>
      </Menu>
    </div>
  );
}
