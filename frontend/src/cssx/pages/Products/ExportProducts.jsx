import Layout from "../Layout";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ExportProductsCSSX = () => {
  const [exportCSSX, setExport] = useState([]);

  useEffect(() => {
    getExport();
  }, []);

  const getExport = async () => {
    const response = await axios.get("http://localhost:5000/manufacture/lot", {withCredentials: true});
    setExport(response.data);
  };
  return (
    <Layout>
          <div>
            <h1 className="title">Xuất hàng</h1>
            <Link to="/cssx/export/exportnew" className="button is-primary mb-2">
              Yêu cầu xuất hàng
            </Link>
            <h3>Lịch sử xuất hàng</h3>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Lô</th>
                  <th>Số lượng</th>
                  <th>Đại lý</th>
                </tr>
              </thead>
              <tbody>
                {exportCSSX.map((exportcssx, index) => (
                  <tr key={exportcssx.lot}>
                  <td>{index + 1}</td>
                  <td>{exportcssx.lot}</td>
                  <td>{exportcssx.quantity}</td>
                  <td>{exportcssx.name}</td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
    </Layout>
  );
};

export default ExportProductsCSSX;