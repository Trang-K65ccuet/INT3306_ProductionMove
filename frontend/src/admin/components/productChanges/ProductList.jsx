import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";

const ProductList = () => {
  const [productLines, setProductLines] = useState([]);

  useEffect(() => {
    getProductLines(); 
  }, []); 

  const getProductLines = async () => {
    const response = await axios.get('http://localhost:5000/productline', {withCredentials: true}); 
    setProductLines(response.data); 
  }

  const deleteProductLine = async () => {
    await axios.delete(`http://localhost:5000/productline/delete`, {withCredentials: true})
    getProductLines(); 
  }
  

  let itemsPerPage = 5; 
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = productLines.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(productLines.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % productLines.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <h1 className="title">Dòng sản phẩm</h1>
      <h2 className="subtitle">Danh mục dòng sản phẩm</h2>
      <Link to="/admin/products/add" className="button is-primary mb-2">
        Thêm mới
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên dòng sản phẩm</th>
            <th>Mô tả</th>
            <th>Tùy chọn</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((productLine, index) => (
            <tr key={productLine.productline}>
            <td>{index + 1}</td>
            <td>{productLine.productline}</td>
            <td>{productLine.description}</td>
            <td>
              <Link
                to={`/products/edit/${productLine.productline}`}
                className="button is-small is-info"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteProductLine()}
                className="button is-small is-danger"
              >
                Delete
              </button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
              breakLabel="..."
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel={"< Prev"}
              nextLabel={"Next >"}
              renderOnZeroPageCount={null}
              containerClassName={"pagination-list"}
              pageLinkClassName={"pagination-link"}
              previousLinkClassName={"pagination-previous"}
              nextLinkClassName={"pagination-next"}
              activeLinkClassName={"pagination-link is-current"}
              disabledLinkClassName={"pagination-link is-disabled"}
        />
    </div>
  );
};

export default ProductList;