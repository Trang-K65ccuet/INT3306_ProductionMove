import Layout from "../../pages/Layout";


const FinishedInDLPP = () => {

  return (
    <Layout>
          <div>
            <h1 className="title">Đã bảo hành xong</h1>
            <h2>Danh sách các sản phẩm đã được bảo hành và chuyển về cho đại lý</h2>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã bảo hành</th>
                  <th>Mã sản phẩm</th>
                  <th>Sản phẩm</th>
                  <th>Khách hàng</th>
                  <th>Số điện thoại</th>
                  <th>Hành động</th>
                  
                </tr>
              </thead>
              <tbody>
              <tr>
                    <td>1</td>
                    <td>BH1</td>
                    <td>DELL123</td>
                    <td>DELL1</td>
                    <td>Phan Đức Mạnh</td>
                    <td>0123456789</td>
                    <td>
                        <button className="button is-small is-info">Trả cho khách hàng</button>
                    </td>
                  </tr>
              </tbody>
            </table>
    </div>
    </Layout>
  );
};

export default FinishedInDLPP;