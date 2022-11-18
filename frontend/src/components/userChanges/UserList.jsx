import React from "react";
import { Link } from "react-router-dom";

const Userlist = () => {
  return (
    <div>
      <h1 className="title">Users</h1>
      <h2 className="subtitle">List of Users</h2>
      <Link to="/users/add" className="button is-primary mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        <tr>
              <td>1</td>
              <td>MH</td>
              <td>hoannguyendangmanh@gmail.com</td>
              <td>admin</td>
              <td>
                <Link
                  to={`/users/edit/1`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Userlist;