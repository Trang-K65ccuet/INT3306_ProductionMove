import Layout from "../Layout";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ImportProductsCSSX = () => {
  const [productCSSX, setProductCSSX] = useState([]);

  useEffect(() => {
    getProductCSSX();
  }, []);

  const getProductCSSX = async () => {
    const response = await axios.get("http://localhost:5000/manufactures/items/", {withCredentials: true});
    setProductCSSX(response.data);
  };
  return (
    <Layout>
          <div>
            <h1 className="title">Nhập hàng</h1>
            <Link to="/cssx/import/add" className="button is-primary mb-2">
              Nhập hàng mới
            </Link>
            <h3>Các sản phẩm đã nhập</h3>
            <table className="table is-striped is-fullwidth">
            <thead>
          <tr>
            <th>STT</th>
            <th>Mã sản phẩm</th>
            <th>Sản phẩm</th>
            <th>Dòng sản phẩm</th>
            <th>Giá</th>
          </tr>
        </thead>
        <tbody>
          {productCSSX.map((product, index) => (
            <tr key={product.productcode}>
            <td>{index + 1}</td>
            <td>{product.productcode}</td>
            <td>{product.productline}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
    </Layout>
  );
};

export default ImportProductsCSSX;