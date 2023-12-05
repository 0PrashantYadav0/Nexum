import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Freelancers from './components/Freelancers';
import DisplayUserData from './components/DisplayUserData';
import AddNewUser from './components/AddNewUser';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Contactus from './components/Contactus';
import './App.css'

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/home" component={Home} />
          <Route path="/freelancing" component={Freelancers} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/add-new-user" component={AddNewUser} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/display-user-data" component={DisplayUserData} />
          <Route path="/contactus" component={Contactus} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
