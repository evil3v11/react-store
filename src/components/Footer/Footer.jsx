import React from "react";
import { ROUTES } from "../../utils/routes";
import { Link } from "react-router-dom";

import Logo from "../../images/logo.png";
import {
  GITHUB_SVG,
  INSTAGRAM_SVG,
  MAIN_LOGO,
  YOUTUBE_SVG,
} from "../../utils/svg";
import FooterLink from "./FooterLink";

const Footer = () => (
  <section className="footer lg:w-4/5 w-full bg-[#0d1117] flex justify-between items-center px-5 py-2 rounded-md mb-3">
    <div className="logo">
      <Link to={ROUTES.HOME}>{MAIN_LOGO}</Link>
    </div>

    <div className="rights font-extrabold text-[#888888] text-sm">
      Developed by{" "}
      <FooterLink
        className="decoration-none text-indigo-700"
        href="https://github.com/evil3v11"
      >
        Evil
      </FooterLink>
    </div>

    <div className="socials flex justify-evenly gap-3">
      <FooterLink href="https://github.com/evil3v11" className="github">
        {GITHUB_SVG}
      </FooterLink>
      <FooterLink href="https://instagram.com" className="instagram">
        {INSTAGRAM_SVG}
      </FooterLink>
      <FooterLink href="https://youtube.com" className="youtube">
        {YOUTUBE_SVG}
      </FooterLink>
    </div>
  </section>
);

export default Footer;
