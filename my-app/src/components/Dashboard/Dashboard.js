import React from 'react';
import sb from './../../Images/SmartBill.jpeg';
import Navs from './Navs.js';
import {Link} from 'react-router-dom';
class Dashboard extends React.Component{
render(){
  this.state =['Summar2y','Users','Agents','Products'];
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
                {{console.log(this.props);}}
                return <Link to={this.props.match.path.split('/')[1]+'/'+name} key={key}><Navs  value={name}/></Link>
              })}
        </div>

  </div>
  );

}
}
export default Dashboard;
