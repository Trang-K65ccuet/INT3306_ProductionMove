import React from "react";;

const ProductListDLPP = () => {
  return (
    <div>
      <h1 className="title">Sản phẩm</h1>
      <h2 className="subtitle">Danh sách các mặt hàng và số lượng</h2>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mặt hàng</th>
            <th>Số lượng</th>
          </tr>
        </thead>
        <tbody>
        <tr>
              <td>1</td>
              <td>Lenovo</td>
              <td>100</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductListDLPP;