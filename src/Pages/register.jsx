import React, { useContext, useState } from "react";
import "../Styles/register.css";
import imgimg from "../assets/img1.avif";
import { DemoContext } from "../contexts/democontext";
import Web3 from "web3";
import BloodBank from "../build/BloodBank.json";

function Register() {
  const { contracts, setContracts } = useContext(DemoContext);
  const { account, setAccount } = useContext(DemoContext);

  const [organization, setOrganization] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [ap, setAP] = useState("");
  const [bp, setBP] = useState("");
  const [abp, setABP] = useState("");
  const [op, setOP] = useState("");
  const [an, setAN] = useState("");
  const [bn, setBN] = useState("");
  const [abn, setABN] = useState("");
  const [on, setON] = useState("");

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
              onChange={(e) => {
                setOrganization(e.target.value);
              }}
              value={organization}
            />

            <input
              type="text"
              className="inp"
              placeholder="Contact number"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              value={number}
            />
            <input
              type="text"
              className="inp"
              placeholder="Email address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <div className="password_div">
              <input
                type="password"
                className="inp"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
              <input
                type="password"
                className="inp"
                placeholder="Confirm password"
                onChange={(e) => {
                  setcPassword(e.target.value);
                }}
                value={cpassword}
              />
            </div>
            <div className="bloodgroup1">
              <input
                type="text"
                className="inp"
                placeholder="A+"
                onChange={(e) => {
                  setAP(e.target.value);
                }}
                value={ap}
              />
              <input
                type="text"
                className="inp"
                placeholder="B+"
                onChange={(e) => {
                  setBP(e.target.value);
                }}
                value={bp}
              />
              <input
                type="text"
                className="inp"
                placeholder="AB+"
                onChange={(e) => {
                  setABP(e.target.value);
                }}
                value={abp}
              />
              <input
                type="text"
                className="inp"
                placeholder="O+"
                onChange={(e) => {
                  setOP(e.target.value);
                }}
                value={op}
              />
            </div>
            <div className="bloodgroup1">
              <input
                type="text"
                className="inp"
                placeholder="A-"
                onChange={(e) => {
                  setAN(e.target.value);
                }}
                value={an}
              />
              <input
                type="text"
                className="inp"
                placeholder="B-"
                onChange={(e) => {
                  setBN(e.target.value);
                }}
                value={bn}
              />
              <input
                type="text"
                className="inp"
                placeholder="AB-"
                onChange={(e) => {
                  setABN(e.target.value);
                }}
                value={abn}
              />
              <input
                type="text"
                className="inp"
                placeholder="O-"
                onChange={(e) => {
                  setON(e.target.value);
                }}
                value={on}
              />
            </div>
          </div>

          <div className="register">
            <button
              type="submit"
              onClick={async () => {
                const res = await contracts.methods
                  .addBank(
                    organization,
                    number,
                    parseInt(ap),
                    parseInt(bp),
                    parseInt(abp),
                    parseInt(op),
                    parseInt(an),
                    parseInt(bn),
                    parseInt(abn),
                    parseInt(on)
                  )
                  .send({
                    from: account[0],
                  });
                console.log(res);
              }}
            >
              Register
            </button>
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
