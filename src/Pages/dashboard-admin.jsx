import React, { useState } from "react";

import "../Styles/dashboard-admin.css";

const CheckAvailability = () => {
  return (
    <table className="table">
      <tbody>
        <tr>
          <th>Blood bank names</th>
          <th>Unique ID(UID)</th>
        </tr>
        <tr>
          <td>A+</td>
          <td>0</td>
        </tr>
      </tbody>
    </table>
  );
};

const RequestPending = () => {
  return <h1> hello </h1>;
};

const TransactionRecord = () => {
  return <h2>Hello</h2>;
};

function DashboardAdmin() {
  const [option, setOption] = useState("0");

  return (
    <div className="main">
      <div className="left_nav">
        <div className="blood_bank_name">HemoTrack</div>
        <div className="navigation_list">
          <div
            className={`nav_option ${option == 0 ? "nav_option_selected" : ""}`}
            onClick={() => {
              setOption(0);
            }}
          >
            <li>Blood availability</li>
          </div>
          <div
            className={`nav_option ${option == 1 ? "nav_option_selected" : ""}`}
            onClick={() => {
              setOption(1);
            }}
          >
            <li>Pending Blood Request </li>
          </div>
          <div
            className={`nav_option ${option == 2 ? "nav_option_selected" : ""}`}
            onClick={() => {
              setOption(2);
            }}
          >
            <li>Request for blood</li>
          </div>
        </div>
        <div className="req_btn">
          <button type="submit">Request for blood</button>
        </div>
      </div>
      <div className="right_display">
        {option == 0
          ? CheckAvailability()
          : option == 1
          ? RequestPending()
          : option == 2
          ? TransactionRecord()
          : null}
      </div>
    </div>
  );
}

export default DashboardAdmin;
