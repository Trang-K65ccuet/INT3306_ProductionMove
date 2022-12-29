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
  const [errorItem, setError] = useState([[{total: 0, productline: ''}], [{detailproductline: 0, productline: ''}]]);
 

  useEffect(() => {
    getProductline();
    getUser();
    getProduct();
    getError();
  }, []);
  var errorC = errorItem.length;
  const getError= async () => {
    const response = await axios.get("http://localhost:5000/productitem/fault",{withCredentials: true});
    setError(response.data);
  };
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

  const productCount = product.length;
  const getProduct= async () => {
    const response = await axios.get("http://localhost:5000/productitem/all",{withCredentials: true});
    setProduct(response.data);
  };

  
  var x1 = 0;
  //setTimeout(()=> {console.log(errorCount.find().total)},5);
  let data;
  switch (type) {
    case "users":
      data = {
        title: "NGƯỜI DÙNG",
        value:userCount,
        link: "Tài khoản được kích hoạt",
        diff:100,
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
          diff:100,
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
            diff:100,
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
            value: errorC > 2 ? errorItem[2][0].total : 0,
            link: "Sản phẩm bị lỗi",
            diff:100,
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
            {data.diff}%
          </div>
          {data.icon}
        </div>
      </div>
    );

};

export default Widget