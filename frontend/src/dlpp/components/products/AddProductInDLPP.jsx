import React from "react";
import Layout from "../../pages/Layout";
import { useState, useEffect } from "react";
import axios from "axios";


const AddProductInDLPP = () => {
  const [productline, setProductline] = useState([]);
  const [cssx, setCssx] = useState([]);

  useEffect(() => {
    getProductline();
  }, []);

  useEffect(() => {
    getCSSX();
  }, []);

  const getProductline = async () => {
    const response = await axios.get("http://localhost:5000/productline",{withCredentials: true});
    console.log(response.data); 
    setProductline(response.data);  
  };

  const getCSSX = async () => {
    const response = await axios.get("http://localhost:5000/manufactures/all",{withCredentials: true});
    console.log(response.data); 
    setCssx(response.data);  
  };
  return (
    <Layout>
      <div>
      <h1 className="title">Yêu cầu nhận hàng</h1>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form>
              <p className="has-text-centered"></p>
              <div className="field">
                <label className="label">Sản phẩm</label>
                <div className="control">
                <select className="input">
                {productline.map((product) => (
                    <option>{product.description}</option>
                ))}
                </select>
                </div>
              </div>
              <div className="field">
                <label className="label">Số lượng</label>
                <div className="control">
                  <input
                    type="number"
                    className="input"
                    placeholder="Số lượng"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Cơ sở sản xuất</label>
                <div className="control">
                <select className="input">
                {cssx.map((cssx) => (
                    <option>{cssx.name}</option>
                ))}
                </select>
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Gửi
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </Layout>
    
  );
};

export default AddProductInDLPP;