import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

const ProductListDLPP = () => {
  const [productDLPP, setProductDLPP] = useState([]);

  useEffect(() => {
    getProductDLPP();
  }, []);

  const getProductDLPP = async () => {
    const response = await axios.get("http://localhost:5000/lot/get/item/", {withCredentials: true});
    setProductDLPP(response.data);
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
  let itemsPerPage = 5; 
  const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = productDLPP.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(productDLPP.length / itemsPerPage);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % productDLPP.length;
      setItemOffset(newOffset);
    };
  return (
    <div>
      <h1 className="title">Sản phẩm</h1>
      <h2 className="subtitle">Quản lý trạng thái các sản phẩm của đại lý</h2>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã sản phẩm</th>
            <th>Sản phẩm</th>
            <th>Dòng dản phẩm</th>
            <th>Lô</th>
            <th>Giá</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((product, index) => (
            <tr key={product.productcode}>
            <td>{index + 1}</td>
            <td>{product.productcode}</td>
            <td>{product.productline}</td>
            <td>{product.name}</td>
            <td>{product.lot}</td>
            <td>{product.price}</td>
            <td>{returnStatus(product.status)}</td>
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

export default ProductListDLPP;