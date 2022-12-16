import Layout from "../Layout";

const ErrorsTTBH = () => {

  return (
    <Layout>
        <div>
          <h1 className="title">Không thể bảo hành</h1>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mặt hàng</th>
                  <th>Số lượng bảo hành</th>
                  <th>Đại lý phân phối</th>
                  <th>Cơ sở sản xuất</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                    <td>1</td>
                    <td>Asus</td>
                    <td>1000</td>
                    <td>Đại lý 1</td>
                    <td>Cơ sở của Trang</td>
                    <td>
                      <button className="button is-small is-danger">Chuyển về cơ sở sản xuất</button>
                    </td>
                  </tr>
              </tbody>
            </table>
        </div>
    </Layout>
  );
};

export default ErrorsTTBH;