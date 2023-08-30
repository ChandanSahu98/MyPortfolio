import React from "react";
import "./productlist.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  console.log(products);
  return (
    <div className="productlist">
      <div className="productlist-texts">
        <h1 className="productlist-title">
          🌟 Create and Inspire its 2023. 🌟{" "}
        </h1>
        <p className="productlist-desc">
          In a world buzzing with possibilities, we've dared to dream, and not
          just dream, but also to do. Our projects are the testament to our
          commitment, our dedication, and our refusal to be confined by the
          ordinary. Each endeavor, whether big or small, carries a piece of our
          souls, a fragment of our imagination, and a whisper of our unique
          voice.
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
