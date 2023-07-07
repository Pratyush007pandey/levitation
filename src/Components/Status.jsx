import React from "react";

const Status = ({ res }) => {
  if (!res) {
    return (
      <>
        <p>Waiting...</p>
      </>
    );
  } else {
    return (
      <div className="form-dynamic">
        <h3>{res}</h3>
      </div>
    );
  }
};

export default Status;
