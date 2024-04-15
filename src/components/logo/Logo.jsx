import React from "react";
import { Link } from "react-router-dom";
import logoGradient from "../../assets/img/logo/logo-gradient.svg";
import logoUnion from "../../assets/img/logo/logo-union.svg";
import logo from "../../assets/img/logo/logo.png";
import { APP_NAME } from "../../constants/string";

const Logo = ({ variant = "default" | "gradient" | "union" }) => {
  return (
    <Link to={"/"}>
      {variant === "union" ? (
        <img src={logoUnion} alt={APP_NAME} />
      ) : variant === "gradient" ? (
        <img src={logoGradient} alt={APP_NAME} />
      ) : (
        <img src={logo} alt={APP_NAME} />
      )}
    </Link>
  );
};

export default Logo;
