/* eslint-disable no-undef */
import React from "react";
import pic from "../img/profile.png";
import { useNavigate } from "react-router-dom";
export default function Product(props) {
  const navigate = useNavigate();
  return (
    <>
    <div className="content">
      <h2>{props.title}</h2>
      <div className="d-flex justify-content-around">
        <div className="input-group">
          <input type="search" className="form-control" placeholder="Search here" aria-label="Search"
            aria-describedby="search-addon"
          />
          <span className="input-group-text border-0" id="search-addon">
            <i className="bi bi-search"></i>
          </span>
  
        </div>

        <div className="add-icon">
          <button
            style={{ backgroundColor: "#f59359"}}
            type="button"
            onClick={() => {
              navigate("/productForm");
            }}>
            <i className="bi bi-plus"></i>Add Item
          </button>
        </div>

        <div className="profile">
          <img src={pic} alt="" />
        </div>
      </div>

      <div className="table-responsive-lg">
        <table className="table">
          <thead>
            <tr style={{ backgroundColor: "white" }}>
              <th scope="col" style={{ color: "black" }}>
                Barcode
              </th>
              <th scope="col">Stock</th>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">VOM</th>
              <th scope="col">Price</th>
              <th scope="col">Discount</th>
              <th scope="col">Total Price</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">#1345</th>
              <td>12-8-22</td>
              <td>Hp PC</td>
              <td>100</td>
              <td>160</td>
              <td>6000</td>
              <td>10%</td>
              <td>6000</td>
              <td><i className="bi bi-pencil-square" style={{color:"blue"}}></i></td>
              <td><i className="bi bi-archive-fill" style={{color:"red"}}></i></td>
            </tr>
            <tr>
              <th scope="row">#1000</th>
              <td>22-8-22</td>
              <td>Sofa</td>
              <td>10</td>
              <td>200</td>
              <td>40,000</td>
              <td>50%</td>
              <td>20,000</td>
              <td><i className="bi bi-pencil-square" style={{color:"blue"}}></i></td>
              <td><i className="bi bi-archive-fill" style={{color:"red"}}></i></td>
            </tr>
            <tr>
              <th scope="row">#1000</th>
              <td>22-8-22</td>
              <td>Sofa</td>
              <td>10</td>
              <td>200</td>
              <td>40,000</td>
              <td>50%</td>
              <td>20,000</td>
              <td><i className="bi bi-pencil-square" style={{color:"blue"}}></i></td>
              <td><i className="bi bi-archive-fill" style={{color:"red"}}></i></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}
