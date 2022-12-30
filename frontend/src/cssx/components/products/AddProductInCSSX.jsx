import React from "react";
import Layout from "../../pages/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

import "../components.css";
import CloudinaryUploadWidget from "../dragImage/cloudDiaryWidget";
import { useRef } from "react";
const AddProductInCSSX = () => {
  const [productline, setProductline] = useState([]);
  const [productItemInput, setProductItemInput] = useState({
    productline: "",
    quantity: "",
    image: "",
    price: "",
    dateOfManufacture: "",
  });
  const [arrays, setArray] = useState([]);

  const [producLineName, setProductLineName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [dateOfManufacture, setDateOfManufacture] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const imageRef = useRef();

  const addData = () => {
    setArray([
      ...arrays,
      {
        productline: producLineName,
        quantity: quantity,
        image: imageRef.current.src,
        price: price,
        dateOfManufacture: dateOfManufacture,
      },
    ]);
    setProductLineName(productline[0].productline);
    setQuantity("");
    // setImage("");
    document.getElementById("uploadedimage").setAttribute("src", "");
    setPrice("");
    setDateOfManufacture("");
  };

  const deleteData = (index) => {
    let newArray = [...arrays];
    newArray.splice(index, 1);
    setArray(newArray);
  };

  const importData = async (e) => {
    e.preventDefault();
    console.log(arrays);
    try {
      await axios.post("http://localhost:5000/productitem/add", arrays, {
        withCredentials: true,
      });
      navigate("/cssx/products");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  useEffect(() => {
    getProductline();
  }, []);

  const getProductline = async () => {
    const response = await axios.get("http://localhost:5000/productline", {
      withCredentials: true,
    });
    setProductline(response.data);
    setProductLineName(response.data[0].productline);
  };

  return (
    <Layout>
      <div>
        <h1 className="title">Nhập hàng mới</h1>

        <div className="card is-shadowless">
          <div className="card-content">
            <div className="field">
              <label className="label">Dòng sản phẩm</label>
              <div className="control select is-fullwidth">
                <select
                  value={producLineName}
                  onChange={(e) => setProductLineName(e.target.value)}
                >
                  {productline.map((product, index) => (
                    <option key={index}>{product.productline}</option>
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
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required="required"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Ảnh minh họa</label>
              <CloudinaryUploadWidget />
              <img id="uploadedimage" src="" ref={imageRef}></img>
            </div>

            <div className="field">
              <label className="label">Giá</label>
              <div className="control">
                <input
                  type="number"
                  className="input"
                  placeholder="Giá"
                  value={price}
                  required="required"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Ngày sản xuất</label>
              <div className="control">
                <input
                  type="date"
                  className="input"
                  placeholder="YYYY-MM-DD"
                  value={dateOfManufacture}
                  required="required"
                  onChange={(e) => setDateOfManufacture(e.target.value)}
                />
              </div>
            </div>

            <div className="field addDataProductItemButton">
              <div className="control">
                <button className="button is-success" onClick={addData}>
                  Thêm dữ liệu
                </button>
              </div>
            </div>

            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Dòng sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Giá</th>
                  <th>Tùy chọn</th>
                </tr>
              </thead>
              <tbody>
                {arrays.map((array, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{array.productline}</td>
                    <td>{array.quantity}</td>
                    <td>{array.price}</td>
                    <td>
                      <button
                        onClick={() => deleteData(index)}
                        className="button is-small is-danger"
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="has-text-centered">{msg}</p>
            <div className="field">
              <div className="control">
                <button className="button is-success" onClick={importData}>
                  Nhập vào kho
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="card is-shadowless">
          <div className="card-content">
            <div className="content">
              <form>
                <p className="has-text-centered"></p>
                <div className="field">
                  <label className="label">Sản phẩm</label>
                  <div className="control">
                    <select className="input">
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
                      className="input"
                      placeholder="Số lượng"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button type="submit" className="button is-success">
                      Nhập
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default AddProductInCSSX;
