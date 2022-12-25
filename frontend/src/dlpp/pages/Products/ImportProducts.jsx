import Layout from "../Layout";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const ImportProductsDLPP = () => {
  const [lot, setLot] = useState([]);
  useEffect(() => {
    getLot();
  }, []);
  const getLot = async () => {
    const response = await axios.get("http://localhost:5000/lots",{withCredentials: true});
    setLot(response.data);  
  };

  return (
    <Layout>
          <div>
            <h1 className="title">Nhập hàng</h1>
            <Link to="/dlpp/import/add" className="button is-primary mb-2">
              Gửi yêu cầu
            </Link>
            <Link to="/dlpp/import/import" className="button is-primary mb-2">
              Nhập hàng
            </Link>
            <h3>Lịch sử nhập hàng</h3>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Lô</th>
                  <th>Số lượng</th>
                  <th>Cơ sở sản xuất</th>
                </tr>
              </thead>
              <tbody>
                {lot.map((lot, index) => (
                  <tr key={lot.lot}>
                  <td>{index + 1}</td>
                  <td>{lot.lot}</td>
                  <td>{lot.quantity}</td>
                  <td>{lot.name}</td>
                </tr>
                ))}
              </tbody>
            </table>
         </div>
    </Layout>
  );
};

export default ImportProductsDLPP;