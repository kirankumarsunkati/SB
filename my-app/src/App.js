import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Test from './components/Test.js';
import Login from './components/Login/Login.js';
import UserRegistration from './components/UserRegistration/UserRegistration.js';
import ForgotPassword from './components/Login/ForgotPassword.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Summary from './components/Dashboard/Summary.js';
import Users from './components/Dashboard/Users.js';
import Agents from './components/Dashboard/Agents.js';
import Products from './components/Dashboard/Products.js';


function App() {
  return (
    <div className="App container-fluid">
        <Router>
            <div>
            <Route path='/Login' exact strict component={Login} />
            <Route path='/RegisterUser' exact strict component={UserRegistration}/>
            <Route path='/ForgotPassword' exact strict component={ForgotPassword}/>
                  <Route path='/Dashboard/Summary' exact strict component={Summary}/>
                  <Route path='/Dashboard/Users' exact strict component={Users}/>
                  <Route path='/Dashboard/Agents' exact strict component={Agents}/>
                  <Route path='/Dashboard/Products' exact strict component={Products}/>
            <Route path='/User' component={Test}/>
            </div>
        </Router>
    </div>
  );
}

export default App;
