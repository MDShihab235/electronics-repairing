import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CheckoutService from './components/CheckoutService/CheckoutService';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddEngineer from './components/AddEngineer/AddEngineer';
import { createContext, useState } from 'react';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <PrivateRoute path="/checkoutService">
            <CheckoutService/>
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/AddEngineer">
            <AddEngineer></AddEngineer>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
