import React from 'react';

import './userListItem.css';

const UserListItem = (props) => {
    const {avatar, first_name, last_name, email} = props.user;
    return (
        <div className="card">
            <div className="image-block">
                <img src={avatar} alt={first_name}/>
            </div>
            <div className="content-block">
                <p className='user-name'>
                    {first_name} {last_name}
                </p>
                <p className='user-email'>
                    <span className='email-link'>{email}</span>
                </p>
            </div>
        </div>
    );
}

export default UserListItem;