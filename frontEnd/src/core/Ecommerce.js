import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";

export default function Ecommerce() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getProducts().then(data => {
      if (!data.error) {
        setProducts(data);
      } else {
        setError(data.error);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <Base title="Home Page" description="Welcome to the Store">
      <div className="row text-center" >
        <div className="row">
          {products.map((product, index) => {
            return (
              <div key={index} className="mb-4" style={{marginLeft: "100px"}}>
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
}
