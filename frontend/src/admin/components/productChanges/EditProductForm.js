import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const EditProductForm = () => {
  const {productline} = useParams(); 
  
  const [newProductLineName, setNewProductLineName] = useState(""); 
  const [description, setDescription] = useState("");
  const [oldProductlineName, setOldProductlineName] = useState(productline);  
  const [msg, setMsg] = useState(""); 
  const navigate = useNavigate(); 
  

  const updateProductline = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/productline/update`, {
        productline: oldProductlineName,
        newproductline: newProductLineName,
        description: description,
      }, {withCredentials: true});
      navigate("/admin/products");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }
  return (
    <div>
      <h1 className="title">Dòng sản phẩm</h1>
      <h2 className="subtitle">Chỉnh sửa dòng sản phẩm</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateProductline}>
              <div className="field">
                <label className="label">Tên dòng sản phẩm</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Tên dòng sản phẩm"
                    value={oldProductlineName}
                    readOnly="readOnly"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Tên dòng sản phẩm mới</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Tên dòng sản phẩm mới"
                    required = "required"
                    value={newProductLineName}
                    onChange={(e) => setNewProductLineName(e.target.value)}
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
                    required="required"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
              <p className="has-text-centered">{msg}</p>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Cập nhật
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

export default EditProductForm;