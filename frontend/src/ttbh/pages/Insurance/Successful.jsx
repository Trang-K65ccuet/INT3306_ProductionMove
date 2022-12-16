import Layout from "../Layout";

const SuccessfulTTBH = () => {

  return (
    <Layout>
        <div>
          <h1 className="title">Đã bảo hành</h1>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mặt hàng</th>
                  <th>Số lượng bảo hành</th>
                  <th>Đại lý phân phối</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                    <td>1</td>
                    <td>Asus</td>
                    <td>1000</td>
                    <td>Đại lý 1</td>
                    <td>
                      <button className="button is-small is-info">Chuyển về đại lý</button>
                    </td>
                  </tr>
              </tbody>
            </table>
        </div>
    </Layout>
  );
};

export default SuccessfulTTBH;