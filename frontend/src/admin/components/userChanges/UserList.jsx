import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Userlist = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users", {withCredentials: true});
    setUsers(response.data);
  };

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:5000/users/delete/${userId}`);
    getUsers();
  };

  function replacePos(pos) {
    if(pos == "admin") return "Ban điều hành";
    if(pos == "cssx") return "Cơ sở sản xuất";
    if(pos == "dlpp") return "Đại lý phân phối";
    if(pos == "ttbh") return "Trung tâm bảo hành"
  }
  let itemsPerPage = 5; 
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = users.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(users.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <h1 className="title">Người dùng</h1>
      <h2 className="subtitle">Danh sách người dùng</h2>
      <Link to="/admin/users/add" className="button is-primary mb-2">
        Thêm mới
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Tên đăng nhập</th>
            <th>Vai trò</th>
            <th>Tùy chọn</th>
          </tr>
        </thead>
        <tbody>
        {currentItems.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{replacePos(user.position)}</td>
              <td>
                <Link
                  to={`edit/${user.id}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteUser(user.id)}
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

export default Userlist;