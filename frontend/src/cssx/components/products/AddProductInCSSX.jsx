import React from "react";
import Layout from "../../pages/Layout";


const AddProductInCSSX = () => {
  return (
    <Layout>
      <div>
      <h1 className="title">Nhập hàng mới</h1>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form>
              <p className="has-text-centered"></p>
              <div className="field">
                <label className="label">Sản phẩm</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Sản phẩm"
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
                <div className="control">
                  <button type="submit" className="button is-success">
                    Nhập
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

export default AddProductInCSSX;