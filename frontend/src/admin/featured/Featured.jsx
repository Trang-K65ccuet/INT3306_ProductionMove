import React from "react";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./featured.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "./ChangingProgressProvider";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Doanh số bán hàng</h1>
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
        <p className="title">Doanh số tháng này</p>
        <p className="amount">251</p>
        <p className="desc">Doanh số trước đây</p>
        <div className="summary">
        <div className="item">
            <div className="itemTitle">Trạng thái</div>
            <div className="itemResult positive">
              <div className="resultAmount">Tăng</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Tháng trước</div>
            <div className="itemResult positive">
              <div className="resultAmount">223</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Năm trước</div>
            <div className="itemResult negative">
              <div className="resultAmount">2282</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
