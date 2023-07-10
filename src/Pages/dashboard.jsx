import React, { useState } from "react";

import "../Styles/dashboard.css";

function Dashboard() {
  const [option, setOption] = useState(0);


  const CheckAvailability = () => {
    return (
      <table className="table">
        <tbody>
          <tr>
            <th>Blood Group</th>
            <th>Qty. in litres</th>
          </tr>
          <tr>
            <td>A+</td>
            <td>10</td>
          </tr>
          <tr>
            <td>A-</td>
            <td>9</td>
          </tr>
          <tr>
            <td>B+</td>
            <td>12</td>
          </tr>
          <tr>
            <td>B-</td>
            <td>11</td>
          </tr>
          <tr>
            <td>AB+</td>
            <td>12.3</td>
          </tr>
          <tr>
            <td>AB-</td>
            <td>10.3</td>
          </tr>
          <tr>
            <td>O+</td>
            <td>15</td>
          </tr>
          <tr>
            <td>O-</td>
            <td>5.4</td>
          </tr>
        </tbody>
      </table>
    );
  };

  const BloodDonated = () => {
    return (
      <div className="form_dash">
        <div>
          <input type="text" placeholder="Sender's Address" />
        </div>
        <div>
          <input type="text" placeholder="Receiver's Address" />
        </div>
        <div>
          <input type="text" placeholder="Receiver's Aadhar number" />
        </div>
        <div>
          <input type="text" placeholder="Blood Type" />
        </div>
        <div>
          <input type="text" placeholder="Quantity (in litres)" />
        </div>
        <div>
          <input type="text" placeholder="Phone number" />
        </div>

        <div>
          <input type="button" value="Commit Transaction" />
        </div>
      </div>
    );
  };

  const BloodReceived = () => {
    return (
      <div className="form_dash">
        <div>
          <input type="text" placeholder="Donor's Address" />
        </div>
        <div>
          <input type="text" placeholder="Donor's Aadhar" />
        </div>
        <div>
          <input type="text" placeholder="Blood Type" />
        </div>
        <div>
          <input type="text" placeholder="Quantity" />
        </div>
        <div>
          <input type="text" placeholder="Phone number" />
        </div>

        <div>
          <input type="button" value="Commit Transaction" />
        </div>
      </div>
    );
  };


  return (
    <div className="main">
      <div className="left_nav">
        <p>BloodChain</p>
        <div className="navigation_list">
          <div
            className={`nav_option ${option === 0 ? "nav_option_selected" : ""}`}
            onClick={() => {
              setOption(0);
            }}
          >
            <li>Blood availability</li>
          </div>
          <div
            className={`nav_option ${option === 1 ? "nav_option_selected" : ""}`}
            onClick={() => {
              setOption(1);
            }}
          >
            <li>Blood donated</li>
          </div>
          <div
            className={`nav_option ${option === 2 ? "nav_option_selected" : ""}`}
            onClick={() => {
              setOption(2);
            }}
          >
            <li>Blood received</li>
          </div>
          <div className="req_btn">
            <button type="submit">Request for blood</button>
          </div>
        </div>
      </div>
      <div className="right_display">
        {option == 0
          ? CheckAvailability()
          : option == 1
            ? BloodDonated()
            : option == 2
              ? BloodReceived()
              : null}
      </div>
    </div>
  );
}

export default Dashboard;

