import React, { useEffect, useState } from "react";
import "../assets/css/header.css";
import Logo from "../assets/img/logo.png";
import { CiLight, CiShoppingBasket } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../redux/slices/basketSlice";

const Header = () => {
  const [theme, setTheme] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { products, setD } = useSelector((store) => store.basket);

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
        <div style={{ display: "flex" }}>
          {theme ? (
            <FaMoon className="icon" onClick={changeTheme} />
          ) : (
            <CiLight className="icon" onClick={changeTheme} />
          )}

          <Badge
            onClick={() => dispatch(setDrawer())}
            badgeContent={products.length}
            color="error"
          >
            <CiShoppingBasket style={{ marginRight: "6px" }} className="icon" />
          </Badge>
        </div>
      </div>
    </div >
  );
};

export default Header;
