import React from 'react';
import sb from './../../Images/SmartBill.jpeg';
import Navs from './Navs.js';
import {Link} from 'react-router-dom';
import Row from './../UtilityComponents/Row.js';

class AddUser extends React.Component{
render(){
  return(
    <div className="addUserWrapper">
      <form class="form-inline">

        <div class="form-group row">
            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
            <div class="col-sm-10">
              <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm"/>
            </div>
      </div>

      </form>
      </div>
  );

}
}
export default AddUser;
