import React, { useState } from 'react';

import { connect } from 'react-redux'; 
import { setUserDetails } from '../../redux/user/user.actions'; 

// Import React FilePond
// eslint-disable-next-line no-unused-vars
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';

import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

import User from '../../models/User';

// component styles
import './FileUpload.scss';

// Register the plugins
registerPlugin( 
    FilePondPluginImagePreview, 
    FilePondPluginFileEncode, 
    FilePondPluginImageResize, 
    FilePondPluginImageTransform,
    FilePondPluginFileValidateSize
);

const FileUpload = ( {  currentUser, setUserDetails, show, setShow }) => {
    // eslint-disable-next-line no-unused-vars
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const profile_image = file.getFileEncodeDataURL();
        
        try {
            const updateUser = await User.editUser( currentUser, { profile_image } );

            if (updateUser.data.status === 200 ) {
                setUserDetails( updateUser.data.data );
                setFile(null);
                setShow(!show);
            }

        } catch (error) {
            console.log(error.response);
        }
    };

    return (
        <form className="file" onSubmit={handleSubmit}>
            <FilePond
                allowFileEncode={true}
                allowImageResize={true}
                allowImagePreview={true}
                allowFileSizeValidation={true}
                maxFileSize={'100KB'}
                allowImageTransform={true}
                imageResizeTargetWidth={100}
                imageResizeTargetHeight={100}
                oninitfile={(file) => setFile(file)}
                allowMultiple={false}
                server={null}
                name="profile_image"
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>' 
                labelMaxFileSizeExceeded="File is too large"/>
            {
                file ? <button type="submit" className="btn btn-primary">submit</button> : ''
            }    
               
        </form>
    );
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
    setUserDetails: ( user ) => dispatch( setUserDetails( user ) )
});

export default connect( mapStateToProps, mapDispatchToProps )( FileUpload );

