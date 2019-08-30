import React from 'react';
import sb from './../../Images/SmartBill.jpeg';
import Navs from './Navs.js';
import {Link} from 'react-router-dom';
import Row from './../UtilityComponents/Row.js';

class AddUser extends React.Component{
render(){
  this.state =['Summary','Users','Agents','Products'];
  return(
    <div className="addUserWrapper">
    <div className="row topWrapper">
        <div className="col-1">
        </div>
        <div className="col-10">
          <Link to="/Summary"><img src={sb} alt="sb" className="sblogo"/></Link>
         </div>
        <div className="col-1">
        </div>
    </div>
    <div className="row dashboardContainer">
          {this.state.map( (name,key) => {
            return <Link to={name} key={key} className="active col-3"><Navs  value={name}/></Link>
          })}
    </div>
      <form className="addUserFormWrapper">
      <div className="form-group row">
          <label className="userName col-4">Name</label>
          <input type="text" className="form-control userName col-7" id="userName"  ref = {(input) => { this.name = input; } }/>
          <label className="col-1"></label>
      </div>
      <div className="form-group row">
          <label className="mobileNumber col-4">Mobile Number</label>
          <input type="text" className="form-control mobileNumber col-7" id="mobileNumber"  ref = {(input) => { this.mobileNumber = input; } }/>
          <label className="col-1"></label>
      </div>
      <div className="form-group row">
          <label className="Email col-4">Email</label>
          <input type="text" className="form-control Email col-7" id="Email"  ref = {(input) => { this.Email = input; } }/>
          <label className="col-1"></label>
      </div>
      <div className="form-group row">
          <label className="Address col-4">Address</label>
          <input type="text" className="form-control Address col-7" id="Address"  ref = {(input) => { this.Address = input; } }/>
          <label className="col-1"></label>
      </div>
      <div className="form-group row">
          <label className="Address col-4">Area</label>
          <select className="custom-select col-7">
            <option defaultValue="Area1" value="Area1">Area 1</option>
            <option value="Area2">Area 2</option>
            <option value="Area3">Area 3</option>
            <option value="Area4">Area 4</option>
            <option value="Area5">Area 5</option>
          </select>
          <label className="col-1"></label>
      </div>
      <div className="form-group row">
          <label className="Agent col-4">Agent</label>
          <select className="custom-select col-7">
            <option defaultValue="Agent1" value="Agent1">Agent 1</option>
            <option value="Agent2">Agent 2</option>
            <option value="Agent3">Agent 3</option>
            <option value="Agent4">Agent 4</option>
            <option value="Agent5">Agent 5</option>
          </select>
          <label className="col-1"></label>
      </div>
      <div className="form-group row">
          <label className="startDate col-4">Start Date</label>
          <input type="text" className="startDate col-7"></input>
          <label className="col-1"></label>
      </div>
      <div className="form-group row">
          <label className="openingBalance col-4">Opening Balance</label>
          <input type="radio" className="startDate col-1"></input>
          <label className="oustanding col-2"> Outstanding</label>
          <input type="radio" className="startDate col-1"></input>
          <label className="oustanding col-2"> Advance</label>
          <label className="col-1"></label>
      </div>
      <div className="form-group row">
          <label className="billType col-4">Bill Type</label>
          <input type="radio" className="startDate col-1"></input>
          <label className="prepaid col-2"> Prepaid</label>
          <input type="radio" className="startDate col-1"></input>
          <label className="postpaid col-2"> Postpaid</label>
          <label className="col-1"></label>
      </div>
      <div className="form-group row">
          <label className="product col-4">Product</label>
          <select className="custom-select col-7">
            <option defaultValue="Andhara jyothy" value="Andhara jyothy">Andhara Jyothy</option>
            <option value="Agent2">Agent 2</option>
            <option value="Agent3">Agent 3</option>
            <option value="Agent4">Agent 4</option>
            <option value="Agent5">Agent 5</option>
          </select>
          <label className="col-1"></label>
      </div>
      <div className="form-group row">
          <label className="auantity col-4">Quantity</label>
          <select className="custom-select col-7">
            <option defaultValue="1" value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label className="col-1"></label>
      </div>
      <button type="submit" className="btn btn-primary bottom">Submit</button>

      </form>
      </div>
  );

}
}
export default AddUser;
