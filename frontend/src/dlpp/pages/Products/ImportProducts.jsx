import Layout from "../Layout";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../button/Button";
import "./products.css"
import ReactPaginate from "react-paginate";


const ImportProductsDLPP = () => {
  const [lot, setLot] = useState([]);
  useEffect(() => {
    getLot();
  }, []);
  const getLot = async () => {
    const response = await axios.get("http://localhost:5000/lots",{withCredentials: true});
    setLot(response.data);  
  };

  let itemsPerPage = 5; 
  const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = lot.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(lot.length / itemsPerPage);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % lot.length;
      setItemOffset(newOffset);
    };

  return (
    <Layout>
          <div>
            <h1 className="title">Nhập hàng</h1>
            <div className="button-widget">
              <Link to="/dlpp/import/add"><Button type="request" /></Link>
              <Link to="/dlpp/import/import"><Button type="import" /></Link>
            </div>
            <br />
            <h3>Lịch sử nhập hàng</h3>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Lô</th>
                  <th>Số lượng</th>
                  <th>Cơ sở sản xuất</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((lot, index) => (
                  <tr key={lot.lot}>
                  <td>{index + 1}</td>
                  <td>{lot.lot}</td>
                  <td>{lot.quantity}</td>
                  <td>{lot.name}</td>
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

export default ImportProductsDLPP;