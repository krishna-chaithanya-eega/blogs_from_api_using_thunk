import React from 'react';
import { useSelector } from "react-redux";

const UserHeader = (props) => {

    const users = useSelector(state => state.users);
    const user = users.find(user => user.id === props.userId)

    if (!user) {
        return null;
    }

    return (
        <>
            <div className="header">{user.name}</div>
        </>
    )
}
export default UserHeader;