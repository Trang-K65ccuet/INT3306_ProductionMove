import Layout from "../../pages/Layout";


const StatusInTTBH = () => {

  return (
    <Layout>
          <div>
            <h1 className="title">Bảo hành</h1>
            <h2>Trạng thái</h2>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã bảo hành</th>
                  <th>Mã sản phẩm</th>
                  <th>Sản phẩm</th>
                  <th>Đại lý phân phối</th>
                  <th>Cập nhật</th>
                  
                </tr>
              </thead>
              <tbody>
              <tr>
                    <td>1</td>
                    <td>BH3</td>
                    <td>DELL123</td>
                    <td>DELL1</td>
                    <td>Đại lý 1</td>
                    <td>
                        <button className="button is-small is-info">Xong</button>
                        <button className="button is-small is-danger">Hỏng</button>
                    </td>
                  </tr>
              </tbody>
            </table>
    </div>
    </Layout>
  );
};

export default StatusInTTBH;