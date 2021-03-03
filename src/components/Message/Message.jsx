import React from 'react';
import { Link } from 'react-router-dom';

import './Message.scss';

const Message = ({ message, url, title }) => {
    return (
        <div className="message">
            <p>
                { message } 
                <Link className="message__link" to={ url }>
                    { title }
                </Link>
            </p>
        </div>
    );
};

export default Message;
