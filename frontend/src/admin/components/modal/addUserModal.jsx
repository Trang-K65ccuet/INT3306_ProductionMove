// import React from "react";
// import { FaTimes } from "react-icons/fa";
// import AddUserForm from "../userChanges/AddUserForm";

// const Modal = ({ open, onClose, product }) => {
//   function returnStatus(status) {
//     switch (status) {
//       case 0:
//         return "Mới sản xuất";
//       case 1:
//         return "Đã nhập vào đại lý";
//       case 2:
//         return "Đã bán";
//       case 3:
//         return "Lỗi";
//       case 4:
//         return "Đang bảo hành";
//       case 5:
//         return "Đã bảo hành";
//       case 6:
//         return "Đã bảo hành và trả cho khách hàng";
//       case 7:
//         return "Cần trả về nhà máy";
//       case 8:
//         return "Đã chuyển về cơ sở sản xuất";
//       case 9:
//         return "Lỗi, cần triệu hồi";
//       case 10:
//         return "Hết thời gian bảo hành";
//       case 11:
//         return "Trả lại cơ sở sản xuất";
//     }
//   }
//   if (!open) return null;
//   return (
//     <div onClick={onClose} className="overlay">
//       <div
//         onClick={(e) => {
//           e.stopPropagation();
//         }}
//         className="modalContainer"
//       >
//         <div className="modalRight">
//           <button className="closeBtn" onClick={onClose}>
//             <FaTimes className="exit" />
//           </button>
//           <div className="content">
//             <AddUserForm/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
