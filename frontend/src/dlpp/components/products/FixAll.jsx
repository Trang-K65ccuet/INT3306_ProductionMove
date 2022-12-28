import React from "react";
import Layout from "../../pages/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";


const FixAll = () => {
    const [msg, setMsg] = useState("");
    const [chooseProductline, setChooseProductline] = useState("");
    const navigate = useNavigate();
    const [productline, setProductline] = useState([]);
    useEffect(() => {
      getProductline();
    }, []);
    const getProductline = async () => {
        const response = await axios.get("http://localhost:5000/productline",{withCredentials: true});
        setProductline(response.data);  
      };

      const [all, setAll] = useState([]);
      useEffect(() => {
        getAll();
      }, []);
      const getAll = async () => {
          const response = await axios.get("http://localhost:5000/productitem/allretrieveitem",{withCredentials: true});
          setAll(response.data);  
        };

    const sendAll = async (e) => {
      e.preventDefault();
      try {
        await axios.post(
          "http://localhost:5000/productitem/retrieveitem",
          {
            productline:chooseProductline,
          },
          { withCredentials: true }
        );
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };

    let itemsPerPage = 5; 
    const [itemOffset, setItemOffset] = useState(0);
      const endOffset = itemOffset + itemsPerPage;
      const currentItems = all.slice(itemOffset, endOffset);
      const pageCount = Math.ceil(all.length / itemsPerPage);
    
      // Invoke when user click to request another page.
      const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % all.length;
        setItemOffset(newOffset);
      };

  return (
    <Layout>
      <div>
      <h1 className="title">Triệu hồi</h1>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={sendAll}>
              <p className="has-text-centered"></p>
              <div className="field">
                <label className="label">Dòng sản phẩm</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={chooseProductline}
                      onChange={(e) => {
                        setChooseProductline(e.target.value); 
                      }}
                      className="input"
                    >
                      {productline.map((product, index) => (
                        <option key={index}>
                          {product.productline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Gửi
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã sản phẩm</th>
            <th>Dòng sản phẩm</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((product, index) => (
            <tr key={product.productcode}>
            <td>{index + 1}</td>
            <td>{product.productcode}</td>
            <td>{product.productline}</td>
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
    </Layout>
    
  );
};

export default FixAll;