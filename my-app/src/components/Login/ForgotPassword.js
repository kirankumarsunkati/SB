import React from 'react';
import sb from './../../Images/SmartBill.jpeg';
import HelpText from './../UtilityComponents/HelpText.js';
import {forgotPassword} from './../UtilityComponents/const.js';

class ForgotPassword extends React.Component{
render(){
  return(
  <div className="forgotPasswordWrapper">
            <div className="row">
            <p className="col-1"></p>
            <p className="logoWrapper col-3">
                {/*<img src={sb} alt="sb" className="sblogo"/>*/}
            </p>
            <p className="col-8"></p>
            </div>
            <div className="row">
            <p className="col-12 text-center applyBorder helpTextMainWrapper"><HelpText msg={forgotPassword}/></p>
            </div>
            <div className="formWrapper">
                <form name="forGotPassword" id="forGotPassword">
                <div className="form-group">
                    <label className="userOtp">Enter OTP</label>
                    <input type="password" className="form-control userOtp" id="userOtp"  ref = {(input) => { this.otp = input; } } placeholder="Please Enter 4 digit OTP" onKeyUp={this.submitForm}/>
                </div>

                <button type="submit" className="btn btn-primary bottom">Next</button>
                </form>
            </div>

      </div>
  );

}
}
export default ForgotPassword;
