import Layout from "../Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

const ErrorsTTBH = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    const response = await axios.get("http://localhost:5000/warranty/itemneedsendback", {withCredentials: true});
    setItem(response.data);
  };

  const setItemError = async (productCode) => {
    await axios.post(
      `http://localhost:5000/warranty/sendbackmanufacture`,
      {
        productcode:productCode,
      },
      { withCredentials: true }
    );
  getItem(); 
}
  let itemsPerPage = 5; 
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = item.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(item.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % item.length;
    setItemOffset(newOffset);
  };

  return (
    <Layout>
        <div>
          <h1 className="title">Không thể bảo hành</h1>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã sản phẩm</th>
                  <th>Sản phẩm</th>
                  <th>Cơ sở sản xuất</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                  {currentItems.map((item, index) => (
                    <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.productcode}</td>
                    <td>{item.productline}</td>
                    <td>{item.name}</td>
                    <td>
                      <button onClick={() => setItemError(item.productcode)} className="button is-small is-danger">
                        Gửi về cơ sở sản xuất
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
    </Layout>
  );
};

export default ErrorsTTBH;