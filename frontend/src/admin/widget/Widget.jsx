import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SellIcon from '@mui/icons-material/Sell';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import "./widget.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const Widget = ({ type }) => {
  const [productline, setProductline] = useState([]);
  const [user, setUser] = useState([]);
  const [product, setProduct] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    getProductline();
    getUser();
    getProduct();
    getError();
  }, []);

  const productlineCount = productline.length;  
  const getProductline = async () => {
    const response = await axios.get("http://localhost:5000/productline",{withCredentials: true});
    setProductline(response.data);  
  }

  const userCount = user.length;
  const getUser= async () => {
    const response = await axios.get("http://localhost:5000/users",{withCredentials: true});
    setUser(response.data);
  };

  const productCount = 0;
  const getProduct= async () => {
    const response = await axios.get("http://localhost:5000/productitem/statistic",{withCredentials: true});
    setProduct(response.data);
  };

  const errorCount = 0;
  //console.log(`${error[0][0].totalquantity}`)
  const getError= async () => {
    const response = await axios.get("http://localhost:5000/productitem/by",{withCredentials: true});
    setError(response.data);
  };

  let data;
  const amount = 500;
  const diff = 30;

  switch (type) {
    case "users":
      data = {
        title: "NGƯỜI DÙNG",
        value:userCount,
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
          title: "MẶT HÀNG",
          value: productlineCount,
          link: "Mặt hàng quản lý",
          icon: (
            <ProductionQuantityLimitsIcon
              className="icon"
              style={{ color: "purple", backgroundColor: "#80008033" }}
            />
          ),
        };
        break;
        case "product":
          data = {
            title: "SẢN PHẨM",
            value: productCount,
            link: "Sản phẩm được sản xuất",
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
            value:amount,
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
            value: productCount ,
            link: "Sản phẩm bị lỗi",
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
