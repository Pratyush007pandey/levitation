import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Basic = ({ UpdateForm, formData }) => {
  return (
    <div className="form-dynamic">
      <label>
        Email
        <input
          type="email"
          key="email"
          placeholder="abc@xyz.com"
          onChange={(event) => UpdateForm(event.target.value, "email")}
        ></input>
      </label>
      <label>
        Password
        <input
          type="password"
          placeholder="********"
          onChange={(event) => UpdateForm(event.target.value, "password")}
        ></input>
      </label>
      <label>
        PhoneNumber:
        <PhoneInput
          country={"in"}
          placeholder="1234567890"
          value={formData.phone_number}
          // onChange={(event) => UpdateForm(event.target.value, "phone_number")}
          onChange={(value) => UpdateForm(value, "phone_number")}
        />
      </label>
    </div>
  );
};

export default Basic;
