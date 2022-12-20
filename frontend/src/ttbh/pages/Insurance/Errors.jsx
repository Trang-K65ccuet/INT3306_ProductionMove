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
                  <th>Mã bảo hành</th>
                  <th>Mã sản phẩm</th>
                  <th>Sản phẩm</th>
                  <th>Đại lý phân phối</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                    <td>1</td>
                    <td>BH1</td>
                    <td>HP14314</td>
                    <td>HP1</td>
                    <td>Đại lý 1</td>
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