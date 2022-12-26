import Layout from "../Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./insurance.css"

const SuccessfulTTBH = () => {
  return (
    <Layout>
        <div>
          <h1 className="title">Đã bảo hành</h1>
            <p className="history">Các sản phẩm đã bảo hành thành công</p>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã sản phẩm</th>
                  <th>Sản phẩm</th>
                  <th>Đại lý phân phối</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                    <td>1</td>
                    <td>HP14314</td>
                    <td>HP1</td>
                    <td>Đại lý 1</td>
                    <td>Đã xong</td>
                  </tr>
              </tbody>
            </table>
        </div>
    </Layout>
  );
};

export default SuccessfulTTBH;