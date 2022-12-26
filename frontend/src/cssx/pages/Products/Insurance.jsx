import Layout from "../Layout";
import { useState, useEffect } from "react";
import axios from "axios";

const InsuranceCSSX = () => {
  const [error, setError] = useState([]);

  useEffect(() => {
    getError();
  }, []);

  const getError = async () => {
    const response = await axios.get("http://localhost:5000/manufacture/allcantfix", {withCredentials: true});
    setError(response.data);
  };
  return (
    <Layout>
          <div>
            <h1 className="title">Bảo hành</h1>
            <h3>Các sản phẩm không thể bảo hành bị trả về</h3>
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
                {error.map((error, index) => (
                  <tr key={error.productcode}>
                  <td>{index + 1}</td>
                  <td>{error.productcode}</td>
                  <td>{error.productline}</td>
                  <td>{error.name}</td>
                  <td>{error.price}</td>
                </tr>
                ))}
              </tbody>
            </table>
    </div>
    </Layout>
  );
};

export default InsuranceCSSX;