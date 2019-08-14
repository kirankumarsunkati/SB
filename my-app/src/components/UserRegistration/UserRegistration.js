import React from 'react';
import sb from './../../Images/SmartBill.jpeg';
import HelpText from './../UtilityComponents/HelpText.js';
import {userRegistrationMsg} from './../UtilityComponents/const.js';


class UserRegistration extends React.Component{
render(){
  return(
  <div className="userRegistrationWrapper">
            <div className="row">
            <p className="col-1"></p>
            <p className="logoWrapper col-3">
                <img src={sb} alt="sb" className="sblogo"/>
            </p>
            <p className="col-8"></p>
            </div>
            <div className="row">
            <p className="col-12 text-center applyBorder"><HelpText msg={userRegistrationMsg}/></p>
            </div>
            <div className="formWrapper">
                <form name="userRegisrationForm" id="userRegisrationForm">
                <div className="form-group">
                    <label className="userPIN">Enter PIN</label>
                    <input type="password" className="form-control userOtp" id="userPIN"  ref = {(input) => { this.otp = input; } } placeholder="Please Enter 4 digit OTP" onKeyUp={this.submitForm}/>
                </div>
				<div className="form-group">
                    <label className="reEnterPIN">Re Enter PIN</label>
                    <input type="password" className="form-control userOtp" id="reEnterPIN"  ref = {(input) => { this.otp = input; } } placeholder="Please Enter 4 digit OTP" onKeyUp={this.submitForm}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

      </div>
  );

}
}
export default UserRegistration;
