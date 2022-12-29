import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Modal from "../modal/Modal";
import "../modal/Modal.css";
import { FaRegTimesCircle, FaUserCircle } from "react-icons/fa";

const ProductListCSSX = () => {
  const [productCSSX, setProductCSSX] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [product, setProduct] = useState({}); 

  useEffect(() => {
    getProductCSSX();
  }, []);

  const getProductCSSX = async () => {
    const response = await axios.get(
      "http://localhost:5000/manufactures/items/",
      { withCredentials: true }
    );
    setProductCSSX(response.data);
  };

  let itemsPerPage = 5;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = productCSSX.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(productCSSX.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % productCSSX.length;
    setItemOffset(newOffset);
  };

    //set status
  function returnStatus(status) {
    switch (status) {
      case 0:
        return "Mới sản xuất";
      case 1:
        return "Đã nhập vào đại lý";
      case 2:
        return "Đã bán";
      case 3:
        return "Lỗi";
      case 4:
        return "Đang bảo hành";
      case 5:
        return "Đã bảo hành";
      case 6:
        return "Đã bảo hành và trả cho khách hàng";
      case 7:
        return "Cần trả về nhà máy";
      case 8:
        return "Đã chuyển về cơ sở sản xuất";
      case 9:
        return "Lỗi, cần triệu hồi";
      case 10:
        return "Hết thời gian bảo hành";
      case 11:
        return "Trả lại cơ sở sản xuất";
    }
  }
  return (
    <>
      <div>
        <h1 className="title">Sản phẩm</h1>
        <h2 className="subtitle">Danh sách các sản phẩm được quản lý</h2>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã sản phẩm</th>
              <th>Sản phẩm</th>
              <th>Dòng sản phẩm</th>
              <th>Giá</th>
              <th>Trạng thái</th>
              <th>Tùy chọn</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((product, index) => (
              <tr key={product.productcode}>
                <td>{index + 1}</td>
                <td>{product.productcode}</td>
                <td>{product.productline}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{returnStatus(product.status)}</td>
                <td>
                  <button
                    className="button is-small is-info"
                    onClick={() => {
                      setModalOpen(!modalOpen);
                      setProduct(product);
                    }}
                  >
                    Xem chi tiết
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal open={modalOpen} onClose={() => setModalOpen(!modalOpen)} product={product} />
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
    </>
  );
};

export default ProductListCSSX;
