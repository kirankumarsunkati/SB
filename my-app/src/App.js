import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Test from './components/Test.js';
import Login from './components/Login/Login.js';
import UserRegistration from './components/UserRegistration/UserRegistration.js';
import ForgotPassword from './components/Login/ForgotPassword.js';
import Dashboard from './components/Dashboard/Dashboard.js';


function App() {
  return (
    <div className="App container-fluid">
        <Router>
            <div>
            <Route path='/Login' exact strict component={Login} />
            <Route path='/RegisterUser' exact strict component={UserRegistration}/>
            <Route path='/ForgotPassword' exact strict component={ForgotPassword}/>
            <Route path='/Dashboard' exact strict component={Dashboard}/>
            
            <Route path='/User' component={Test}/>
            </div>
        </Router>
    </div>
  );
}

export default App;
