import React,{useContext} from "react";
import "../Styles/login.css";
import imgimg from "../assets/img_login.png";
import { DemoContext } from "../contexts/democontext";

function Login() {
  const { contracts, setContracts } = useContext(DemoContext);
  const { account, setAccount } = useContext(DemoContext);
  return (
    <div className="main">
      <div className="left_div">
        <img src={imgimg} alt="Login Image" />
      </div>
      <div className="right_div">
        <div className="innerRightDiv">
          <div className="heading">Welcome Back!</div>
          <div className="subheading">Please enter your details to login</div>
          <div className="form_div">
            <div className="form_field">
              <input type="text" placeholder="Username" />
            </div>
            <div className="form_field">
              <input type="password" placeholder="Password" />
            </div>
          </div>
          <div className="login_btn">
            <button>Log in</button>
          </div>
          <div className="nav_like">
            <p>Don't have an account?</p>
            <a href="#" onClick={
              async ()=>{

               var res = await contracts.function.bankName().call();
                console.log(res);
              }
            }>Register here now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
