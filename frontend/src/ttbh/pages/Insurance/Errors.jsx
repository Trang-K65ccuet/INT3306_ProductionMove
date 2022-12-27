import Layout from "../Layout";
import { useState, useEffect } from "react";
import axios from "axios";

const ErrorsTTBH = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    const response = await axios.get("http://localhost:5000/warranty/itemneedsendback", {withCredentials: true});
    setItem(response.data);
  };

  const setItemError = async (productCode) => {
    await axios.post(
      `http://localhost:5000/warranty/sendbackmanufacture`,
      {
        productcode:productCode,
      },
      { withCredentials: true }
    );
  getItem(); 
}


  return (
    <Layout>
        <div>
          <h1 className="title">Không thể bảo hành</h1>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã sản phẩm</th>
                  <th>Sản phẩm</th>
                  <th>Cơ sở sản xuất</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                  {item.map((item, index) => (
                    <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.productcode}</td>
                    <td>{item.productline}</td>
                    <td>{item.name}</td>
                    <td>
                      <button onClick={() => setItemError(item.productcode)} className="button is-small is-danger">
                        Gửi về cơ sở sản xuất
                      </button>
                    </td>
                  </tr>
                  ))}
                </tbody>
            </table>
        </div>
    </Layout>
  );
};

export default ErrorsTTBH;