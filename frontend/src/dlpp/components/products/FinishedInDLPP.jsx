import Layout from "../../pages/Layout";
import { useState, useEffect } from "react";
import axios from "axios";


const FinishedInDLPP = () => {
  const [finished, setFinished] = useState([]);
  useEffect(() => {
    getFinished();
  }, []);
  const getFinished = async () => {
    const response = await axios.get("http://localhost:5000/productitem/allfixeditem", {withCredentials: true});
    setFinished(response.data);
  };

  function returnStatus(status) {
    switch(status) {
      case 0: return "Mới sản xuất";
      case 1: return "Đã nhập vào đại lý";
      case 2: return "Đã bán";
      case 3: return "Lỗi";
      case 4: return "Đang bảo hành";
      case 5: return "Đã bảo hành";
      case 6: return "Đã bảo hành và trả cho khách hàng";
      case 7: return "Cần trả về nhà máy";
      case 8: return "Đã chuyển về cơ sở sản xuất";
      case 9: return "Lỗi, cần triệu hồi";
      case 10: return "Hết thời gian bảo hành"
      case 11: return "Trả lại cơ sở sản xuất"
    }
  }

  return (
    <Layout>
          <div>
            <h1 className="title">Đã bảo hành xong</h1>
            <h2>Danh sách các sản phẩm đã được bảo hành và chuyển về cho đại lý</h2>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã sản phẩm</th>
                  <th>Sản phẩm</th>
                  <th>Lô</th>
                  <th>Trạng thái</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {finished.map((product, index) => (
                  <tr key={product.productcode}>
                  <td>{index + 1}</td>
                  <td>{product.productcode}</td>
                  <td>{product.productline}</td>
                  <td>{product.lot}</td>
                  <td>{returnStatus(product.status)}</td>
                  <td>
                  <button className="button is-small is-info">
                      Trả cho khách hàng
                  </button>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
    </div>
    </Layout>
  );
};

export default FinishedInDLPP;