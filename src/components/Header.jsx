import React, { useEffect, useState } from "react";
import "../assets/css/header.css";
import Logo from "../assets/img/logo.png";
import { CiLight, CiShoppingBasket } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [theme, setTheme] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const root = document.getElementById("root");
    if (theme) {
      root.style.backgroundColor = "black";
      root.style.color = "white";
    } else {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme((prev) => !prev);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        className="flex-row"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        <img className="logo" src={Logo} />
        <p className="paragh">Ph_commerce</p>
      </div>

      <div className="flex-row">
        <input
          className="search-text"
          type="text"
          placeholder="Search something"
        />
        <div>
          {theme ? (
            <FaMoon className="icon" onClick={changeTheme} />
          ) : (
            <CiLight className="icon" onClick={changeTheme} />
          )}
          <CiShoppingBasket className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
