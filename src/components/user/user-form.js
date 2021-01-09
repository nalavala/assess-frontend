import React, {useState, useContext} from 'react';
import './user.scss'
import {PUT} from './../../api/axios'
import endpointsHelper from './../../helper/endpoints';

const UserForm = ({user, userName, updateUser}) => {

    let firstNameElement = React.createRef();
    let lastNameElement = React.createRef();
    let addressElement = React.createRef();
    let telephoneNoElement = React.createRef();
    let ssnElement = React.createRef();


    let submitHandler = (event) => {
        event.preventDefault();
        const firstName = firstNameElement.current.value;
        const lastName = lastNameElement.current.value;
        const address = addressElement.current.value;
        const telephone = telephoneNoElement.current.value;
        const ssn = ssnElement.current.value;
        if (firstName.trim().length === 0 || lastName.trim().length === 0 || ssn.trim().length === 0) {
            return;
        }

        console.log({firstName, lastName,address,telephone,ssn, userName});

        const request = {firstName, lastName,address,telephone,ssn, userName};
        PUT(`${process.env.REACT_APP_BACKEND_HOST}/user/${userName}`, request,onSaveUserSuccess, onSaveUserFailure)

    };


    const onSaveUserSuccess = (user) => {
        updateUser(user);
    };

    const onSaveUserFailure = () => {

    };




    return (
        <div className="user-details">
            <div className="desc"> Fill User Details</div>
            <form className="user-form" onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="first-name"> First Name </label>
                    <input type="text" id="first-name" value={user.firstName} ref={firstNameElement}/>
                </div>
                <div className="form-group">
                    <label htmlFor="last-name"> Last Name </label>
                    <input type="text" id="last-name" value={user.lastName} ref={lastNameElement}/>
                </div>
                <div className="form-group">
                    <label htmlFor="tele-no"> Telephone Number </label>
                    <input type="number" id="tele-no" value={user.telephone} ref={telephoneNoElement}/>
                </div>
                <div className="form-group">
                    <label htmlFor="address"> Address </label>
                    <textarea type="text" id="address" value={user.address} ref={addressElement}/>
                </div>
                <div className="form-group">
                    <label htmlFor="ssn"> SSN </label>
                    <input type="text" id="ssn" value={user.ssn} ref={ssnElement}/>
                </div>
                <div className="form-action">
                    <button className="btn" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};


export default UserForm
