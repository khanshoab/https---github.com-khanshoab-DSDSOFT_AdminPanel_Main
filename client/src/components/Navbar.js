import React from "react";
import pic from "../img/logo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <img src={pic} alt="" />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginLeft: "50px",
          }}
        >
          <Link to="/loginpage">
            <i className="bi bi-stack">&nbsp;&nbsp;&nbsp;LoginPage</i>
          </Link>
          <Link to="/registerpage">
            <i className="bi bi-stack">&nbsp;&nbsp;&nbsp;RegisterPage</i>
          </Link>
          <Link to="/product">
            <i className="bi bi-stack">&nbsp;&nbsp;&nbsp;Product</i>
          </Link>
          <Link to="/orders">
            <i className="bi bi-cart-fill">&nbsp;&nbsp;&nbsp;Orders</i>
          </Link>
          <Link to="/payments">
            <i className="bi bi-cash-stack">&nbsp;&nbsp;&nbsp;Payments</i>
          </Link>
          <Link to="/customers">
            <i className="bi bi-people">&nbsp;&nbsp;&nbsp;Customers</i>
          </Link>
          <Link to="#stock_report">
            <i className="bi bi-bar-chart-line">
              &nbsp;&nbsp;&nbsp;Stock Report
            </i>
          </Link>
          <Link to="#sales_summary">
            <i className="bi bi-graph-up">&nbsp;&nbsp;&nbsp;Sales Summary</i>
          </Link>
          <Link to="/returns">
            <i className="bi bi-arrow-return-left">&nbsp;&nbsp;&nbsp;Returns</i>
          </Link>
        </div>
      </div>
    </>
  );
}
