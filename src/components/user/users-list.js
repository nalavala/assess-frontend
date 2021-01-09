import React from 'react';

const UserList = ({users}) => {

    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">#SSN</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Address</th>
                <th scope="col">Telephone</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user => {
                return (
                    <tr>
                        <th scope="row">{user.ssn}</th>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.address}</td>
                        <td>{user.telephone}</td>
                    </tr>
                )
            })}
            </tbody>

        </table>
    )
};
export  default UserList;
