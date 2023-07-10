import React, { useState } from "react";

import "../Styles/dashboard-admin.css";



function DashboardAdmin() {
  const [option, setOption] = useState(0);

  const transaction = () => {
    return (
      <table className="table_admin">
        <tbody>
          <tr onClick={()=>setOption(2)}>
            <th>Blood bank name</th>
            <th>Unique ID(UID)</th>
          </tr>
          <tr onClick={()=>setOption(2)}>
            <td>ABC blood bank</td>
            <td>3601</td>
          </tr>
          <tr onClick={()=>setOption(2)}>
            <td>Healthy blood bank</td>
            <td>9087</td>
          </tr>
          <tr onClick={()=>setOption(2)}>
            <td>Test ..</td>
            <td>6589</td>
          </tr>
  
        </tbody>
      </table>
    );
  };
  
  const availability = () => {
    return(
      <table className="table_admin">
        <tbody>
          <tr>
            <th>Blood bank name</th>
            <th>A+(in ltr.)</th>
            <th>B+(in ltr.)</th>
            <th>AB+(in ltr.)</th>
            <th>O+(in ltr.)</th>
            <th>A-(in ltr.)</th>
            <th>B-(in ltr.)</th>
            <th>AB-(in ltr.)</th>
            <th>O-(in ltr.)</th>
          </tr>
          <tr>
            <td>ABC</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        
          <tr>
            <td>Healthy Blood bank</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Test ..</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    )
  };
  
  const transaction_details = ()=>{
    return(
      <table className="table_admin">
        <tbody>
          <tr>
            
            <th>Transations</th>
          </tr>
          <tr>
            <td>ABC</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    )
  }

  return (
    <div className="main_admin">
      <div className="left_nav_admin">
        <div className="blood_bank_name_admin">BloodChain</div>
        <div className="navigation_list_admin">
          <div
            className={`nav_option_admin ${option == 0 ? "nav_option_selected_admin" : ""}`}
            onClick={() => {
              setOption(0);
            }}
          >
            <li>Blood bank data(Transactions)</li>
          </div>
          <div
            className={`nav_option_admin ${option == 1 ? "nav_option_selected_admin" : ""}`}
            onClick={() => {
              setOption(1);
            }}
          >
            <li>Blood bank data(Availability) </li>
          </div>
         
        </div>
        <div className="req_btn_admin">
          <button type="submit">Request for blood</button>
        </div>
      </div>
      <div className="right_display_admin">
        {option === 0
          ? transaction()
          : option === 1
          ? availability()
          : option===2
          ? transaction_details()
          :null}
      </div>
    </div>
  );
}

export default DashboardAdmin;
