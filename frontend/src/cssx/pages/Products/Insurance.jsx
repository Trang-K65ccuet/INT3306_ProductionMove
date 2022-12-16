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
            <Link to="/cssx/insurance/warranty" className="button is-primary mb-2">
              Đang bảo hành
            </Link>
            <Link to="/cssx/insurance/finished" className="button is-primary mb-2">
              Đã bảo hành
            </Link>
            <h3>Lịch sử bảo hành</h3>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mặt hàng</th>
                  <th>Số lượng</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                    <td>1</td>
                    <td>Asus</td>
                    <td>5</td>
                    <td>Đang bảo hành</td>
                  </tr>
              </tbody>
            </table>
    </div>
    </Layout>
  );
};

export default InsuranceCSSX;