import React from 'react';
import sb from './../../Images/SmartBill.jpeg';
import Navs from './Navs.js';
import {Link} from 'react-router-dom';
import Row from './../UtilityComponents/Row.js';
import Button from './../UtilityComponents/Button.js';

class ProductsList extends React.Component{
render(){
    this.state =['Summary','Users','Agents','Products'];
  return(
    <div className="dashboardWrapper">
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
                {this.state.map((name,key) => {
                  return <Link to={name} key={name+'_'+key} id={name+'_'+key} className="active col-3"><Navs  value={name}/></Link>
                })}
          </div>
          <form className="addUserFormWrapper">
          <div className="form-group row">
              <label className="userName col-4">Name</label>
              <input type="text" className="form-control userName col-7" id="userName"  ref = {(input) => { this.name = input; } }/>
              <label className="col-1"></label>
          </div>
          <div className="form-group row">
              <label className="Address col-4">Subscrition Type</label>
              <select className="custom-select col-7">
                <option defaultValue="Daily" value="Area1">Daily</option>
                <option value="Area2">Area 2</option>
                <option value="Area3">Area 3</option>
                <option value="Area4">Area 4</option>
                <option value="Area5">Area 5</option>
              </select>
              <label className="col-1"></label>
          </div>
          <div className="form-group row">
              <label className="userName col-4">Price   Monday</label>
              <input type="text" className="form-control userName col-7" id="userName"  ref = {(input) => { this.name = input; } }/>
              <label className="col-1"></label>
          </div>
          <div className="form-group row">
              <label className="userName col-4">Tuesday</label>
              <input type="text" className="form-control userName col-7" id="userName"  ref = {(input) => { this.name = input; } }/>
              <label className="col-1"></label>
          </div>
          <div className="form-group row">
              <label className="userName col-4">Wednesday</label>
              <input type="text" className="form-control userName col-7" id="userName"  ref = {(input) => { this.name = input; } }/>
              <label className="col-1"></label>
          </div>
          <div className="form-group row">
              <label className="userName col-4">Thursday</label>
              <input type="text" className="form-control userName col-7" id="userName"  ref = {(input) => { this.name = input; } }/>
              <label className="col-1"></label>
          </div>
          <div className="form-group row">
              <label className="userName col-4">Friday</label>
              <input type="text" className="form-control userName col-7" id="userName"  ref = {(input) => { this.name = input; } }/>
              <label className="col-1"></label>
          </div>
          <div className="form-group row">
              <label className="userName col-4">Saturday</label>
              <input type="text" className="form-control userName col-7" id="userName"  ref = {(input) => { this.name = input; } }/>
              <label className="col-1"></label>
          </div>
          <div className="form-group row">
              <label className="userName col-4">Sunday</label>
              <input type="text" className="form-control userName col-7" id="userName"  ref = {(input) => { this.name = input; } }/>
              <label className="col-1"></label>
          </div>
          <div className="row clearBoth bottom">
              <div className="col-2"></div>
              <div className="col-8">
              <button type="submit" className="btn btn-primary">Submit</button>
              </div>
              <div className="col-2"></div>
          </div>
          <div className="row clearBoth"></div>
          </form>
      </div>
  );
}
}
export default ProductsList;
