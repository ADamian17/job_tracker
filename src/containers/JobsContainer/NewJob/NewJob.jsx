import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';

import { connect } from 'react-redux';
import { getJobs } from '../../../redux/jobs/jobs.actions';
import { hideModal } from '../../../redux/modal/modal.action';

import Job from '../../../models/Job';

import './NewJob.scss';

const JobFrom = ( props ) => {
    const { getJobs, hideModal, currentUser } = props;

    const [job_position, setJobPosition] = useState('');
    const [job_post_url, setJobPostUrl] = useState('');
    const [company_name, setCompanyName] = useState('');
    const [ point_of_contact, setPointOfContact ] = useState('');
    const [ error, setError ] = useState( null );

    const jobData = {
        job_position,
        job_post_url,
        company_name,
        point_of_contact
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await Job.addJob( currentUser ,jobData );
            const jobs = await Job.getAllJobs( currentUser );
            getJobs( jobs.data.jobs );
            hideModal();
            
        } catch ( error ) {
            setError( error.response );
        }
        
    };
    
    const handleCancel = (e) => {
        e.preventDefault();
        hideModal();
    };
    
    console.log('err', error);

    return (
      
        <form className="form">
            
            <div className="form__group">
                <input id="job_position" className="form__input" type="text" name="job_position" placeholder="Job Position" onChange={(e) => setJobPosition( e.target.value) } required />
                <label htmlFor="job_position" className="form__label">Job Position</label>
            </div>
  
            <div className="form__group">
                <input id="company_name" className="form__input" type="text" name="company_name" placeholder="Company Name" onChange={(e) => setCompanyName( e.target.value) } />
                <label htmlFor="company_name" className="form__label">Company Name</label>
            </div>
           

            <div className="form__group">
                <input id="job_post_url" className="form__input" type="text" name="job_post_url" placeholder="Job Post Url" onChange={(e) => setJobPostUrl(e.target.value)} />
                <label htmlFor="job_post_url" className="form__label">Job Post Url</label>
            </div>
  
            <div className="form__group">

                <select id="point_of_contact" className="form__select" name="point_of_contact" onChange={(e) => setPointOfContact( e.target.value )} >
                    <option defaultValue value=""> --- Point of Contact --- </option>
                    <option value="linkedin">Linkedin</option>
                    <option value="indeed">indeed</option>
                    <option value="company website">Company Site</option>
                    <option value="glassdoor">GlassDoor</option>
                    <option value="angelList">AngelList</option>
                </select>

                {/* <label htmlFor="point_of_contact" className="form__select__arrow">^</label> */}
            </div>
            

            <div className="btn-group btn-group--small">
                <button className="btn btn-secondary mr-2" onClick={handleCancel}>
                    cancel
                </button>
                <button className="btn btn-primary" onClick={handleSubmit}>
                    Add Job
                </button>
            </div>
        </form>
    
    );

};

const mapDispatchToProps = dispatch => ({
    getJobs: ( jobs ) => dispatch( getJobs( jobs ) ),
    hideModal: () => dispatch( hideModal() )
});

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect( mapStateToProps, mapDispatchToProps )( JobFrom );
