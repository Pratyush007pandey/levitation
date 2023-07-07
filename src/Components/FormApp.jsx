import React, { useState, useEffect } from "react";
import Basic from "./Basic";
import Address from "./Address";
import FileUpload from "./FileUpload";
import MultiFileUpload from "./MultiFileUpload";
import Status from "./Status";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./FormApp.css";

const FormApp = () => {
  const [page, setPage] = useState(0);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [formData, setFormData] = useState({
    id: 0,
    created_at: "now",
    name: "string",
    email: "user@example.com",
    phone_number: "string",
    address_1: "string",
    address_2: "string",
    city: "string",
    state: "string",
    pincode: 0,
    country: "string",
    geolocation: "string",
    single_file: {},
    multi_file: [{}],
  });
  const [res, setRes] = useState("");
  let token = localStorage.getItem("auth");
  const navigate = useNavigate();

  const submitFile = async () => {
    const newFormData = new FormData();
    for (const key in formData) {
      if (key === "multi_file" && selectedFiles.length > 0) {
        for (let i = 0; i < selectedFiles.length; i++) {
          const paramName = `multi_ups${i + 1}`;
          newFormData.append(
            paramName,
            selectedFiles[i],
            selectedFiles[i].name
          );
        }
      } else {
        newFormData.append(key, formData[key]);
      }
    }

    console.log(newFormData);
    try {
      const response = await axios.post(
        "https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/form",
        newFormData,
        {
          headers: {
            authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      setPage((currentPage) => currentPage + 1);
      setRes("success");
    } catch (error) {
      console.error(error);
      setPage((currentPage) => currentPage + 1);
      setRes("Failed:Please enter the value correctly");
    }
  };

  const UpdateForm = (value, item) => {
    setFormData({ ...formData, [item]: value });
    if (item === "multi_file") {
      setSelectedFiles(value);
    }
  };

  const pageItem = [
    "Basic Details",
    "Address",
    "File Upload",
    "Multi File Upload",
    "Status",
  ];
  const pageCont = [
    <Basic UpdateForm={UpdateForm} formData={formData} />,
    <Address UpdateForm={UpdateForm} />,
    <FileUpload UpdateForm={UpdateForm} />,
    <MultiFileUpload UpdateForm={UpdateForm} />,
    <Status res={res} />,
  ];
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="formapp-container">
      {token ? (
        <div className="logout-button">
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div></div>
      )}
      {token ? (
        <div className="formapp-card">
          <div className="decore">
            {pageItem.map((item, index) => (
              <div
                key={index}
                className={`decore-item ${page >= index ? "active" : ""}`}
              ></div>
            ))}
          </div>
          <h1>{pageItem[page]}</h1>
          {pageCont[page]}

          <div className="formapp-button">
            <button
              onClick={() => setPage((currentPage) => currentPage - 1)}
              disabled={page === 0}
            >
              prev
            </button>
            {page === pageItem.length - 2 ? (
              <button
                onClick={submitFile}
                disabled={page === pageItem.length - 1}
              >
                Submit
              </button>
            ) : (
              <button
                onClick={() => setPage((currentPage) => currentPage + 1)}
                disabled={page === pageItem.length - 1}
              >
                Next
              </button>
            )}
          </div>
        </div>
      ) : (
        <>
          <h1>Please Login To View This Page</h1>
        </>
      )}
    </div>
  );
};
export default FormApp;
