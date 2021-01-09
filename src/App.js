import './App.css';
import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import Login from "./components/auth/login";
import SignUp from "./components/auth/signup";
import UserHome from "./components/user/user-home";
import AdminHome from "./components/admin/admin-home";


function App() {
  return (
    <div className="main-content">
        <Switch>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/signup">
                <SignUp />
            </Route>
            <Route exact path="/:userName/home">
                <UserHome />
            </Route>
            <Route exact path="/admin/:userName/home">
                <AdminHome/>
            </Route>
            <Route path="/">
                <Login />
            </Route>

        </Switch>
    </div>
  );
}

export default App;
