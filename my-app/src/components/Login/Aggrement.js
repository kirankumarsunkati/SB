import React from 'react';
import './login.css';
import {Redirect,Link} from 'react-router-dom';
import sb from './../../Images/SmartBill.jpeg';
import CAHeader from './../UtilityComponents/CAHeader.js';
import CAHeaderWithParagraph from './../UtilityComponents/CAHeaderWithParagraph.js';
class Aggrement extends React.Component{
  navigateToNewUser = () => {

  }
  submitForm = () => {

  }

render(){

    return (
      <div className="MainWrapper">
        <CAHeader Text="Customer Agreement" showCloseIcon = {'true'}/>
        <CAHeaderWithParagraph HeaderTitle="Customer Agreement" content = "Plase read this Vesdfrizsdfon Privacy policy"/>
        <CAHeaderWithParagraph content = "I Agree to this current asdfasdf I Agree to this current Vesdfrizon I Agree to this current Vesdfrizon I Agree to this current Vesdfrizon I Agree to this current Vesdfrizon I Agree to this current Versdfizon "/>
        <CAHeaderWithParagraph content = "I Agree to this current Veasdfrisadfasdzon I Agree to this current Vesdfrizon I Agree to this current Vesdfrizon I Agree to this current Vesdfrizon I Agree to this current Vsdferizon I Agree to this current Veasdfrizon I Agree to this current Veasdfrizon I Agree to this current Verasdfasdfizon"/>
      </div>

  );

}
}
export default Aggrement;
