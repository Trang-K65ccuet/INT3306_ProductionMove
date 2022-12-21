import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SellIcon from '@mui/icons-material/Sell';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import "./widget.scss";

const Widget = ({ type }) => {
  let data;
  // temp
  const amount = 500;
  const diff = 30;

  switch (type) {
    case "users":
      data = {
        title: "NGƯỜI DÙNG",
        isMoney: false,
        link: "Tài khoản được kích hoạt",
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon"
            style={{ color: "crimson", backgroundColor: "#ff000033" }}
          />
        ),
      };
      break;
      case "products":
        data = {
          title: "SẢN PHẨM",
          isMoney: false,
          link: "Số mặt hàng quản lý",
          icon: (
            <ProductionQuantityLimitsIcon
              className="icon"
              style={{ color: "purple", backgroundColor: "#80008033" }}
            />
          ),
        };
        break;
        case "sold":
          data = {
            title: "ĐÃ BÁN",
            isMoney: false,
            link: "Tổng sản phẩm đã bán",
            icon: (
              <SellIcon
                className="icon"
                style={{ color: "green", backgroundColor: "#00800033" }}
              />
            ),
          };
        break;
        case "error":
          data = {
            title: "LỖI",
            isMoney: false,
            link: "Số sản phẩm bảo hành",
            icon: (
              <WarningAmberIcon
                className="icon"
                style={{ color: "goldenrod", backgroundColor: "#daa52033" }}
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
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
