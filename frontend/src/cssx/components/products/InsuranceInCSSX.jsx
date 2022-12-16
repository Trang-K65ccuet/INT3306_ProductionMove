import Layout from "../../pages/Layout";


const InsuranceInCSSX = () => {

  return (
    <Layout>
          <div>
            <h1 className="title">Bảo hành</h1>
            <h2>Danh sách yêu cầu</h2>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mặt hàng</th>
                  <th>Số lượng</th>
                  <th>Đại lý phân phối</th>
                  <th>Hành động</th>
                  
                </tr>
              </thead>
              <tbody>
              <tr>
                    <td>1</td>
                    <td>Asus</td>
                    <td>2</td>
                    <td>Đại lý 1</td>
                    <td>
                        <button className="button is-small is-info">Chấp nhận</button>
                    </td>
                  </tr>
              </tbody>
            </table>
    </div>
    </Layout>
  );
};

export default InsuranceInCSSX;