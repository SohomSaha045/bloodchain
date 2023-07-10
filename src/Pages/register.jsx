import React from "react";
import "../Styles/register.css";
import imgimg from "../assets/img1.avif";

function Register() {
  return (
    <div className="main">
      <div className="col1">
        <div>
          <img src={imgimg} alt="register image" />
        </div>
      </div>
      <div className="col2">
        <div className="top_div">
          <div className="heading">Register</div>
          <div className="sub_heading">Become an authorized Blood bank</div>
          <div className="form_div">
            <input
              type="text"
              className="inp"
              placeholder="Enter your organization name"
            />
            <input type="text" className="inp" placeholder="Contact number" />
            <input type="text" className="inp" placeholder="Email address" />

            <div className="password_div">
              <input type="password" className="inp" placeholder="Password" />
              <input
                type="password"
                className="inp"
                placeholder="Confirm password"
              />
            </div>
            <div className="info">Enter the quantities of blood available(in litres)</div>
            <div className="bloodgroup1">
              <input type="text" className="inp" placeholder="A+" />
              <input type="text" className="inp" placeholder="B+" />
              <input type="text" className="inp" placeholder="AB+" />
              <input type="text" className="inp" placeholder="O+" />
            </div>
            <div className="bloodgroup1">
              <input type="text" className="inp" placeholder="A-" />
              <input type="text" className="inp" placeholder="B-" />
              <input type="text" className="inp" placeholder="AB-" />
              <input type="text" className="inp" placeholder="O-" />
            </div>
          </div>

          <div className="register">
            <button type="submit">Register</button>
          </div>
        </div>

        <div className="bottom_div">
          <a href="/login">Already have an account? Log in</a>
        </div>
      </div>
    </div>
  );
}

export default Register;
