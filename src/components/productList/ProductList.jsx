import React from "react";
import "./productlist.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  console.log(products);
  return (
    <div className="productlist">
      <div className="productlist-texts">
        <h1 className="productlist-title">Create and Inspire. It's 2023...</h1>
        <p className="productlist-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio libero
          labore odio voluptate eveniet? Repudiandae ex nisi explicabo
          repellendus ratione sequi odit cum. Esse, hic. Odit dolorem fugiat
          perferendis quo.
        </p>
      </div>
      <div className="productlist-list">
        {products.map((product) => {
          return <Product img={product.imgb} link={product.link} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
