import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SideDrawer from "./SideDrawer";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#2F2F2F",
    boxShadow: "none"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  menu: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

export default function Header() {
  const [DrawerOpen, setDrawerOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false)

  const handleScroll =()=>{
    // console.log(window.scrollY)
    if(window.scrollY>0)
    {
      setShowHeader(true)
    }else{
      setShowHeader(false)
    }
  }
  useEffect(() => {
    
    window.addEventListener("scroll", handleScroll)

  }, [])
  const classes = useStyles();
  const Header_bg = showHeader?'':'transparent';
  console.log(Header_bg, showHeader)
  return (
    <div className="background">
      <AppBar className={classes.root} style={{backgroundColor:Header_bg}} position="fixed">
        <Toolbar className={classes.menu}>
          <div className="brand-wrap">
            <div className="font_righteous brand-main">The Venue</div>
            <div className="brand-title">Musical Event</div>
          </div>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => {
              setDrawerOpen(true);
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <SideDrawer
          open={DrawerOpen}
          onClose={() => {
            setDrawerOpen(false);
          }}
        />
      </AppBar>
    </div>
  );
}
