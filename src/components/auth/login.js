import React, {useState, useContext} from 'react';

import {POST} from './../../api/axios'

const Login = () => {

    let userNameElement = React.createRef();
    let passwordElement = React.createRef();


    let submitHandler = (event) => {
        event.preventDefault();
        const userName = userNameElement.current.value;
        const password = passwordElement.current.value;
        if (userName.trim().length === 0 || password.trim().length === 0) {
            return;
        }

        console.log(userName);
        console.log(password);

        POST(`${process.env.REACT_APP_BACKEND_HOST}/auth/login`, {password, userName},onLoginSuccess)

        /*if (!isLogin) {
            APP.POST(getCreateUserQuery(email, password), successCreateUserCallback, failureCreateUserCallback);
        } else {
            APP.POST(getLoginQuery(email, password), successLoginCallback, failureLoginCallback);
        }*/
    };

    const onLoginSuccess = (loginResponse) => {
        const jwt = loginResponse.token;
        localStorage.setItem("jwt", jwt);
        window.location.replace(`http://localhost:3000/${loginResponse.userName}/home`)

    };
    const onLoginFailure = () => {}


    return (
        <div className="auth">
            <div className="auth-context"> Enter Details to Login</div>
            <form onSubmit={submitHandler}>
                <div className="group">
                    <label htmlFor="email"> Username </label>
                    <input type="text" className="form-control" id="email" ref={userNameElement}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password"> Password </label>
                    <input type="password" className="form-control" id="password" ref={passwordElement}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};


export default Login
