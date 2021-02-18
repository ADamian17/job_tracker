import React from 'react';

const ProfileContainer = () => {
    return (
        <div className="card main-bg-card p-5">
            <div className="card-header">
                &nbsp;
            </div>
            <div className="card-body d-flex flex-column align-items-start">

                <div className="image-holder shadow-sm rounded ">
                    <img className="card-img-right flex-auto d-none d-md-block image-holder__img" alt="avatar" src="https://s3-us-west-2.amazonaws.com/adawayfarer/c4e6e5.png" />

                    <button className="btn btn-link image-holder_edit-link" type="button" data-toggle="modal" data-target="#update-photo" >
                        <p className="button-text">edit photo</p>
                    </button>
                </div>

            </div>
            <div className="card-footer">  
                &nbsp;
            </div>
        </div>
    );
};

export default ProfileContainer;
