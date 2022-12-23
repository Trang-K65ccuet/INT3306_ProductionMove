import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUserForm = () => {
  const [name, setName] = useState("");
  // const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [confpassword, setConfPassword] = useState("");
  const [position, setPosition] = useState("admin");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  

  useEffect(() => {
    const getUserById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setName(response.data.name);
        setPosition(response.data.position);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getUserById(); 
  }, [id]); 

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/users/update/${id}`, {
        name: name,
        position: position,
        password: password,
      });
      navigate("/admin/users");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  
  
  return (
    <div>
      <h1 className="title">Người dùng</h1>
      <h2 className="subtitle">Chỉnh sửa người dùng</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateUser}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Tên người dùng</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Tên người dùng"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              {/* <div className="field">
                <label className="label">Tên đăng nhập</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Tên đăng nhập"
                  />
                </div>
              </div> */}
              <div className="field">
                <label className="label">Mật khẩu</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    placeholder="******"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required='required'
                  />
                </div>
              </div>
              {/* <div className="field">
                <label className="label">Xác nhận mật khẩu</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    placeholder="******"
                  />
                </div>
              </div> */}
              <div className="field">
                <label className="label">Vai trò</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      >
                      <option value="admin">Ban điều hành</option>
                      <option value="cssx">Cơ sở sản xuất</option>
                      <option value="dlpp">Đại lý phân phối</option>
                      <option value="ttbh">Trung tâm bảo hành</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Chỉnh sửa và lưu
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserForm;