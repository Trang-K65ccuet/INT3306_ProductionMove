import React from "react";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import SendIcon from '@mui/icons-material/Send';
import OfflinePinIcon from '@mui/icons-material/OfflinePin';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const Button = ({ type }) => {
    let data;
  switch (type) {
      case "new":
        data = {
          title: "TẠO MỚI",
          link: "Thêm một sản phẩm vào danh sách lỗi",
          icon: (
            <LibraryAddIcon
              className="icon"
              style={{color: "crimson", backgroundColor: "#ff000033"}}
            />
          ),
        };
        break;
        case "send":
          data = {
            title: "CHUYỂN TỚI TRUNG TÂM BẢO HÀNH",
            link: "Chuyển sản phẩm lỗi tới trung tâm bảo hành",
            icon: (
              <SendIcon
                className="icon"
                style={{ color: "blue", backgroundColor: "#ddeeff" }}
              />
            ),
          };
        break;
        case "finished":
          data = {
            title: "ĐÃ BẢO HÀNH",
            link: "Các sản phẩm đã bảo hành thành công",
            icon: (
              <OfflinePinIcon
                className="icon"
                style={{ color: "green", backgroundColor: "#00800033" }}
              />
            ),
          };
        break;
        case "sell":
            data = {
              title: "TẠO MỚI",
              link: "Tạo đơn bán hàng mới",
              icon: (
                <LibraryAddIcon
                     className="icon"
                    style={{color: "crimson", backgroundColor: "#ff000033"}}
                />
              ),
            };
          break;
          case "request":
            data = {
              title: "GỬI YÊU CẦU",
              link: "Gửi yêu cầu nhận hàng",
              icon: (
                <SendIcon
                    className="icon"
                    style={{ color: "blue", backgroundColor: "#ddeeff" }}
                />
                 ),
            };
          break;
          case "import":
            data = {
              title: "NHẬP HÀNG",
              link: "Chấp nhận các lô được xuất",
              icon: (
                <LibraryAddIcon
                     className="icon"
                    style={{color: "crimson", backgroundColor: "#ff000033"}}
                />
                 ),
            };
          break;
          case "expired":
            data = {
              title: "HẾT HẠN",
              link: "Các sản phẩm hết hạn",
              icon: (
                <AccessTimeFilledIcon
                     className="icon"
                     style={{ color: "blue", backgroundColor: "#ddeeff" }}
                />
                 ),
            };
          break;
          case "fixall":
            data = {
              title: "TRIỆU HỒI",
              link: "Triệu hồi dòng sản phẩm bị lỗi nhiều",
              icon: (
                <AccessTimeFilledIcon
                     className="icon"
                     style={{ color: "blue", backgroundColor: "#ddeeff" }}
                />
                 ),
            };
          break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="text">{data.title}</span>
        <span className="icons">{data.icon}</span>
        <span className="link">{data.link}</span>
      </div>
    </div>
  );
};

export default Button;
