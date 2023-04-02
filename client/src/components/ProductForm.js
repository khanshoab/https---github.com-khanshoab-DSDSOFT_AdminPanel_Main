import React from 'react'
import pic from "../img/profile.png";
import { useNavigate } from "react-router-dom";

export default function ProductForm() {
  const navigate = useNavigate();
  return (
    <>
    <div className='content'>
      <h2>Product Form</h2>
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

      <form>
        <div className="form-group">
          <label for="inputBarcode">Barcode:
          <input style={{height: "40px",width: "860px", marginBottom: "15px"}} type="text" className="form-control" id="inputBarcode" />
          </label>
        </div>

      
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputStock"> 
            <p className='input-label1'>Stock :</p>
            <input style={{height: "40px",width: "400px" ,marginBottom: "15px"}} type="text" className="form-control" id="inputStock" />
            </label>
            <label for="inputQuantity" >
            <p className='input-label2'>Quantity :</p>
            <input style={{height: "40px",width: "430px", marginLeft : "30px",marginBottom: "15px"}} type="text" className="form-control" id="inputQuantity"/>
            </label>
          </div>
          <div className="form-group col-md-6">
            <label for="inputUOM"> 
            <p className='input-label1'>UOM :</p>
            <input style={{height: "40px",width: "400px" ,marginBottom: "15px"}} type="text" className="form-control" id="inputStock" />
            </label>
            <label for="inputPrice">
            <p className='input-label2'>Price :</p>
            <input style={{height: "40px",width: "430px", marginLeft : "30px",marginBottom: "15px"}} type="text" className="form-control" id="inputQuantity"/>
            </label>
          </div>

          <div className="form-group">
            <label for="inputDiscount">Discount:
            <input style={{height: "40px",width: "860px", marginBottom: "15px"}} type="text" className="form-control" id="inputBarcode" />
          </label>
        </div>
        <div className="form-group">
          <label for="inputAmount">Total Amount :
          <input style={{height: "40px",width: "860px", marginBottom: "15px"}} type="text" className="form-control" id="inputBarcode" />
          </label>
        </div>
          
        </div>
          
    
      </form>
      <button style={{backgroundColor:"#f59359"}} 
      onClick={() => {
        navigate("/product");
      }}
      type="submit" className="btn btn-primary">Add</button>
      
    </div>
  </>
  )
}
