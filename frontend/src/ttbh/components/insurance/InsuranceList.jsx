import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

const InsuranceList = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    const response = await axios.get("http://localhost:5000/warranty/allitem", {withCredentials: true});
    setItem(response.data);
  };

  const sendItemToDLPP = async (productCode) => {
      await axios.post(
        `http://localhost:5000/warranty/sendfixeditem`,
        {
          productcode:productCode,
        },
        { withCredentials: true }
      );
    getItem(); 
  }

  const setItemError = async (productCode) => {
      await axios.post(
        `http://localhost:5000/warranty/cannotfix`,
        {
          productcode:productCode,
        },
        { withCredentials: true }
      );
    getItem(); 
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
                  <th>Mã sản phẩm</th>
                  <th>Dòng sản phẩm</th>
                  <th>Trạng thái</th>
                  <th>Hành động</th>
                </tr>
              </thead>
                <tbody>
                  {currentItems.map((item, index) => (
                    <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.productcode}</td>
                    <td>{item.productline}</td>
                    <td>{returnStatus(item.status)}</td>
                    <td>
                        <button onClick={() => sendItemToDLPP(item.productcode)} className="button is-small is-info">
                            Gửi về đại lý
                        </button>
                          <button onClick={() => setItemError(item.productcode)} className="button is-small is-danger">
                            Xác nhận lỗi
                          </button>
                    </td>
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
  );
};

export default InsuranceList;