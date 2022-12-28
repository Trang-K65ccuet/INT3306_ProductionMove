import Layout from "../Layout";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

const ExportProductsCSSX = () => {
  const [exportCSSX, setExport] = useState([]);

  useEffect(() => {
    getExport();
  }, []);

  const getExport = async () => {
    const response = await axios.get("http://localhost:5000/manufacture/lot", {withCredentials: true});
    setExport(response.data);
  };

  let itemsPerPage = 5; 
  const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = exportCSSX.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(exportCSSX.length / itemsPerPage);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % exportCSSX.length;
      setItemOffset(newOffset);
    };
  return (
    <Layout>
          <div>
            <h1 className="title">Xuất hàng</h1>
            <Link to="/cssx/export/exportnew" className="button is-primary mb-2">
              Xuất hàng
            </Link>
            <h3>Lịch sử xuất hàng</h3>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Lô</th>
                  <th>Số lượng</th>
                  <th>Đại lý</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((exportcssx, index) => (
                  <tr key={exportcssx.lot}>
                  <td>{index + 1}</td>
                  <td>{exportcssx.lot}</td>
                  <td>{exportcssx.quantity}</td>
                  <td>{exportcssx.name}</td>
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

export default ExportProductsCSSX;