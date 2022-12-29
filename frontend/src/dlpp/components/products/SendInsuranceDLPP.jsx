import React from "react";
import Layout from "../../pages/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SendInsuranceDLPP = () => {
    const [productcode, setProduct] = useState("");
    const [warrantyAgentId, setWarrantyAgentId] = useState("");
    const [warrantyName, setWarrantyName] = useState("");
    const [dateOfGuarantee, setDateOfGuarantee] = useState("");
    const [warrantylist, setWarrantyList] = useState([]);
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
      getWarrantyLists();
    }, []);

    const getWarrantyLists = async () => {
      const response = await axios.get("http://localhost:5000/warranty/allagent", {
        withCredentials: true,
      });
      setWarrantyList(response.data);
      setWarrantyName(
        response.data[0].name + " - Mã trung tâm: " + response.data[0].id
      );
      setWarrantyAgentId(response.data[0].id);
    };
  

    //Send error
    const getSendError = async (e) => {
      e.preventDefault();
      try {
        await axios.post(
          "http://localhost:5000/productitem/senditemtowarranty",
          {
            productcode:productcode,
            warrantyAgentId: warrantyAgentId,
            dateOfGuarantee: dateOfGuarantee,
          },
          { withCredentials: true }
        );
        navigate('/dlpp/insurance');
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };

  return (
    <Layout>
      <div>
      <h1 className="title">Bảo hành</h1>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={getSendError}>
              <p className="has-text-centered"></p>
              <div className="field">
                <label className="label">Mã sản phẩm</label>
                <div className="control">
                  <input
                    value = {productcode} 
                    onChange={(e) => setProduct(e.target.value)}
                    type="text"
                    className="input"
                    placeholder="Mã sản phẩm"
                  />
                </div>
              </div>
              <div className="field">
                  <label className="label">Trung tâm bảo hành</label>
                  <div className="control select is-fullwidth">
                    <select className="input"
                      value={warrantyName}
                      onChange={(e) => {
                        let arr = e.target.value.split(" ");
                        setWarrantyName(e.target.value);
                        setWarrantyAgentId(arr[arr.length - 1]);
                      }}
                    >
                      {warrantylist.map((warranty, index) => (
                        <option key={index}>
                          {warranty.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>


              <div className="field">
                <label className="label">Ngày bảo hành</label>
                <div className="control">
                  <input
                    value = {dateOfGuarantee} 
                    onChange={(e) => setDateOfGuarantee(e.target.value)}
                    type="date"
                    className="input"
                    placeholder="Ngày bảo hành"
                  />
                </div>
              </div>
              <p className="has-text-centered">{msg} </p>
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
    </Layout>
    
  );
};

export default SendInsuranceDLPP;