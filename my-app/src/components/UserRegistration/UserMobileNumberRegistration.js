import React from 'react';
import sb from './../../Images/SmartBill.jpeg';
import HelpText from './../UtilityComponents/HelpText.js';
import {userRegistrationMobileMsg} from './../UtilityComponents/const.js';


class UserMobileNumberRegistration extends React.Component{
  setMpinPage = () =>{
    console.log('setmpin function called');
    this.props.history.push("/RegisterUser");
  }
render(){
  return(
  <div className="UserMobileNumberRegistrationWrapper">
            <div className="row">
            <p className="col-1"></p>
            <p className="logoWrapper col-3">
                <img src={sb} alt="sb" className="sblogo"/>
            </p>
            <p className="col-8"></p>
            </div>
            <div className="row">
            <p className="col-2"></p>
            <p className="col-8 text-center applyBorder helpTextWrapperMain"><HelpText msg={userRegistrationMobileMsg}/></p>
            <p className="col-2"></p>
            </div>
            <div className="formWrapper">
                <form name="userRegisrationFormMobile" id="userRegisrationFormMobile">
				        <div className="form-group">
                    <label className="mobileNumber">Enter Mobile Number</label>
                    <input type="text" className="form-control userMobileNumber" id="mobileNumber"  ref = {(input) => { this.mobileNumber = input; } } placeholder="Please Enter 10 digit Mobile Number" onKeyUp={this.submitMobileNumber}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.setMpinPage}>Submit</button>
                </form>
            </div>

      </div>
  );

}
}
export default UserMobileNumberRegistration;
