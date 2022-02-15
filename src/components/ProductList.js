import React from "react";
import "./ProductList.scss";
import { Link } from "react-router-dom";

export default function ProductList(props) {
  const foods = [
    {
      id: 1,
      title: "Chicket tasty Chili",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius maiores omnis officia voluptates neque! Laborum soluta architecto corrupti perferendis repellat? Quo consequatur eum excepturi exercitationem inventore ipsa ea repudiandae fugiat.",
      img: "/images/Rectangle 4.png",
      label: "NEW",
      price: 490,
      actual_price: 560,
    },
    {
      id: 2,
      title: "Chicket tasty Chili",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius maiores omnis officia voluptates neque! Laborum soluta architecto corrupti perferendis repellat? Quo consequatur eum excepturi exercitationem inventore ipsa ea repudiandae fugiat.",
      img: "/images/Rectangle 4.png",
      label: "NEW",
      price: 490,
      actual_price: 560,
    },
    {
      id: 3,
      title: "Chicket tasty Chili",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius maiores omnis officia voluptates neque! Laborum soluta architecto corrupti perferendis repellat? Quo consequatur eum excepturi exercitationem inventore ipsa ea repudiandae fugiat.",
      img: "/images/Rectangle 4.png",
      label: "NEW",
      price: 490,
      actual_price: 560,
    },
    {
      id: 4,
      title: "Chicket tasty Chili",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius maiores omnis officia voluptates neque! Laborum soluta architecto corrupti perferendis repellat? Quo consequatur eum excepturi exercitationem inventore ipsa ea repudiandae fugiat.",
      img: "/images/Rectangle 4.png",
      label: "NEW",
      price: 490,
      actual_price: 560,
    },
    {
      id: 5,
      title: "Chicket tasty Chili",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius maiores omnis officia voluptates neque! Laborum soluta architecto corrupti perferendis repellat? Quo consequatur eum excepturi exercitationem inventore ipsa ea repudiandae fugiat.",
      img: "/images/Rectangle 4.png",
      label: "NEW",
      price: 490,
      actual_price: 560,
    },
    {
      id: 6,
      title: "Chicket tasty Chili",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius maiores omnis officia voluptates neque! Laborum soluta architecto corrupti perferendis repellat? Quo consequatur eum excepturi exercitationem inventore ipsa ea repudiandae fugiat.",
      img: "/images/Rectangle 4.png",
      label: "NEW",
      price: 490,
      actual_price: 560,
    },
    {
      id: 7,
      title: "Chicket tasty Chili",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius maiores omnis officia voluptates neque! Laborum soluta architecto corrupti perferendis repellat? Quo consequatur eum excepturi exercitationem inventore ipsa ea repudiandae fugiat.",
      img: "/images/Rectangle 4.png",
      label: "NEW",
      price: 490,
      actual_price: 560,
    },
    {
      id: 8,
      title: "Chicket tasty Chili",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius maiores omnis officia voluptates neque! Laborum soluta architecto corrupti perferendis repellat? Quo consequatur eum excepturi exercitationem inventore ipsa ea repudiandae fugiat.",
      img: "/images/Rectangle 4.png",
      label: "NEW",
      price: 490,
      actual_price: 560,
    },
  ];

  return (
    <div className="container products__container">
      <div className="products">
        <div className="products__info">
          <h2>{props.category}</h2>
          <button className="products__info__filters">
            <img src="images/Filter.svg" alt="filter" />
            <p>Filters</p>
          </button>
        </div>
        <div className="products__box">
          {foods.map((food) => (
            <div className="product" key={food.id}>
              <Link to={`/products/${food.id}`} className="product__img">
                {food.label && <p class="product__img__label">{food.label}</p>}
                <img src={food.img} alt="..." />
              </Link>
              <div className="product__text">
                <div>
                  <h4 className="product__title">{food.title}</h4>
                  <p className="product__description">{food.description}</p>
                </div>
                <div className="product__price__bar">
                  <button className="product__add">Add</button>
                  <div className="product__price">{food.price}$</div>
                  {food.actual_price && (
                    <p className="product__actual__price">
                      {food.actual_price}$
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
