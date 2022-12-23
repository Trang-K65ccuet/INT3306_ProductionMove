import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductListDLPP = () => {


  const [productDLPP, setProductDLPP] = useState([]);

  useEffect(() => {
    getProductDLPP();
  }, []);

  const getProductDLPP = async () => {
    const response = await axios.get("http://localhost:5000/lot/get/item/", {withCredentials: true});
    setProductDLPP(response.data);
  };

  return (
    <div>
      <h1 className="title">Sản phẩm</h1>
      <h2 className="subtitle">Các sản phẩm trong kho của đại lý</h2>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã sản phẩm</th>
            <th>Sản phẩm</th>
            <th>Dòng dản phẩm</th>
            <th>Giá</th>
          </tr>
        </thead>
        <tbody>
          {productDLPP.map((product, index) => (
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

export default ProductListDLPP;