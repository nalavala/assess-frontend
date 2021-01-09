import UserForm from "./user-form";
import React, {useEffect, useState} from 'react'
import {GET} from './../../api/axios';
import {useParams} from "react-router-dom";

const UserHome = () => {

    let {userName} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        GET(`${process.env.REACT_APP_BACKEND_HOST}/user/${userName}`, onGetUserSuccess, onGetUserFailure)
    }, [userName]);


    const onGetUserSuccess = (user) => {
        setUser(user);
    };

    const onGetUserFailure = (error) => {

    };


    const updateUser = (user) => {
        setUser(user)
    };


    const getView = () => {
        if (user) {
            return <UserForm user={user} userName={userName} updateUser={updateUser}/>
        } else {
            return <div>
                <h3>No User Found</h3>
            </div>
        }
    }

    return getView()

};

export default UserHome;
