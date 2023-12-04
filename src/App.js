import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Freelancers from './components/Freelancers';
import DisplayUserData from './components/DisplayUserData';
import AddNewUser from './components/AddNewUser';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Contactus from './components/Contactus';
import './App.css'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    const validCredentials = {
      username: "Prashant",
      password: "123456789"
    };

    if (username === validCredentials.username && password === validCredentials.password) {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <Router>
      <div className="App">
        {loggedIn && <Navbar />}
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Login {...props} handleLogin={(username, password) => handleLogin(username, password)} />
            )}
          />
          <Route path="/home" component={Home} />
          <Route path="/freelancing" component={Freelancers} />
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
