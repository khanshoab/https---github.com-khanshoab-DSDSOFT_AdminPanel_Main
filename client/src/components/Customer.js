import React from 'react'
import pic from "../img/profile.png";
import { useNavigate } from "react-router-dom";

export default function Customer() {
    const navigate = useNavigate();
  return (
    <>
    <div className="content">
      <h2>Customer</h2>
      <div className="d-flex justify-content-around">
        <div className="input-group">
          <input type="search" className="form-control" placeholder="Search here" aria-label="Search"
            aria-describedby="search-addon"
          />
          <span className="input-group-text border-0" id="search-addon">
            <i className="bi bi-search"></i>
          </span>
        </div>


        <div className="profile">
          <img src={pic} alt="" />
        </div>
      </div>

      <div class="table-responsive-lg">
        <table class="table">
          <thead>
            <tr style={{ backgroundColor: "white" }}>
              <th scope="col" style={{ color: "black" }}>Sr.no</th>
              <th scope="col">Code</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Mobile No</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>23200</td>
              <td>Rabiya Pangarkar</td>
              <td>Bhiwandi</td>
              <td>+91-987654321</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>23200</td>
              <td>Rabiya Pangarkar</td>
              <td>Bhiwandi</td>
              <td>+91-987654321</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>2357328</td>
              <td>Khan shoab</td>
              <td>Vasai</td>
              <td>+91-9872872323</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}
