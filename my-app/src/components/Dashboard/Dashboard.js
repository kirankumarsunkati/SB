import React from 'react';
import sb from './../../Images/SmartBill.jpeg';
import Navs from './Navs.js';
class Dashboard extends React.Component{
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
                return <Navs key={key} value={name}/>
              })}
        </div>
  </div>
  );

}
}
export default Dashboard;
