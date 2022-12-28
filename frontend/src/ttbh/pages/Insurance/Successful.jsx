import Layout from "../Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./insurance.css"
import ReactPaginate from "react-paginate";

const SuccessfulTTBH = () => {
  const [success, setSuccess] = useState([]);

  useEffect(() => {
    getSuccess();
  }, []);

  const getSuccess = async () => {
    const response = await axios.get("http://localhost:5000/warranty/itemwaitsendback", {withCredentials: true});
    setSuccess(response.data);
  };


  let itemsPerPage = 5; 
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = success.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(success.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % success.length;
    setItemOffset(newOffset);
  };

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
                  <th>Dòng sản phẩm</th>
                  <th>Giá</th>
                </tr>
              </thead>
              <tbody>
                  {currentItems.map((item, index) => (
                    <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.productcode}</td>
                    <td>{item.productline}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
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

export default SuccessfulTTBH;