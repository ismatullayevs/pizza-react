import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./Navbar.scss";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  handleToggle = (e) => {
    e.currentTarget.classList.toggle("open");
    this.setState({ isOpen: !this.state.isOpen });
  };

  componentDidUpdate() {
    if (this.state.isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }

  componentWillUnmount() {
    document.body.style.overflowY = "auto";
  }

  render() {
    return (
      <>
        <div className="navbar mobile container bg-white">
          <Link to="/" className="logo">
            <img src="/images/logo.svg" alt="logo" />
            <p>Who wants Pizza?</p>
          </Link>
          <div className="navbar__toggle" onClick={this.handleToggle}>
            <span className="navbar__toggle__bar first"></span>
            <span className="navbar__toggle__bar second"></span>
            <span className="navbar__toggle__bar third"></span>
          </div>
          <CSSTransition
            in={this.state.isOpen}
            timeout={100}
            unmountOnExit
            classNames="dropdown__animate"
          >
            <div className="navbar__dropdown">
              <Link to="#" className="signup">
                <i className="fas fa-user"></i>
                <p>Sign up</p>
              </Link>
              <ul className="navbar__links">
                <NavLink to="#" className="navbar__link">
                  Home
                </NavLink>
                <NavLink to="#" className="navbar__link">
                  Offer
                </NavLink>
                <NavLink to="#" className="navbar__link">
                  Cart
                </NavLink>
                <NavLink to="#" className="navbar__link">
                  Map
                </NavLink>
                <NavLink to="#" className="navbar__link">
                  Buy Pizza
                </NavLink>
              </ul>
              <div className="navbar__footer">
                <div className="phone">
                  <i className="fas fa-phone-alt"></i>
                  <p>+7 (926) 223-10-11</p>
                </div>
                <div className="location">
                  <i className="fas fa-map-marker-alt"></i>
                  <p>Tashkent, Street d.99</p>
                </div>
                <div className="social__apps">
                  <Link to="#" className="social__facebook">
                    <i className="fab fa-facebook"></i>
                    <p>Facebook</p>
                  </Link>
                  <Link to="#" className="social__instagram">
                    <i className="fab fa-instagram"></i>
                    <p>Instagram</p>
                  </Link>
                </div>
              </div>
            </div>
          </CSSTransition>
        </div>

        {/* For Desktop */}
        <div className="desktop container bg-white">
          <div className="navbar">
            <Link to="/" className="logo">
              <img src="/images/logo.svg" alt="logo" />
              <p>Who wants Pizza?</p>
            </Link>
            <ul className="navbar__links">
              <NavLink to="#" className="navbar__link">
                Action
              </NavLink>
              <NavLink to="#" className="navbar__link">
                Action
              </NavLink>
              <NavLink to="#" className="navbar__link">
                Action
              </NavLink>
              <NavLink to="#" className="navbar__link">
                Action
              </NavLink>
              <NavLink to="#" className="navbar__link">
                Action
              </NavLink>
              <NavLink to="#" className="navbar__link">
                Action
              </NavLink>
              <NavLink to="#" className="navbar__link">
                Action
              </NavLink>
            </ul>
            <Link to="/cart" className="cart">
              <img src="/images/Shopping bag.svg" alt="cart" />
              <p>0 $</p>
            </Link>
          </div>
        </div>
        <div className="hr"></div>
      </>
    );
  }
}
