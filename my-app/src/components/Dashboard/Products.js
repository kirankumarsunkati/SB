

import React from 'react';
import sb from './../../Images/SmartBill.jpeg';
import Navs from './Navs.js';
import {Link} from 'react-router-dom';
import Row from './../UtilityComponents/Row.js';
import Button from './../UtilityComponents/Button.js';

class ProductsList extends React.Component{
  routeToAddProdcuts = () => {
    this.props.history.push("/Dashboard/AddProducts");

  }
  returnSubRoutes = () =>{
    this.props.history.push("/Dashboard/ProductsList");
  }
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
          <span onClick={this.returnSubRoutes}><Row name={'Andhra Jyothi'} value={'500'} noBorder={'true'}></Row></span>
          <span onClick={this.returnSubRoutes}><Row name={'Times of india'} value={'300'} noBorder={'true'}></Row></span>
          <span onClick={this.returnSubRoutes}><Row name={'Eenadu'} value={'800'} noBorder={'true'}></Row></span>
          <div className="row clearBoth bottom">
              <div className="col-2"></div>
              <div className="col-8">
              <button type="submit" className="btn btn-primary" onClick={this.routeToAddProdcuts}>Add Product</button>
              </div>
              <div className="col-2"></div>
          </div>
          <div className="row clearBoth"></div>
      </div>
  );
}
}
export default ProductsList;
