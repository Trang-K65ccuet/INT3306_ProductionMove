import Layout from "../../pages/Layout";


const ImportInTTBH = () => {

  return (
    <Layout>
          <div>
            <h1 className="title">Bảo hành</h1>
            <h2>Danh sách yêu cầu</h2>
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
                    <td>DELL123</td>
                    <td>DELL1</td>
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

export default ImportInTTBH;