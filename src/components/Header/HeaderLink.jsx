import React from "react";
import { Link } from "react-router-dom";

const HeaderLink = ({ to, className }) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default HeaderLink;
