import React from "react";
import { useState, useEffect } from "react";
import Layout from "../../pages/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ExportProductInCSSX = () => {
  const [allRequests, setAllRequests] = useState("");
  const [productline, setProductline] = useState("");
  const [quantity, setQuantity] = useState("");
  const [distributorName, setDistributorName] = useState("");
  const [distributorId, setDistributorId] = useState("");
  const [exportDay, setExportDay] = useState("");
  const [msg, setMsg] = useState("");
  const [productCSSX, setProductCSSX] = useState([]);

  const [distributorlist, setDistributorList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getDistributorLists();
    getProductCSSX();
  }, []);

  const getDistributorLists = async () => {
    const response = await axios.get("http://localhost:5000/distributor", {
      withCredentials: true,
    });
    setDistributorList(response.data);
    setDistributorName(
      response.data[0].name + " - Mã đại lý: " + response.data[0].id
    );
    setDistributorId(response.data[0].id);
  };

  const getProductCSSX = async () => {
    const responses = await axios.get(
      "http://localhost:5000/manufactures/items/",
      { withCredentials: true }
    );
    setProductCSSX([
      ...new Set(responses.data.map((response) => response.productline)),
    ]);
    setProductline(productCSSX[0]);
  };

  const exportData = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/productitem/send",
        {
          quantity: quantity,
          productline: productline,
          distributorid: distributorId,
          exportday: exportDay,
        },
        {
          withCredentials: true,
        }
      );
      navigate("/cssx/export");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <Layout>
      <div>
        <h1 className="title">Xuất hàng</h1>
        <div className="card is-shadowless">
          <div className="card-content">
            <div className="content">
              <form onSubmit={exportData}>
                <p className="has-text-centered"></p>
                <div className="field">
                  <label className="label">Tên dòng sản phẩm</label>
                  <div className="control select is-fullwidth">
                    <select
                      value={productline}
                      onChange={(e) => setProductline(e.target.value)}
                    >
                      {productCSSX.map((product, index) => (
                        <option key={index}>{product}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Số lượng</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="Số lượng"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      required="required"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Đại lý phân phối</label>
                  <div className="control select is-fullwidth">
                    <select
                      value={distributorName}
                      onChange={(e) => {
                        let arr = e.target.value.split(" ");
                        setDistributorName(e.target.value);
                        setDistributorId(arr[arr.length - 1]);
                      }}
                    >
                      {distributorlist.map((distributor, index) => (
                        <option key={index}>
                          {distributor.name + " - Mã đại lý: " + distributor.id}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Ngày xuất hàng</label>
                  <div className="control">
                    <input
                      type="date"
                      className="input"
                      placeholder="Ngày xuất hàng"
                      value={exportDay}
                      onChange={(e) => setExportDay(e.target.value)}
                      required="required"
                    />
                  </div>
                </div>
                <p className="has-text-centered">{msg}</p>
                <div className="field">
                  <div className="control">
                    <button type="submit" className="button is-success">
                      Xuất
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
            <h1 className="title">Yêu cầu</h1>
            <h2>Danh sách các yêu cầu nhập hàng từ đại lý</h2>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mặt hàng</th>
                  <th>Số lượng</th>
                  <th>Đại lý phân phối </th>
                  <th>Hành động</th>
                  
                </tr>
              </thead>
              <tbody>
              <tr>
                    <td>1</td>
                    <td>Asus</td>
                    <td>2</td>
                    <td>Đại lý 1</td>
                    <td>
                        <button className="button is-small is-info">Chấp nhận</button>
                        <button className="button is-small is-danger">Từ chối</button>
                    </td>
                  </tr>
              </tbody>
            </table>
        </div> */}
    </Layout>
  );
};

export default ExportProductInCSSX;
