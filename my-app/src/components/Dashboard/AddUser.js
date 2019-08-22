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
      <form class="form-inline">

        <div class="form-group row">
            <label for="agentName" class="col-5 col-form-label col-form-label-sm">Name</label>
            <div class="col-7">
              <input type="text" class="form-control form-control-sm" id="agentName" placeholder="col-form-label-sm"/>
            </div>
      </div>
      <div class="form-group row">
          <label for="mobileNumber" class="col-5 col-form-label col-form-label-sm">Mobile Number</label>
          <div class="col-7">
            <input type="number" class="form-control form-control-sm" id="mobileNumber" placeholder="col-form-label-sm"/>
          </div>
      </div>
      <div class="form-group row">
          <label for="userEmail" class="col-5 col-form-label col-form-label-sm">Area</label>
          <div class="col-7">
          <select className="custom-select">
            <option defaultValue="Area1" value="Area1">Area 1</option>
            <option value="Area2">Area 2</option>
            <option value="Area3">Area 3</option>
            <option value="Area4">Area 4</option>
            <option value="Area5">Area 5</option>
          </select>
          </div>
      </div>
      <div class="form-group row">
      <label for="userEmail" className="col-5 col-form-label col-form-label-sm">Permissions</label>
      <div className="col-7">
          <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck"/>
          <label className="form-check-label" for="disabledFieldsetCheck">
    Cant check this
  </label>
  </div><div className="col-7">
      <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck"/>
      <label className="form-check-label" for="disabledFieldsetCheck">
Cant check this
</label>
</div><div className="col-7">
    <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck"/>
    <label className="form-check-label" for="disabledFieldsetCheck">
Cant check this
</label>
</div><div className="col-7">
    <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck"/>
    <label className="form-check-label" for="disabledFieldsetCheck">
Cant check this
</label>
</div>

          </div>
      </form>
      </div>
  );

}
}
export default AddUser;
