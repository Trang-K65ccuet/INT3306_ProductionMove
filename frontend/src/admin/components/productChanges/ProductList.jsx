import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
  const [productLines, setProductLines] = useState([]);

  useEffect(() => {
    getProductLines(); 
  }, []); 

  const getProductLines = async () => {
    const response = await axios.get('http://localhost:5000/productline', {withCredentials: true}); 
    setProductLines(response.data); 
  }

  const deleteProductLine = async () => {
    await axios.delete(`http://localhost:5000/productline/delete`, {withCredentials: true})
    getProductLines(); 
  }
  
  return (
    <div>
      <h1 className="title">Dòng sản phẩm</h1>
      <h2 className="subtitle">Danh mục dòng sản phẩm</h2>
      <Link to="/admin/products/add" className="button is-primary mb-2">
        Thêm mới
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên dòng sản phẩm</th>
            <th>Mô tả</th>
            <th>Tùy chọn</th>
          </tr>
        </thead>
        <tbody>
          {productLines.map((productLine, index) => (
            <tr key={productLine.productline}>
            <td>{index + 1}</td>
            <td>{productLine.productline}</td>
            <td>{productLine.description}</td>
            <td>
              <Link
                to={`/admin/products/edit/${productLine.productline}`}
                className="button is-small is-info"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteProductLine()}
                className="button is-small is-danger"
              >
                Delete
              </button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;