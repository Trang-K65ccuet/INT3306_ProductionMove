import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PublishIcon from '@mui/icons-material/Publish';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SellIcon from '@mui/icons-material/Sell';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import "./widget.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const Widget = ({ type }) => {
  const [productCSSX, setProductCSSX] = useState([]);

  useEffect(() => {
    getProductCSSX();
  }, []);

  const productCount = productCSSX.length;  
  const getProductCSSX = async () => {
    const response = await axios.get("http://localhost:5000/manufactures/items",{withCredentials: true});
    setProductCSSX(response.data);  
  }

  let data;
  // temp
  const amount = 500;
  const diff = 30;

  switch (type) {
      case "products":
        data = {
          title: "SẢN PHẨM",
          value:productCount,
          link: "Sản phẩm trong kho",
          icon: (
            <ProductionQuantityLimitsIcon
              className="icon"
              style={{color: "crimson", backgroundColor: "#ff000033"}}
            />
          ),
        };
        break;
        case "import":
          data = {
            title: "NHẬP",
            value:amount,
            link: "Sản phẩm đã nhập",
            icon: (
              <PublishIcon
                className="icon"
                style={{ color: "blue", backgroundColor: "#ddeeff" }}
              />
            ),
          };
        break;
        case "export":
          data = {
            title: "XUẤT",
            value:amount,
            link: "Sản phẩm đã xuất cho đại lý",
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
            value: amount,
            link: "Sản phẩm không thể bảo hành",
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
        <span className="counter">{data.value}</span>
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
