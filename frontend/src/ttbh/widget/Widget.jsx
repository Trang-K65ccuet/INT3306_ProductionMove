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
  const [item, setItem] = useState([]);
  useEffect(() => {
    getItem();
  }, []);
  const countItem = item.length;
  const getItem = async () => {
    const response = await axios.get("http://localhost:5000/warranty/allitem", {withCredentials: true});
    setItem(response.data);
  };

  const [error, setError] = useState([]);
  useEffect(() => {
    getError();
  }, []);
  const countError = error.length;
  const getError = async () => {
    const response = await axios.get("http://localhost:5000/warranty/itemneedsendback", {withCredentials: true});
    setError(response.data);
  };

  let data;
  // temp
  const amount = 500;
  const diff = 30;

  switch (type) {
      case "products":
        data = {
          title: "SẢN PHẨM",
          value: countItem ,
          link: "Sản phẩm đang trong kho bảo hành",
          icon: (
            <ProductionQuantityLimitsIcon
              className="icon"
              style={{color: "crimson", backgroundColor: "#ff000033"}}
            />
          ),
        };
        break;
        case "insurance":
          data = {
            title: "ĐÃ BẢO HÀNH",
            value: amount ,
            link: "Sản phẩm đã bảo hành thành công",
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
            value: countError ,
            link: "Sản phẩm không thể bảo hành trong kho",
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
