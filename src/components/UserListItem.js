import React from 'react';

import './userListItem.css';

const UserListItem = (props) => {
    const {image, firstName, lastName, email} = props.user;
    return (
        <div className="card">
            <div className="image-block">
                <img src={image} alt={firstName}/>
            </div>
            <div className="content-block">
                <p className='user-name'>
                    {firstName} {lastName}
                </p>
                <p className='user-email'>
                    <span className='email-link'>{email}</span>
                </p>
            </div>
        </div>
    );
}

export default UserListItem;