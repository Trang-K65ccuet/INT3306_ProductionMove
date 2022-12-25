import Layout from "../Layout";
import { Link } from "react-router-dom";


const ExportProductsDLPP = () => {

  return (
    <Layout>
          <div>
            <h1 className="title">Bán hàng</h1>
            <Link to="/dlpp/export/new" className="button is-primary mb-2">
              Tạo mới
            </Link>
            <h3>Lịch sử bán hàng</h3>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Họ tên khách hàng</th>
                  <th>Số điện thoại</th>
                  <th>Địa chỉ</th>
                  <th>Ngày bán</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                    <td>1</td>
                    <td>DELL</td>
                    <td>1</td>
                    <td>Phan Đức Mạnh</td>
                    <td>026265811</td>
                    <td>Hanoi</td>
                    <td>2022-11-11</td>
                    <td>                
                      <Link
                        className="button is-small is-danger"
                      >
                        Bảo hành
                      </Link>
                </td>
                  </tr>
              </tbody>
            </table>
         </div>
    </Layout>
  );
};

export default ExportProductsDLPP;