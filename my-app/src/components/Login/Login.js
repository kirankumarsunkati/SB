import React from 'react';
import './login.css';
import {Redirect,Link} from 'react-router-dom';
import sb from './../../Images/SmartBill.jpeg';

class Test extends React.Component{
  navigateToNewUser = () => {
        console.log('asdf');
        return <Redirect to ='/RegisterUser'/>
  }
  submitForm = () => {
    console.log('onkeyup', this.otp.value);
    let password = this.otp.value;
      if(password.length === 4){
          this.props.history.push("/Dashboard/Summary");
      }
  }

render(){

    return (
      <div className="loginWrapper">
            <div className="row">
            <p className="col-2"></p>
            <p className="logoWrapper col-8">
                {/*<img src={sb} alt="sb" className="sblogo"/>*/}
            </p>
            <p className="col-2"></p>
            </div>
            <div className="row">
            <p className="col-4"></p>
            <p className="col-4 text-center"></p>
            <p className="col-4"></p>
            </div>
            <div className="formWrapper">
                <form name="userLoginForm" id="userLogin">
                <div className="form-group">
                    <label className="userOtp">Login</label>
                    <input type="password" className="form-control userOtp" id="userOtp"  ref = {(input) => { this.otp = input; } } placeholder="Please Enter 4 digit PIN" onKeyUp={this.submitForm}/>
                </div>

                <div className="loginFormFooter row">
                    <Link className="col-7 text-left" to="/RegisterUser">New User, Register Here</Link>
                    <Link className="col-5 text-Right" to="/ForgotPassword">Forgot Password</Link>
                </div>
                </form>
            </div>

      </div>

  );

}
}
export default Test;
