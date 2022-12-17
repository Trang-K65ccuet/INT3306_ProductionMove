import Layout from "../Layout";
import { Link } from "react-router-dom";


const ExportProductsCSSX = () => {

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
                  <th>Sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Đại lý</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                    <td>1</td>
                    <td>Asus</td>
                    <td>1000</td>
                    <td>Đại lý 1</td>
                  </tr>
              </tbody>
            </table>
          </div>
    </Layout>
  );
};

export default ExportProductsCSSX;