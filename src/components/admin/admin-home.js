
import React, {useEffect, useState} from 'react'
import {GET} from './../../api/axios';
import {useParams} from "react-router-dom";
import UserList from "../user/users-list";

const AdminHome = () => {

    let {userName} = useParams();
    const [user, setUser] = useState(null);
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        GET(`${process.env.REACT_APP_BACKEND_HOST}/auth/${userName}`, onGetUserSuccess, onGetUserFailure)
    }, [userName]);


    const onGetUserSuccess = (user) => {
        setUser(user);
        GET(`${process.env.REACT_APP_BACKEND_HOST}/user/query`, onGetUsersSuccess)
    };


    const onGetUsersSuccess = (users) => {
        setUserList(users)
    };
    const onGetUserFailure = (error) => {

    };
    const getView = () => {
        if (user && user.role === "ADMIN") {
            return <UserList users={userList}/>
        } else if (user && user.role !== "ADMIN") {
            return<div>
                <h3>Don't have access</h3>
            </div>
        } else {
            return <div>
                <h3>No User Found</h3>
            </div>
        }
    }

    return getView();

};

export default AdminHome
