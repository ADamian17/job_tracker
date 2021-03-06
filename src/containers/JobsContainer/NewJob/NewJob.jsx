import React, { useState } from 'react';

import { connect } from 'react-redux';
import { getJobs } from '../../../redux/jobs/jobs.actions';
import { hideModal } from '../../../redux/modal/modal.action';

/* api calls */
import Job from '../../../models/Job';

/* components */
import Select from '../../../components/Select/Select';

import './NewJob.scss';

const JobFrom = ( props ) => {
    const { getJobs, hideModal, currentUser } = props;

    const [ job_position, setJobPosition ] = useState('');
    const [ job_post_url, setJobPostUrl ] = useState('');
    const [ company_name, setCompanyName ] = useState('');
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

            setJobPosition('');
            setJobPostUrl('');
            setCompanyName('');
            setPointOfContact('');
            setError(null);

            hideModal();
            
        } catch ( error ) {
            setError( error.response );
        }
        
    };
    
    const handleCancel = (e) => {
        e.preventDefault();

        setJobPosition('');
        setJobPostUrl('');
        setCompanyName('');
        setError(null);
        setPointOfContact('');
            
        hideModal();
    };

    // const handlePointOfContact = ( value ) => {
    //     setPointOfContact(value);
    //     setShow( !show );
    // };

    return (
      
        <form className="form">
            {
                error ? <span style={{ color: 'red', fontSize: '1.5rem' }}>{error.data.message}</span> : ''
            }
            
            <div className="form__group">

                <input 
                    id="job_position" 
                    className="form__input" 
                    type="text" 
                    name="job_position" 
                    placeholder="Job Position" 
                    value={job_position}
                    onChange={(e) => setJobPosition( e.target.value) } 
                    required />

                <label htmlFor="job_position" className="form__label">Job Position</label>
            </div>
  
            <div className="form__group">

                <input 
                    id="company_name" 
                    className="form__input" 
                    type="text" name="company_name" 
                    placeholder="Company Name"
                    value={company_name} 
                    onChange={(e) => setCompanyName( e.target.value) } 
                    required />

                <label htmlFor="company_name" className="form__label">Company Name</label>
            </div>
           

            <div className="form__group">

                <input 
                    id="job_post_url" 
                    className="form__input" 
                    type="text" 
                    name="job_post_url" 
                    placeholder="Job Post Url"
                    value={job_post_url} 
                    onChange={(e) => setJobPostUrl(e.target.value)} 
                    required/>
                    
                <label htmlFor="job_post_url" className="form__label">Job Post Url</label>
            </div>

            <Select
                option={point_of_contact}
                setOption={setPointOfContact}
                options={['linkedin', 'indeed', 'company website', 'glassdoor', 'angelList' ]} />
            
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
