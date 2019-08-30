import React from 'react';
import sb from './../../Images/SmartBill.jpeg';
import Navs from './Navs.js';
import {Link} from 'react-router-dom';
import Row from './../UtilityComponents/Row.js';

class Agents extends React.Component{
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
                {this.state.map( (name,key) => {
                  return <Link to={name} key={key} className="active col-3"><Navs  value={name}/></Link>
                })}
          </div>
          <div className="row borderTop">
              <div className="col-6 text-left">
                  Area
              </div>
              <div className="col-6 text-right noPadding">
                  <select className="custom-select">
                    <option defaultValue="Area1" value="Area1">Area 1</option>
                    <option value="Area2">Area 2</option>
                    <option value="Area3">Area 3</option>
                    <option value="Area4">Area 4</option>
                    <option value="Area5">Area 5</option>
                  </select>
              </div>
          </div>
          <Row name={'Raj Kumar1'} value={'3000'} noBorder={'true'}></Row>
          <Row name={'Raj Kumar2'} value={'2019'} noBorder={'true'}></Row>
          <Row name={'Raj Kumar3'} value={'0'} noBorder={'true'}></Row>
          <Row name={'Raj Kumar4'} value={'200'} noBorder={'true'}></Row>

          <div className="row clearBoth bottom">
              <div className="col-2"></div>
              <Link to={'addUser'}>
              <div className="col-8">
              <button type="submit" className="btn btn-primary">Add Agent</button>
              </div>
              </Link>
              <div className="col-2"></div>
          </div>
      </div>
  );

}
}
export default Agents;
