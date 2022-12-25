import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const InsuranceList = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    const response = await axios.get("http://localhost:5000/warranty/allitem", {withCredentials: true});
    setItem(response.data);
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
        <div>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã bảo hành</th>
                  <th>Mã sản phẩm</th>
                  <th>Ngày bảo hành</th>
                </tr>
              </thead>
                <tbody>
                  {item.map((item, index) => (
                    <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.productcode}</td>
                    <td>{item.dateOfGuarantee}</td>
                  </tr>
                  ))}
                </tbody>
            </table>
        </div>
  );
};

export default InsuranceList;