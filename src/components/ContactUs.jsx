import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const ContactUs = (props) => {
  const form = useRef();
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "#13466e" : "white",
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
  // const [error, seterror] = useState(false);
  const sendForm = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cg6vcyq",
        "template_tv3wx2o",
        form.current,
        "Na6AjwB7_sAwEyxD7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
      toast("successfull send mail");
      //   seterror(false);
    }
  };
  return (
    <>
      <ToastContainer />
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "#042743" : "white",
        }}
      >
        <h2>Contact Us</h2>
        <form
          className="row justify-content-between"
          ref={form}
          onSubmit={sendForm}
        >
          <input
            type="text"
            style={myStyle}
            className="col-5 rounded my-2"
            name="FirstName"
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
            name="LastName"
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
            name="email"
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
            name="ContactNumber"
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
            name="StudentId"
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
            name="password"
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
