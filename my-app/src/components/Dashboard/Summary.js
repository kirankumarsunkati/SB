import React from 'react';
import sb from './../../Images/SmartBill.jpeg';
import Navs from './Navs.js';
import {Link} from 'react-router-dom';
import Row from './../UtilityComponents/Row.js';

class Summary extends React.Component{
render(){
  this.state =['Summary','Users','Agents','Products'];

  return(
    <div className="dashboardWrapper">
          <div className="row topWrapper">
              <div className="col-3">
              </div>
              <div className="col-6">
                  <img src={sb} alt="sb" className="sblogo"/>
              </div>
              <div className="col-3">
              </div>
          </div>
          <div className="row dashboardContainer">
                {this.state.map( (name,key) => {
                  {{console.log(this.props,this.props.match.path.split('/'));}}
                  return <Link to={name} key={key} className="active"><Navs  value={name}/></Link>
                })}
          </div>
          <Row name={'Collections'} value={'July 2019'} isHeader={'true'}></Row>
          <Row name={'Monthly Total'} value={'367000'}></Row>
          <Row name={'Pending Amount'} value={'23423'}></Row>
          <Row name={'Subscriptions'} value={'July 2019'} isHeader={'true'}></Row>
          <Row name={'Total customer'} value={'23423'}></Row>
          <Row name={'Total Subsciptions'} value={'23423'}></Row>


      </div>
  );

}
}
export default Summary;
