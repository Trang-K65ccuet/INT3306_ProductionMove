import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";




const AddProductForm = () => {
  const [productline, setProductLine] = useState("");
  const [description, setDescription] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveNewProductLine = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/productline/add", {
        productline: productline,
        description: description,
      }, {withCredentials: true});
      navigate("admin/products");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <h1 className="title">Các dòng sản phẩm</h1>
      <h2 className="subtitle">Thêm dòng sản phẩm mới</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveNewProductLine}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Tên dòng sản phẩm</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Tên dòng sản phẩm"
                    required='required'
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Mô tả</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Mô tả"
                    required='required'
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Thêm
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;