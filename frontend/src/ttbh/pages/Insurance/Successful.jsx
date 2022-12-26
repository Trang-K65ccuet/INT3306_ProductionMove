import Layout from "../Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./insurance.css"

const SuccessfulTTBH = () => {
  const [productcode, setProduct] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const getSendError = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/warranty/sendfixeditem",
        {
          productcode:productcode,
        },
        { withCredentials: true }
      );
      navigate('/ttbh/successful');
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <Layout>
        <div>
          <h1 className="title">Đã bảo hành</h1>
          <form onSubmit={getSendError} className = "form">
              <p className="has-text-centered"></p>
              <label className="field" id="text">Gửi sản phẩm bảo hành xong về đại lý:</label>
              <div className="field">
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
                <div className="send">
                  <button type="submit" className="button is-success">
                    Gửi
                  </button>
                </div>
              </div>
            </form>
            <p className="history">Các sản phẩm đã bảo hành thành công</p>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã sản phẩm</th>
                  <th>Sản phẩm</th>
                  <th>Đại lý phân phối</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                    <td>1</td>
                    <td>HP14314</td>
                    <td>HP1</td>
                    <td>Đại lý 1</td>
                    <td>Đã xong</td>
                  </tr>
              </tbody>
            </table>
        </div>
    </Layout>
  );
};

export default SuccessfulTTBH;