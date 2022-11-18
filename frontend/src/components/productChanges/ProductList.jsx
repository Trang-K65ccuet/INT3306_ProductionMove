import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <div>
      <h1 className="title">Products</h1>
      <h2 className="subtitle">List of Products</h2>
      <Link to="/products/add" className="button is-primary mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        <tr>
              <td>1</td>
              <td>Lenovo</td>
              <td>$1000</td>
              <td>Sold</td>
              <td>
                <Link
                  to={`/products/edit/1`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;