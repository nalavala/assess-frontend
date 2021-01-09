import React, {useState, useContext} from 'react';
import './auth.scss'
import {POST} from './../../api/axios'
import {
    Link,
    useRouteMatch,
} from "react-router-dom";
import env from "react-dotenv";
const SignUp = () => {


    let passwordElement = React.createRef();
    let userNameElement = React.createRef();

    const [signUpSuccess, setSignUpSuccess] = useState(false);


    const onSignUpSuccess = () => {
        setSignUpSuccess(true);
    };

    const onSignupFailure = () => {

    };

    let submitHandler = (event) => {
        event.preventDefault();
        const password = passwordElement.current.value;
        const userName = userNameElement.current.value;
        if ( password.trim().length === 0 || userName.trim().length === 0) {
            return;
        }


        console.log(password);

        POST(`${process.env.REACT_APP_BACKEND_HOST}/auth/signup`, {password, userName}, onSignUpSuccess, onSignupFailure);

    };


    return (
        <div className="auth">
            <div className="auth-context"> Create Account</div>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="userName"> userName </label>
                    <input type="text" className="form-control" id="userName" ref={userNameElement}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password"> Password </label>
                    <input type="password" className="form-control" id="password" ref={passwordElement}/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
            {signUpSuccess && <div> Click here to <Link to={`/login`}>login</Link></div>}
        </div>
    );
};


export default SignUp
