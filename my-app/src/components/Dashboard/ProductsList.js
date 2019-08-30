

import React from 'react';
import sb from './../../Images/SmartBill.jpeg';
import Navs from './Navs.js';
import {Link} from 'react-router-dom';
import Row from './../UtilityComponents/Row.js';
import Button from './../UtilityComponents/Button.js';

class Products extends React.Component{
render(){
    this.state =['Summary','Users','Agents','Products'];
  return(
    <div className="dashboardWrapper">
          <div className="row topWrapper">
              <div className="col-1">
              </div>
              <div className="col-10">
                <img src={sb} alt="sb" className="sblogo"/>
              </div>
              <div className="col-1">
              </div>
          </div>
          <div className="row dashboardContainer">
                {this.state.map((name,key) => {
                  return <Link to={name} key={name+'_'+key} id={name+'_'+key} className="active col-3"><Navs  value={name}/></Link>
                })}
          </div>
          <Row name={'Name'} value={'Andhra Jyothi'} noBorder={'true'}></Row>
          <Row name={'Subsciptions Type'} value={'Daily'} noBorder={'true'}></Row>
          <Row name={'Price'} noBorder={'true'}></Row>
          <Row name={'Monday'} value={'3'} noBorder={'true'}></Row>
          <Row name={'Tuesday'} value={'3'} noBorder={'true'}></Row>
          <Row name={'Wednesday'} value={'3'} noBorder={'true'}></Row>
          <Row name={'Thrusday'} value={'3'} noBorder={'true'}></Row>
          <Row name={'Friday'} value={'3'} noBorder={'true'}></Row>
          <Row name={'Saturday'} value={'3'} noBorder={'true'}></Row>
          <Row name={'Sunday'} value={'3'} noBorder={'true'}></Row>
          <div className="row clearBoth">
              <div className="col-2"></div>
              <div className="col-4">
              <button type="submit" className="btn btn-primary">Edit</button>
              </div>
              <div className="col-4">
              <button type="submit" className="btn btn-primary">Delete</button>
              </div>
              <div className="col-2"></div>
          </div>
          <div className="row clearBoth"></div>
      </div>
  );
}
}
export default Products;
