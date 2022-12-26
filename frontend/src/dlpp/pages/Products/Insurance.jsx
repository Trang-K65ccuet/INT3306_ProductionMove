import Layout from "../Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../button/Button";
import "./products.css"
import { Link } from "react-router-dom";


const InsuranceDLPP = () => {
    const [item, setItem] = useState([]);
    useEffect(() => {
      getItem();
    }, []);
    const getItem = async () => {
      const response = await axios.get("http://localhost:5000/productitem/faultiteminstock",{withCredentials: true});
      setItem(response.data);  
    };

    function returnStatus(status) {
      switch(status) {
        case 0: return "Mới sản xuất";
        case 1: return "Đã nhập vào đại lý";
        case 2: return "Đã bán";
        case 3: return "Lỗi, cần bảo hành";
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
            <h1 className="title">Bảo hành</h1>
            <div className="button-widget">
              <Link to="/dlpp/insurance/new"><Button type="new" /></Link>
              <Link to = "/dlpp/insurance/send"><Button type="send" /></Link>
              <Link to="/dlpp/insurance/finished"><Button type="finished" /></Link>
          </div>
          <br />
            <h3>Danh sách sản phẩm lỗi</h3>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã sản phẩm</th>
                  <th>Dòng sản phẩm</th>
                  <th>Lô</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {item.map((item, index) => (
                  <tr key={item.productcode}>
                  <td>{index + 1}</td>
                  <td>{item.productcode}</td>
                  <td>{item.productline}</td>
                  <td>{item.lot}</td>
                  <td>{returnStatus(item.status)}</td>
                </tr>
                ))}
              </tbody>
            </table>
    </div>
    </Layout>
  );
};

export default InsuranceDLPP;