import React from "react";

const Address = ({ UpdateForm }) => {
  return (
    <div className="form-dynamic">
      <input
        type="text"
        placeholder="Address Line 1"
        onChange={(event) => UpdateForm(event.target.value, "address_1")}
      ></input>
      <input
        type="text"
        placeholder="Address Line 2"
        onChange={(event) => UpdateForm(event.target.value, "address_2")}
      ></input>
      <input
        type="text"
        placeholder="City"
        onChange={(event) => UpdateForm(event.target.value, "city")}
      ></input>
      <input
        type="text"
        placeholder="State"
        onChange={(event) => UpdateForm(event.target.value, "state")}
      ></input>
      <input
        type="number"
        placeholder="ZipCode"
        onChange={(event) => UpdateForm(event.target.value, "pincode")}
      ></input>
      <input
        type="text"
        placeholder="Country"
        onChange={(event) => UpdateForm(event.target.value, "country")}
      ></input>
    </div>
  );
};

export default Address;
