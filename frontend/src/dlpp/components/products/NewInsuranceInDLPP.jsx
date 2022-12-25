import React from "react";
import Layout from "../../pages/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const NewInsuranceInDLPP = () => {
    const [productcode, setProduct] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const getSendError = async (e) => {
      e.preventDefault();
      try {
        await axios.post(
          "http://localhost:5000/productitem/importfaultproduct",
          {
            productcode:productcode,
          },
          { withCredentials: true }
        );
        navigate('/dlpp/insurance');
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };

  return (
    <Layout>
      <div>
      <h1 className="title">Bảo hành</h1>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={getSendError}>
              <p className="has-text-centered"></p>
              <div className="field">
                <label className="label">Mã sản phẩm</label>
                <div className="control">
                  <input
                    value = {productcode} 
                    onChange={(e) => setProduct(e.target.value)}
                    type="text"
                    className="input"
                    placeholder="Mã sản phẩm"
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

export default NewInsuranceInDLPP;