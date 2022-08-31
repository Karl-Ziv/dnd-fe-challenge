import React from "react";
import AppColors from "../configs/AppColors";

import { slide as Menu } from "react-burger-menu";

function Nav() {
  return (
    <>
      <div className="navContainer">
        <div className="mobileNav">
          <Menu styles={styles} right>
            <a className="menu-item" href="/">
              Home
            </a>
            <a className="menu-item" href="/spells">
              Spells
            </a>
          </Menu>
        </div>
      </div>
    </>
  );
}

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "26px",
    top: "28px",
  },
  bmBurgerBars: {
    background: "white",
  },
  bmBurgerBarsHover: {
    background: "black",
  },
  bmCrossButton: {
    height: "34px",
    width: "34px",
    right: "15px",
    top: "15px",
  },
  bmCross: {
    background: AppColors.textColor,
  },
  bmCrossHover: { background: "black" },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    width: "50%",
    maxWidth: "250px",
  },
  bmMenu: {
    background: AppColors.otherColor,
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
    height: "fit-content",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

export default Nav;
