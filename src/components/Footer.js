import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="container footer__container">
      <div className="footer">
        <div className="footer__inner">
          <div className="footer__logo">
            <img src="/images/logo.svg" alt="logo" />
            <p>Who wants pizza?</p>
          </div>
          <ul className="footer__links">
            <h4 className="link__title">Who wants Pizza?</h4>
            <Link to="#" className="footer__link">
              About us
            </Link>
            <Link to="#" className="footer__link">
              Privacy Policy
            </Link>
            <Link to="#" className="footer__link">
              Terms and conditions
            </Link>
            <Link to="#" className="footer__link">
              Mobile app
            </Link>
          </ul>
          <ul className="footer__links">
            <h4 className="link__title">Who wants Pizza?</h4>
            <Link to="#" className="footer__link">
              About us
            </Link>
            <Link to="#" className="footer__link">
              Privacy Policy
            </Link>
            <Link to="#" className="footer__link">
              Terms and conditions
            </Link>
            <Link to="#" className="footer__link">
              Mobile app
            </Link>
          </ul>
          <ul className="footer__links">
            <h4 className="link__title">Who wants Pizza?</h4>
            <Link to="#" className="footer__link">
              About us
            </Link>
            <Link to="#" className="footer__link">
              Privacy Policy
            </Link>
            <Link to="#" className="footer__link">
              Terms and conditions
            </Link>
            <Link to="#" className="footer__link">
              Mobile app
            </Link>
          </ul>
        </div>
        <div className="hr"></div>
        <div className="footer__copyright">
          <p>&copy; Copyright 2022 - Who wants Pizza?</p>
        </div>
      </div>
    </div>
  );
}
