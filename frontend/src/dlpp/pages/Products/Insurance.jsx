import Layout from "../Layout";
import { Link } from "react-router-dom";


const InsuranceDLPP = () => {

  return (
    <Layout>
          <div>
            <h1 className="title">Bảo hành</h1>
            <Link to="/dlpp/insurance/new" className="button is-primary mb-2">
              Tạo mới
            </Link>
            <Link to="/dlpp/insurance/finished" className="button is-primary mb-2">
              Đã bảo hành
            </Link>
            <h3>Lịch sử bảo hành</h3>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã bảo hành</th>
                  <th>Mã sản phẩm</th>
                  <th>Sản phẩm</th>
                  <th>Họ tên khách hàng</th>
                  <th>Số điện thoại</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                    <td>1</td>
                    <td>BH1</td>
                    <td>DELL123</td>
                    <td>Asus</td>
                    <td>Mạnh</td>
                    <td>0123456789</td>
                    <td>Đang bảo hành</td>
                  </tr>
              </tbody>
            </table>
    </div>
    </Layout>
  );
};

export default InsuranceDLPP;