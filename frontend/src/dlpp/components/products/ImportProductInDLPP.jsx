import Layout from "../../pages/Layout";


const ImportProductInDLPP = () => {

  return (
    <Layout>
          <div>
            <h1 className="title">Nhập hàng</h1>
            <h2>Danh sách hàng được xuất cho đại lý</h2>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Cơ sở sản xuất</th>
                  <th>Cập nhật</th>
                  
                </tr>
              </thead>
              <tbody>
              <tr>
                    <td>1</td>
                    <td>DELL1</td>
                    <td>2</td>
                    <td>Cơ sở của Trang</td>
                    <td>
                        <button className="button is-small is-info">Chấp nhận</button>
                        <button className="button is-small is-danger">Từ chối</button>
                    </td>
                  </tr>
              </tbody>
            </table>
    </div>
    </Layout>
  );
};

export default ImportProductInDLPP;