import Layout from "../../pages/Layout";


const WarrantyInCSSX = () => {

  return (
    <Layout>
          <div>
            <h1 className="title">Bảo hành</h1>
            <h2>Danh sách đang bảo hành</h2>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mặt hàng</th>
                  <th>Số lượng</th>
                  <th>Đại lý phân phối</th>
                  <th>Cập nhật</th>
                  
                </tr>
              </thead>
              <tbody>
              <tr>
                    <td>1</td>
                    <td>Asus</td>
                    <td>2</td>
                    <td>Đại lý 1</td>
                    <td>
                        <button className="button is-small is-info">Đã xong</button>
                        <button className="button is-small is-danger">Hỏng</button>
                    </td>
                  </tr>
              </tbody>
            </table>
    </div>
    </Layout>
  );
};

export default WarrantyInCSSX;