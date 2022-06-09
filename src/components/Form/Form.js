import React, { useState } from "react";
import validator from "validator";
import "./Form.css";

const Form = () => {
  let [validationMessage, setMessage] = useState("");
  let [buttonDisabled, setButton] = useState(true);

  function error(e) {
    if (e.target.value === "") {
      setMessage("*This is a required field");
    }
    if (e.target.type === "email") {
      if (validator.isEmail(e.target.value)) {
        return;
      } else {
        setMessage("Please enter a valid email address");
      }
    }
  }

  return (
    <div className="form-card">
      <div className="contact-card">
        <h2>Contact Me</h2>
      </div>
      <form className="form-container">
        <div className="form-margins">
          <div className="form-group">
            <label>Name</label>
          </div>
          <input
            type="text"
            className="form-control"
            onChange={error}
          />
        </div>

        <div className="form-margins">
          <div className="form-group">
            <label>Email address</label>
          </div>
          <input
            onChange={error}
            name="email"
            type="email"
            className="form-control"
          />
        </div>

        <div className="form-margins">
          <div className="form-group">
            <label>Message</label>
          </div>
          <textarea
            className="form-control"
            onChange={error}
          ></textarea>
        </div>

        <div className="form-margins">
          <button
            type="submit"
            className="btn"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
