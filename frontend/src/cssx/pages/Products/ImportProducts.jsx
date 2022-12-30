import Layout from "../Layout";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

const ImportProductsCSSX = () => {
  const [productCSSX, setProductCSSX] = useState([]);

  useEffect(() => {
    getProductCSSX();
  }, []);

  const getProductCSSX = async () => {
    const response = await axios.get("http://localhost:5000/manufactures/items/", {withCredentials: true});
    setProductCSSX(response.data);
  };

  let itemsPerPage = 8; 
  const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = productCSSX.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(productCSSX.length / itemsPerPage);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % productCSSX.length;
      setItemOffset(newOffset);
    };
  return (
    <Layout>
          <div>
            <h1 className="title">Nhập hàng</h1>
            <Link to="/cssx/import/add" className="button is-primary mb-2">
              Nhập hàng mới
            </Link>
            <h3>Các sản phẩm đã nhập</h3>
            <table className="table is-striped is-fullwidth">
            <thead>
          <tr>
            <th>STT</th>
            <th>Mã sản phẩm</th>
            <th>Sản phẩm</th>
            <th>Dòng sản phẩm</th>
            <th>Giá</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((product, index) => ( 
            <tr key={product.productcode}>
            <td>{index + 1}</td>
            <td>{product.productcode}</td>
            <td>{product.productline}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
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
    </Layout>
  );
};

export default ImportProductsCSSX;