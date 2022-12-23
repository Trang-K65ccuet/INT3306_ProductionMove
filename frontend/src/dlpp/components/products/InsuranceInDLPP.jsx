import React from "react";
import Layout from "../../pages/Layout";
import { useState, useEffect } from "react";
import axios from "axios";


const InsuranceInDLPP = () => {
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
      <h1 className="title">Bảo hành</h1>
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
                <label className="label">Mã sản phẩm</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Mã sản phẩm"
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Gửi cho trung tâm bảo hành
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

export default InsuranceInDLPP;