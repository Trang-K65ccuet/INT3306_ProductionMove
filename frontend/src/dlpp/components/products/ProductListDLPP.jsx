import React from "react";;

const ProductListDLPP = () => {
  return (
    <div>
      <h1 className="title">Sản phẩm</h1>
      <h2 className="subtitle">Danh sách các sản phẩm và số lượng</h2>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>STT</th>
            <th>Sản phẩm</th>
            <th>Dòng dản phẩm</th>
            <th></th>
            <th>Số lượng</th>
          </tr>
        </thead>
        <tbody>
        <tr>
              <td>1</td>
              <td>DELL1</td>
              <td>Máy tính Dell</td>
              <td>100</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductListDLPP;