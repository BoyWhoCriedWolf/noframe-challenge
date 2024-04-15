import React from "react";
import logo from "../../assets/img/logo/logo.png";
import logoGradient from "../../assets/img/logo/logo-gradient.svg";
import { APP_NAME } from "../../constants/string";
import { Link } from "react-router-dom";

const Logo = ({ variant = "default" | "gradient" }) => {
  return (
    <Link to={"/"}>
      {variant === "gradient" ? (
        <img src={logoGradient} alt={APP_NAME} />
      ) : (
        <img src={logo} alt={APP_NAME} />
      )}
    </Link>
  );
};

export default Logo;
