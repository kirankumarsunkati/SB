import React from 'react';
import sb from './../../Images/SmartBill.jpeg';
import Navs from './Navs.js';
import {Link} from 'react-router-dom';
import Row from './../UtilityComponents/Row.js';

class Users extends React.Component{
render(){
    this.state =['Summary','Users','Agents','Products'];
  return(
    <div className="dashboardWrapper">
          <div className="row topWrapper">
              <div className="col-3">
              </div>
              <div className="col-6">
{/*<img src={sb} alt="sb" className="sblogo"/>*/}              </div>
              <div className="col-3">
              </div>
          </div>
          <div className="row dashboardContainer">
                {this.state.map( (name,key) => {
                  {{console.log(this.props,this.props.match.path.split('/'));}}
                  return <Link to={name} key={key} className="active"><Navs  value={name}/></Link>
                })}
          </div>
          <div className="row">
              <div className="col-6 text-left noPadding">
                  <select class="custom-select">
                    <option selected value="Area1">Area 1</option>
                    <option value="Area2">Area 2</option>
                    <option value="Area3">Area 3</option>
                    <option value="Area4">Area 4</option>
                    <option value="Area5">Area 5</option>
                  </select>
              </div>
              <div className="col-6 text-right noPadding">
                <select class="custom-select">
                  <option selected value="Agent1">Agent 1</option>
                  <option value="Agent2">Agent 2</option>
                  <option value="Agent3">Agent 3</option>
                  <option value="Agent4">Agent 4</option>
                  <option value="Agent5">Agent 5</option>
                </select>
              </div>
          </div>
          <Row name={'Rajeev Kumar'} value={'350'}></Row>
          <Row name={'Rajeev Kuma2'} value={'10'}></Row>
          <Row name={'Rajeev Kuma4'} value={'210'}></Row>
          <Row name={'Rajeev Kuma5'} value={'0'}></Row>
          <Row name={'Total Pening'} value={'1500'}></Row>


          <Link to={'addUser'}><button type="submit" className="btn btn-primary bottom">Add User</button></Link>
      </div>
  );

}
}
export default Users;
