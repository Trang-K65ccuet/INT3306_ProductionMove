import Layout from "../Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

const InsuranceCSSX = () => {
  const [error, setError] = useState([]);

  useEffect(() => {
    getError();
  }, []);

  const getError = async () => {
    const response = await axios.get("http://localhost:5000/manufacture/allcantfix", {withCredentials: true});
    setError(response.data);
  };

  let itemsPerPage = 5; 
  const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = error.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(error.length / itemsPerPage);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % error.length;
      setItemOffset(newOffset);
    };
  return (
    <Layout>
          <div>
            <h1 className="title">Bảo hành</h1>
            <h3>Các sản phẩm không thể bảo hành bị trả về</h3>
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
                {currentItems.map((error, index) => (
                  <tr key={error.productcode}>
                  <td>{index + 1}</td>
                  <td>{error.productcode}</td>
                  <td>{error.productline}</td>
                  <td>{error.name}</td>
                  <td>{error.price}</td>
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

export default InsuranceCSSX;