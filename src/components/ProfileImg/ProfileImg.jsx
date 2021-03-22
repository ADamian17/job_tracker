import React, { useState } from 'react';

import './ProfileImg.scss';

const ProfileImg = ({ imgSrc }) => {

    const [show, setShow] = useState(false);

    return (
        <div className="image">
            <div className="image__container">
                <img
                    alt="avatar"
                    src={imgSrc} />
            </div>

            <button className="btn btn-link image__edit" onClick={() => setShow(!show)}>
                edit photo
            </button>

            {/* modal */}
            <div
                className="modal"
                style={{ display: show ? 'flex' : 'none' }}>
                <div className="modal__bg" onClick={() => setShow(!show)} />

                <div className="modal__main modal__main--small">
                    <form>
                        <input type="text" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ProfileImg;
