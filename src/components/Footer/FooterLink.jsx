import React from "react";

const FooterLink = ({ children, href, className }) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default FooterLink;
