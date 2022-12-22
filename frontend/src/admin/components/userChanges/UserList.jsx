import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.position}</td>
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
    </div>
  );
};

export default Userlist;