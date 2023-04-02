import React from 'react'
import pic from "../img/profile.png";
import { useNavigate } from "react-router-dom";

export default function Payment() {
    const navigate = useNavigate();
  return (
    <>
      <div class='content'>
      <h2>Payment</h2>
      <div className="d-flex justify-content-around top-nav">
        <div className="input-group">
          <input type="search" className="form-control" placeholder="Search here" aria-label="Search" aria-describedby="search-addon"/>
          <span className="input-group-text border-0" id="search-addon">
            <i className="bi bi-search"></i>
          </span>
        </div>


        <div className="profile">
          <img src={pic} alt="" />
        </div>
      </div>
      <div className="container" style={{marginLeft:"7%",maxWidth:"80%",marginTop:"3%"}}>
      <div className="row">
        <div className="col-sm-4">
          <div className ="card" style={{backgroundColor:"#f4f4f4"}}>
            <div className="card-body">
              <h5 className="card-title">New Orders</h5>
              <p className="card-text">45</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className ="card" style={{backgroundColor:"#f4f4f4"}}>
            <div className="card-body">
              <h5 className="card-title">Pending</h5>
              <p className="card-text">16</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card" style={{backgroundColor:"#f4f4f4"}}>
            <div className="card-body">
              <h5 className="card-title">Total Amount</h5>
              <p className="card-text">2,000</p>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="table-responsive-lg">
        <table className="table">
          <thead>
            <tr style={{ backgroundColor: "white" }}>
            <th scope="col" style={{ color: "black" }}>Payment Id</th>
            <th scope="col">Date</th>
            <th scope="col">Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">#1345</th>
              <td>8-8-22</td>
              <td>Rabiya Pangarkar</td>
              <td>12,000</td>
              <td style={{color:"green"}}>Completed</td>
            </tr>
            <tr>
              <th scope="row">#1346</th>
              <td>7-4-22</td>
              <td>Uzair Pangarkar</td>
              <td>16,000</td>
              <td style={{color:"red"}}>Pending</td>
            </tr>
            <tr>
              <th scope="row">#1345</th>
              <td>16-5-22</td>
              <td>Uzaif Pangarkar</td>
              <td>20,000</td>
              <td style={{color:"green"}}>Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  
  )
}
