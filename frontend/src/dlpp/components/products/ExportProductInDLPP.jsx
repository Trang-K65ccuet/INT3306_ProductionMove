import React from "react";
import Layout from "../../pages/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ExportProductInDLPP = () => {
  const [productline, setProductline] = useState([]);

  useEffect(() => {
    getProductline();
  }, []);

  const getProductline = async () => {
    const response = await axios.get("http://localhost:5000/productline",{withCredentials: true});
    setProductline(response.data);  
  };
  
  const [chooseProductline, setChooseProductline] = useState("");
  const [quantity, setQuantity] = useState("");
  const [customername, setName] = useState("");
  const [customerphone, setPhone] = useState("");
  const [customeraddress, setAddress] = useState("");
  const [timeExpired, setTimeExpired] = useState("");
  const [date, setDate] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const getSendCustomer = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/consignment/send",
        {
          productline:chooseProductline, 
          quantity:quantity, 
          customername: customername,
          customerphone: customerphone, 
          customeraddress: customeraddress, 
          date:date,
          timeExpired:timeExpired,
        },
        { withCredentials: true }
      );
      navigate('/dlpp/export');
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <Layout>
      <div>
      <h1 className="title">Bán hàng</h1>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={getSendCustomer}>
              <p className="has-text-centered"></p>
              <div className="field">
                <label className="label">Sản phẩm</label>
                <div className="control">
                <select 
                  value = {chooseProductline} 
                  onChange={(e) => setChooseProductline(e.target.value)}
                  className="input">
                  {productline.map((product) => (
                      <option>{product.productline}</option>
                  ))}
                </select>
                </div>
              </div>
              <div className="field">
                <label className="label">Số lượng</label>
                <div className="control">
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
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
                    value = {customername}
                    onChange={(e) => setName(e.target.value)}
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
                    value={customerphone}
                    onChange={(e) => setPhone(e.target.value)}
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
                    value={customeraddress}
                    onChange={(e) => setAddress(e.target.value)}
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
                    value = {date}
                    onChange={(e) => setDate(e.target.value)}
                    className="input"
                    placeholder="Ngày bán"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Số ngày bảo hành</label>
                <div className="control">
                  <input
                    type="number"
                    value = {timeExpired}
                    onChange={(e) => setTimeExpired(e.target.value)}
                    className="input"
                    placeholder="Số ngày bảo hành"
                  />
                </div>
              </div>
              <p className="has-text-centered">{msg}</p>
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