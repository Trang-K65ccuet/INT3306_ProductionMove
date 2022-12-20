import Layout from "../Layout";
import { Link } from "react-router-dom";


const ImportProductsDLPP = () => {

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
                  <th>Sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Cơ sở sản xuất</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                    <td>1</td>
                    <td>DELL1</td>
                    <td>1000</td>
                    <td>Cơ sở của Trang</td>
                  </tr>
              </tbody>
            </table>
         </div>
    </Layout>
  );
};

export default ImportProductsDLPP;