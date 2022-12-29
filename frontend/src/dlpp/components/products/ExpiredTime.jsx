import Layout from "../../pages/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

const ExpiredTime = () => {
  //map expired time
  const [expired, setExpired] = useState([]);
  useEffect(() => {
    getExpired();
  }, []);
  const getExpired = async () => {
    const response = await axios.get("http://localhost:5000/productitem/cantsell", {withCredentials: true});
    setExpired(response.data);
  };

  //get CSSX name
  const returnCSSX = async (productCode) => {
    await axios.post(
      `http://localhost:5000/producitem/sendbackovertime`,
      {
        productcode:productCode,
      },
      { withCredentials: true }
    );
  getExpired(); 
}

  let itemsPerPage = 5; 
  const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = expired.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(expired.length / itemsPerPage);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % expired.length;
      setItemOffset(newOffset);
    };

  return (
    <Layout>
          <div>
            <h1 className="title">Hết hạn</h1>
            <h2>Các sản phẩm hết hạn do không bán</h2>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã sản phẩm</th>
                  <th>Sản phẩm</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((product, index) => (
                  <tr key={product.productcode}>
                  <td>{index + 1}</td>
                  <td>{product.productcode}</td>
                  <td>{product.productline}</td>
                  <td>
                      <button onClick={() => returnCSSX(product.productcode)} className="button is-small is-danger">
                        Trả về cơ sở sản xuất
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

export default ExpiredTime;