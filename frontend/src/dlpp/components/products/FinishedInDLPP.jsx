import Layout from "../../pages/Layout";


const FinishedInDLPP = () => {

  return (
    <Layout>
          <div>
            <h1 className="title">Nhập hàng</h1>
            <h2>Danh sách hàng được xuất cho đại lý</h2>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mặt hàng</th>
                  <th>Số lượng</th>
                  <th>Khách hàng</th>
                  <th>Số điện thoại</th>
                  <th>Nơi bảo hành</th>
                  <th>Hành động</th>
                  
                </tr>
              </thead>
              <tbody>
              <tr>
                    <td>1</td>
                    <td>Asus</td>
                    <td>2</td>
                    <td>Phan Đức Mạnh</td>
                    <td>0123456789</td>
                    <td>Cơ sở của Trang</td>
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