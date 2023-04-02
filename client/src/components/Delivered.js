import React from "react";
import pic from "../img/profile.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Delivered() {
  const navigate = useNavigate();
  return (
    <>
      <div class='content'>
      <h2>Orders</h2>
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
              <h5 className="card-title">Delivered</h5>
              <p className="card-text">2000</p>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            marginLeft: "7%",
            marginTop: "6%"
          }}
        >
          <Link to="/all_orders" style={{textDecoration:"None",paddingLeft:"2%",color:"black",fontWeight:"bold"}}>All Orders</Link>
          <Link to="/new_orders" style={{textDecoration:"None",paddingLeft:"12%",color:"black",fontWeight:"bold"}}>New Orders</Link>
          <Link to="/pending" style={{textDecoration:"None",paddingLeft:"14%",color:"black",fontWeight:"bold"}}>Pending</Link>
          <Link to="/delivered" style={{textDecoration:"None",paddingLeft:"16%",color:"black",fontWeight:"bold"}}>Delivered</Link>
        </div>
      

      <div className="table-responsive-lg">
        <table className="table" style={{marginTop:"1%"}}>
          <thead>
            <tr style={{ backgroundColor: "white" }}>
            <th scope="col" style={{ color: "black" }}>Order Id</th>
            <th scope="col">Date</th>
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
            <th scope="col">Product Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">#1345</th>
              <td>12-8-22</td>
              <td>Hp PC</td>
              <td>100</td>
              <td>160</td>
            </tr>
            <tr>
              <th scope="row">#1345</th>
              <td>12-8-22</td>
              <td>Hp PC</td>
              <td>100</td>
              <td>160</td>
            </tr>
            <tr>
              <th scope="row">#1345</th>
              <td>12-8-22</td>
              <td>Hp PC</td>
              <td>100</td>
              <td>160</td>
            </tr>
            <tr>
              <th scope="row">#1345</th>
              <td>12-8-22</td>
              <td>Hp PC</td>
              <td>100</td>
              <td>160</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}
