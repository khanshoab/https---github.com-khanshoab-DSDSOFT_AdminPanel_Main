import React from 'react'
import pic from "../img/profile.png";
import { useNavigate } from "react-router-dom";

export default function Return() {
    const navigate = useNavigate();
  return (
    <>
    <div className="content">
      <h2>Return</h2>
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
              <th scope="col" style={{ color: "black" }}>Order Id</th>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Product Price</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">#1345</th>
              <td>Bag</td>
              <td>10</td>
              <td>600</td>
            </tr>
            <tr>
              <th scope="row">#1345</th>
              <td>Bag</td>
              <td>10</td>
              <td>600</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}
