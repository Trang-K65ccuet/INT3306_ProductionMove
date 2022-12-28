import Layout from "../Layout";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../button/Button";
import "./products.css"
import ReactPaginate from "react-paginate";

const ExportProductsDLPP = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    getItem();
  }, []);
  const getItem = async () => {
    const response = await axios.get("http://localhost:5000/consignment/sell",{withCredentials: true});
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

  let itemsPerPage = 5; 
  const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = item.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(item.length / itemsPerPage);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % item.length;
      setItemOffset(newOffset);
    };
  return (
    <Layout>
          <div>
            <h1 className="title">Bán hàng</h1>
            <div className="button-widget">
              <Link to="/dlpp/export/new"><Button type="sell" /></Link>
              <Link to="/dlpp/export/expired"><Button type="expired" /></Link>
            </div>
            <br></br>
            <h3>Lịch sử bán hàng</h3>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã sản phẩm</th>
                  <th>Sản phẩm</th>
                  <th>Dòng sản phẩm</th>
                  <th>Giá</th>
                  <th>Ngày bán</th>
                  <th>Số ngày bảo hành</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
                  <tr key={item.productcode}>
                  <td>{index + 1}</td>
                  <td>{item.productcode}</td>
                  <td>{item.productline}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.dateOfTransaction}</td>
                  <td>{item.expiredDay}</td>
                  <td>{returnStatus(item.status)}</td>
                </tr>
                ))}
              </tbody>
            </table>
            <ReactPaginate
                breakLabel="..."
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={"< Prev"}
                nextLabel={"Next >"}
                renderOnZeroPageCount={null}
                containerClassName={"pagination-list"}
                pageLinkClassName={"pagination-link"}
                previousLinkClassName={"pagination-previous"}
                nextLinkClassName={"pagination-next"}
                activeLinkClassName={"pagination-link is-current"}
                disabledLinkClassName={"pagination-link is-disabled"}
              />
         </div>
    </Layout>
  );
};

export default ExportProductsDLPP;