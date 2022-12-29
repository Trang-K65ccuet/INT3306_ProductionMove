import React from "react";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./featured.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "./ChangingProgressProvider";
import { useState, useEffect } from "react";
import axios from "axios";

const Featured = () => {
  const [errorItem, setError] = useState([[{total: 0, productline: ''}], [{detailproductline: 0, productline: ''}]]);
  const [sell, setSell] = useState([[{totalquantity: 0, totalmoney: 0}], [{total: 0, productline: ''}]]);

  useEffect(() => {
    getSell();
    getError();
  }, []);
  const getError= async () => {
    const response = await axios.get("http://localhost:5000/productitem/fault",{withCredentials: true});
    setError(response.data);
  };
  const errorCount = errorItem[0][0].total;
  
  const getSell= async () => {
    const response = await axios.get("http://localhost:5000/productitem/byproductline/2022",{withCredentials: true});
    setSell(response.data);
  };
  const sellCount = sell[0][0].totalquantity;
  const sellPrice = sell[0][0].totalmoney;


  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Doanh số 2022</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <ChangingProgressProvider
            values={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          >
            {(percentage) => (
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  pathTransitionDuration: 0.95,
                  trailColor: "#82ca9d",
                  pathColor: "#210876",
                  textColor: "#210876",
                })}
              />
            )}
          </ChangingProgressProvider>
        </div>
        <p className="title">Doanh số bán hàng</p>
        <p className="amount">{sellCount}</p>
        <div className="summary">
        <div className="item">
            <div className="itemTitle">Trạng thái</div>
            <div className="itemResult positive">
              <div className="resultAmount">Tăng</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Thu nhập</div>
            <div className="itemResult positive">
              <div className="resultAmount">{sellPrice} đồng</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Lỗi</div>
            <div className="itemResult negative">
              <div className="resultAmount">{errorCount} sản phẩm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
