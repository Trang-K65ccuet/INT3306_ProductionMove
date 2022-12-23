import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductListDLPP = () => {

  //return id
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    getProfile();
  }, []);
  const getProfile = async () => {
    const response = await axios.get("http://localhost:5000/profile", {withCredentials: true});
    setProfile(response.data);
  };

  const id = profile.id;
  //const item_dlpp = "http://localhost:5000/lot/item/"+ id;
  console.log("http://localhost:5000/lot/item/" + id);
  //return product list
  const [productDLPP, setProductDLPP] = useState([]);

  useEffect(() => {
    getProductDLPP();
  }, []);

  const getProductDLPP = async () => {
    const response = await axios.get("http://localhost:5000/lot/item/" + id, {withCredentials: true});
    setProductDLPP(response.data);
  };

  return (
    <div>
      <h1 className="title">Sản phẩm</h1>
      <h2 className="subtitle">Danh sách các sản phẩm và số lượng</h2>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>STT</th>
            <th>Sản phẩm</th>
            <th>Dòng dản phẩm</th>
            <th>Số lượng</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  );
};

export default ProductListDLPP;