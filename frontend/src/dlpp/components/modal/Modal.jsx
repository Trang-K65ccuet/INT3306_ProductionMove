import React from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({ open, onClose, product }) => {
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
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="modalRight">
          <button className="closeBtn" onClick={onClose}>
            <FaTimes className="exit" />
          </button>
          <div className="content">
            <div className="titleWrapper">
              <h1>Thông tin sản phẩm</h1>
            </div>
            <div className="imgWrapper">
              <img
                src={product.image}
                alt="Ảnh sản phẩm"
                className="imgField"
              />
            </div>
            <div className="infoFieldWrapper">
              <label id="infoField">Tên sản phẩm: {product.name}</label>
              <label id="infoField">Dòng sản phẩm: {product.productline}</label>
              <label id="infoField">Mã sản phẩm: {product.productcode}</label>
              <label id="infoField">Giá: {product.price}</label>
              <label id="infoField">
                Trạng thái: {returnStatus(product.status)}
              </label>
              <label id="infoField">
                Đại lý phân phối: {product.distributorname}
              </label>
              <label id="infoField">
                Số lô: {product.lot}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
