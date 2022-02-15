import React from "react";
import { Link, Outlet } from "react-router-dom";
import ProductList from "./ProductList";
import "./Home.scss";
import MobileCart from "./MobileCart";
import Modal from "./Modal";

export default function Home(props) {
  return (
    <div className="home">
      <div className="container categories__container">
        <ul className="home__categories">
          <Link to="#" className="home__categories__link">
            <div className="wrapper">
              <img src="/images/Fire.svg" alt="..." />
              <p className="category__text">Top</p>
            </div>
          </Link>
          <Link to="#" className="home__categories__link">
            <div className="wrapper">
              <img src="/images/Pizza.svg" alt="pizza" />
              <p className="category__text">Pizza</p>
            </div>
          </Link>
          <Link to="#" className="home__categories__link">
            <div className="wrapper">
              <img src="/images/Sushi.svg" alt="" />
              <p className="category__text">Top</p>
            </div>
          </Link>
          <Link to="#" className="home__categories__link">
            <div className="wrapper">
              <img src="/images/Drink.svg" alt="drink" />
              <p className="category__text">Drinks</p>
            </div>
          </Link>
          <Link to="#" className="home__categories__link">
            <div className="wrapper">
              <img src="/images/Dessert.svg" alt="dessert" />
              <p className="category__text">Dessert</p>
            </div>
          </Link>
          <Link to="#" className="home__categories__link">
            <div className="wrapper">
              <img src="/images/Combo.svg" alt="combo" />
              <p className="category__text">Combo</p>
            </div>
          </Link>
          <Link to="#" className="home__categories__link">
            <div className="wrapper">
              <img src="/images/Sauce.svg" alt="" />
              <p className="category__text">Sauce</p>
            </div>
          </Link>
          <Link to="#" className="home__categories__link">
            <div className="wrapper">
              <img src="/images/Snacks.svg" alt="snacks" />
              <p className="category__text">Snacks</p>
            </div>
          </Link>
        </ul>
      </div>

      <div className="container banners__container">
        <div className="banners">
          <div className="banners__box">
            <img src="/images/Banner2.png" alt="banner" />
          </div>
          <div className="banners__box">
            <img src="/images/Banner1.png" alt="banner" />
          </div>
          <div className="banners__box">
            <img src="/images/Banner2.png" alt="banner" />
          </div>
          <div className="banners__box">
            <img src="/images/Banner1.png" alt="banner" />
          </div>
        </div>
      </div>

      <div className="container address__container">
        <form action="." className="address">
          <p>Check address location</p>
          <div className="address__inputs">
            <div className="address__search">
              <div className="wrapper">
                <label htmlFor="search">
                  <img src="/images/Location.svg" alt="location" />
                </label>
                <input
                  type="search"
                  name="city"
                  id="search"
                  placeholder="Address"
                />
              </div>
            </div>
            <button type="submit" className="address__submit">
              <p>Submit</p>
              <img src="/images/Vector.svg" alt="vector" />
            </button>
          </div>
        </form>
      </div>

      <ProductList category="Pizza" />
      <ProductList category="Sushi" />
      <ProductList category="Snacks" />
      <ProductList category="Dessert" />
      <ProductList category="Drinks" />
      <ProductList category="Sausage" />
      <ProductList category="Combo" />

      <div className="container about__container">
        <div className="about">
          <h3>Pizza shipping in Tashkent</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            similique nesciunt labore quidem dolorum! Voluptatem, illo! Voluptas
            itaque, est deleniti blanditiis ipsa eaque laborum dignissimos
            doloremque perferendis aliquid, illum quibusdam.
          </p>
          <button>More</button>
        </div>
      </div>

      <MobileCart />

      <Outlet />
    </div>
  );
}
