import React, { useState } from "react";

const ContactUs = (props) => {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "#042743" : "white",
    borderColor: props.mode === "dark" ? "042743" : "white",
    borderWidth: props.mode === "dark" ? "2px" : "2px",
  };
  const myData = {
    FirstName: "",
    LastName: "",
    email: "",
    ContactNumber: "",
    StudentId: "",
    password: "",
  };
  const [dataValue, setdataValue] = useState(myData);
  const [error, seterror] = useState(false);
  const submitBtn = (e) => {
    e.preventDefault();
    // seterror(true);
    if (
      dataValue.FirstName !== "" &&
      dataValue.LastName !== "" &&
      dataValue.email !== "" &&
      dataValue.ContactNumber !== "" &&
      dataValue.StudentId !== "" &&
      dataValue.password !== ""
    ) {
      console.log(
        dataValue.FirstName,
        dataValue.LastName,
        dataValue.email,
        dataValue.ContactNumber,
        dataValue.StudentId,
        dataValue.password
      );
      setdataValue(myData);
      //   seterror(false);
    }
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "#042743" : "white",
        }}
      >
        <h2>Contact Us</h2>
        <form className="row justify-content-between" onSubmit={submitBtn}>
          <input
            type="text"
            style={myStyle}
            className="col-5 rounded my-2"
            placeholder="FirstName"
            value={dataValue.FirstName}
            onChange={(e) =>
              setdataValue({ ...dataValue, FirstName: e.target.value })
            }
          />
          {/* <span className="position-absolute text-danger error_set">
            {error && dataValue.FirstName == "" ? "error" : ""}
          </span> */}
          <input
            type="text"
            style={myStyle}
            className="col-5 rounded my-2"
            placeholder="LastName"
            value={dataValue.LastName}
            onChange={(e) =>
              setdataValue({ ...dataValue, LastName: e.target.value })
            }
          />
          <input
            type="email"
            style={myStyle}
            className="col-5 rounded my-2"
            placeholder="email"
            value={dataValue.email}
            onChange={(e) =>
              setdataValue({ ...dataValue, email: e.target.value })
            }
          />
          <input
            type="number"
            style={myStyle}
            className="col-5 rounded my-2"
            placeholder="ContactNumber"
            value={dataValue.ContactNumber}
            onChange={(e) =>
              setdataValue({ ...dataValue, ContactNumber: e.target.value })
            }
          />
          <input
            type="number"
            style={myStyle}
            className="col-5 rounded my-2"
            placeholder="StudentId"
            value={dataValue.StudentId}
            onChange={(e) =>
              setdataValue({ ...dataValue, StudentId: e.target.value })
            }
          />
          <input
            type="password"
            style={myStyle}
            className="col-5 rounded my-2"
            placeholder="password"
            value={dataValue.password}
            onChange={(e) =>
              setdataValue({ ...dataValue, password: e.target.value })
            }
          />
          <button style={myStyle} className="col-3 rounded my-2">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
