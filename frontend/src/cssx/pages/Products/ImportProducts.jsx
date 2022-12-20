import Layout from "../Layout";
import { Link } from "react-router-dom";


const ImportProductsCSSX = () => {

  return (
    <Layout>
          <div>
            <h1 className="title">Nhập hàng</h1>
            <Link to="/cssx/import/add" className="button is-primary mb-2">
              Nhập hàng mới
            </Link>
            <h3>Lịch sử nhập hàng</h3>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Sản phẩm</th>
                  <th>Số lượng</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                    <td>1</td>
                    <td>Asus</td>
                    <td>1000</td>
                  </tr>
              </tbody>
            </table>
    </div>
    </Layout>
  );
};

export default ImportProductsCSSX;