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

  const [productDLPP, setProductDLPP] = useState([]);
  useEffect(() => {
    getProductDLPP();
  }, []);
  const productCount = productDLPP.length;  
  const getProductDLPP = async () => {
    const response = await axios.get("http://localhost:5000/lot/get/item",{withCredentials: true});
    setProductDLPP(response.data);  
  }

  const [lot, setLot] = useState([]);
  useEffect(() => {
    getLot();
  }, []);
  const lotCount = lot.length;  
  const getLot = async () => {
    const response = await axios.get("http://localhost:5000/lots",{withCredentials: true});
    setLot(response.data);  
  }

  const [sell, setSell] = useState([]);
  useEffect(() => {
    getSell();
  }, []);
  const sellCount = sell.length;  
  const getSell = async () => {
    const response = await axios.get("http://localhost:5000/consignment/sell",{withCredentials: true});
    setSell(response.data);  
  }

  const [error, setError] = useState([]);
  useEffect(() => {
    getError();
  }, []);
  const errorCount = error.length;  
  const getError = async () => {
    const response = await axios.get("http://localhost:5000/productitem/faultiteminstock",{withCredentials: true});
    setError(response.data);  
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
          link: "Sản phẩm đã nhập",
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
            value:lotCount,
            link: "Lô đã nhập",
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
            title: "BÁN",
            value:sellCount,
            link: "Sản phẩm đã bán cho khách hàng",
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
            value:errorCount,
            link: "Sản phẩm cần bảo hành",
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
