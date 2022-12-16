import React from "react";
import Layout from "../../pages/Layout";


const InsuranceInDLPP = () => {
  return (
    <Layout>
      <div>
      <h1 className="title">Bảo hành</h1>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form>
              <p className="has-text-centered"></p>
              <div className="field">
                <label className="label">Mặt hàng</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Mặt hàng"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Số lượng</label>
                <div className="control">
                  <input
                    type="number"
                    className="input"
                    placeholder="Số lượng"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Họ tên khách hàng</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Cơ sở sản xuất"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Số điện thoại</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Số điện thoại"
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Gửi cho trung tâm bảo hành
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </Layout>
    
  );
};

export default InsuranceInDLPP;