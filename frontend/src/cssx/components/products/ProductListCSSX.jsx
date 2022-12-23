import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductListCSSX = () => {
  const [productCSSX, setProductCSSX] = useState([]);

  useEffect(() => {
    getProductCSSX();
  }, []);

  const getProductCSSX = async () => {
    const response = await axios.get("http://localhost:5000/manufactures/items/", {withCredentials: true});
    setProductCSSX(response.data);
  };
  return (
    <div>
      <h1 className="title">Sản phẩm</h1>
      <h2 className="subtitle">Danh sách các sản phẩm và số lượng</h2>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã sản phẩm</th>
            <th>Sản phẩm</th>
            <th>Dòng sản phẩm</th>
            <th>Giá</th>
          </tr>
        </thead>
        <tbody>
          {productCSSX.map((product, index) => (
            <tr key={product.productcode}>
            <td>{index + 1}</td>
            <td>{product.productcode}</td>
            <td>{product.productline}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductListCSSX;