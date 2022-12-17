import Layout from "../Layout";
import { Link } from "react-router-dom";


const InsuranceCSSX = () => {

  return (
    <Layout>
          <div>
            <h1 className="title">Bảo hành</h1>
            <Link to="/cssx/insurance/required" className="button is-primary mb-2">
              Yêu cầu
            </Link>
            <h3>Lịch sử</h3>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã sản phẩm</th>
                  <th>Mặt hàng</th>
                  <th>Đại lý phân phối</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                    <td>1</td>
                    <td>DELL1</td>
                    <td>DELL</td>
                    <td>Đại lý 1</td>
                  </tr>
              </tbody>
            </table>
    </div>
    </Layout>
  );
};

export default InsuranceCSSX;