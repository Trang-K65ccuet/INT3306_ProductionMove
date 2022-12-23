import React from "react";
import Layout from "../../pages/Layout";
import { useState, useEffect } from "react";
import axios from "axios";

const ExportProductInDLPP = () => {
  const [productline, setProductline] = useState([]);

  useEffect(() => {
    getProductline();
  }, []);

  const getProductline = async () => {
    const response = await axios.get("http://localhost:5000/productline",{withCredentials: true});
    console.log(response.data); 
    setProductline(response.data);  
  };
  return (
    <Layout>
      <div>
      <h1 className="title">Bán hàng</h1>
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
                <label className="label">Họ tên khách hàng</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Họ tên khách hàng"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Số điện thoại</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Số điện thoại"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Địa chỉ</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Địa chỉ"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Ngày bán</label>
                <div className="control">
                  <input
                    type="date"
                    className="input"
                    placeholder="Ngày bán"
                  />
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

export default ExportProductInDLPP;