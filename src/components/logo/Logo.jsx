import React from "react";
import logo from "../../assets/img/logo/logo.png";
import { APP_NAME } from "../../constants/string";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <img src={logo} alt={APP_NAME} />
    </Link>
  );
};

export default Logo;
