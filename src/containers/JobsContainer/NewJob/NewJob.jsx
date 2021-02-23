import React, { useState } from 'react';

import { connect } from 'react-redux';
import { getJobs } from '../../../redux/jobs/jobs.actions';
import { hideModal } from '../../../redux/modal/modal.action';

import Job from '../../../models/Job';
import ChevronDown from '../../../components/UI/Icons/ChevronDown/ChevronDown';
import ChevronUp from '../../../components/UI/Icons/ChevronUp/ChevronUp';

import './NewJob.scss';

const JobFrom = ( props ) => {
    const { getJobs, hideModal, currentUser } = props;

    const [ job_position, setJobPosition ] = useState('');
    const [ job_post_url, setJobPostUrl ] = useState('');
    const [ company_name, setCompanyName ] = useState('');
    const [ point_of_contact, setPointOfContact ] = useState('Point of Contact ...');
    const [ error, setError ] = useState( null );

    // for dropdown
    const [ show, setShow ] = useState( false );

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

    const handlePointOfContact = ( value ) => {
        setPointOfContact(value)
        setShow( !show )
    }
    
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

                <div 
                    id="point_of_contact" 
                    className="select" 
                    name="point_of_contact" 
                    onClick={ () => setShow( !show ) }>
                    
                    <span>{point_of_contact}</span> 

                    {
                        show ? <ChevronDown /> : <ChevronUp />
                    }  
                </div>

                <div 
                    className="select__options"
                    style={{ display: show ? 'inline-block' : 'none' }} >

                    <div 
                        className="option" 
                        data-option="Point of Contact"
                        onClick={ (e) => handlePointOfContact( e.currentTarget.dataset.option ) }>
                        Point of Contact ...
                    </div>

                    <div 
                        className="option" 
                        data-option="linkedin"
                        onClick={ (e) => handlePointOfContact( e.currentTarget.dataset.option ) }>
                        Linkedin
                    </div>

                    <div 
                        className="option" 
                        data-option="indeed"
                        onClick={ (e) => handlePointOfContact( e.currentTarget.dataset.option ) }>
                        indeed
                    </div>

                    <div 
                        className="option" 
                        data-option="company website"
                        onClick={ (e) => handlePointOfContact( e.currentTarget.dataset.option ) }>
                        company website
                    </div>

                    <div 
                        className="option" 
                        data-option="glassdoor"
                        onClick={ (e) => handlePointOfContact( e.currentTarget.dataset.option ) }>
                        glassdoor
                    </div>

                    <div 
                        className="option" 
                        data-option="angelList"
                        onClick={ (e) => handlePointOfContact( e.currentTarget.dataset.option ) }>
                        angelList
                    </div>
                    
                </div>

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
