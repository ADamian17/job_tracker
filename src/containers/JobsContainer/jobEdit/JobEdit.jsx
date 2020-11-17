import React, { useState } from 'react';
// import { Form, Col, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { setShowEdit  } from '../../../redux/form/form.actions';
import { showJobDetails } from '../../../redux/jobs/jobs.actions';

import Job from '../../../models/Job';


const JobEdit = ( { details, setShowEdit, showJobDetails, jobId, currentUser } ) => {
    console.log( 'details', details);

    const [job_position, setJobPosition] = useState(details.job_position);
    const [job_post_url, setJobPostUrl] = useState(details.job_post_url);
    const [job_status, setJobStatus] = useState(details.job_status);
    const [company_name, setCompanyName] = useState(details.company_name);
    const [on_site, setOnSite] = useState(details.on_site);
    const [phone_screen, setPhoneScreen ] = useState(details.phone_screen);
    const [ point_of_contact, setPointOfContact ] = useState(details.point_of_contact);

    const jobData = {
        job_position,
        job_post_url,
        job_status,
        company_name,
        on_site,
        phone_screen,
        point_of_contact
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setShowEdit();
    };

    const handleSubmit = async ( e ) => {
        e.preventDefault();

        try {

            const updatedJob = await Job.editJob( currentUser, jobData, jobId );
            showJobDetails(updatedJob.data.data );
            setShowEdit();
            
        } catch (error) {
            return console.log(error);
        }
    };

    
    return (
        <form className="card-body p-5">

            <p className="fields">
                <span className="mr-1">Company Name:</span> 
                <input type="text" placeholder={company_name} value={company_name} onChange={ (e) => setCompanyName(e.target.value) } />
            </p>
             
            <p className="fields">
                <span className="align-self-center mr-2"> Job Position:</span>  
                <input type="text" placeholder={job_position} value={job_position} onChange={ (e) => setJobPosition(e.target.value) } />
            </p>

            <p className="fields">
                <span className="align-self-center mr-2"> Job Post Url:</span>  
                <input type="text" placeholder={ job_post_url } value={job_post_url} onChange={ (e) => setJobPostUrl(e.target.value) } />
            </p>

            <p className="fields">
                <span className="align-self-center mr-2">On Site: </span>
                <select className="custom-select col-2" name="on_site" value={on_site} onChange={ (e) => setOnSite(e.target.value) } >
                    <option defaultValue value="" >Select One....</option>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>  
            </p>

            <p className="fields">
                <span className="align-self-center mr-2">Job Status:</span>
            
                <select className="custom-select col-2" value={job_status} onChange={ (e) => setJobStatus(e.target.value) } >
                    <option defaultValue value="" >Select One....</option>
                    <option value="applied">Applied</option>
                    <option value="no response">No Response</option>
                    <option value="In progress">In Progress</option>
                    <option value="rejected">Rejected</option>
                    <option value="complete">Complete</option>
                </select> 
            </p>

            <p className="fields">

                <span className="align-items-center">
                    Phone Screen:
                </span>
            
                <select className="custom-select col-2" value={phone_screen} onChange={ (e) => setPhoneScreen(e.target.value) } >
                    <option defaultValue value="" >Select One....</option>
                    <option value="no">No</option>
                    <option value="scheduled">Scheduled</option>
                </select> 
            </p>

            <p className="fields"  >
                <span className="align-self-center mr-2"> Point Of Contact: </span>
            
                <select className="custom-select col-2" value={point_of_contact} onChange={ (e) => setPointOfContact(e.target.value) }>
                    <option defaultValue value="">Select One...</option>
                    <option value="linkedin">Linkedin</option>
                    <option value="indeed">indeed</option>
                    <option value="company website">Company Site</option>
                    <option value="glassdoor">GlassDoor</option>
                    <option value="angelList">AngelList</option>
                </select> 
            </p>

            <button className="btn btn-primary float-right" onClick={handleSubmit}>Edit</button>
            <button className="btn btn-danger float-right mr-2" onClick={handleCancel}>cancel</button>

        </form>

    );

};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
    setShowEdit: () => dispatch( setShowEdit() ),
    showJobDetails: ( job ) => dispatch( showJobDetails(job) )
});

export default connect( mapStateToProps, mapDispatchToProps )(JobEdit);
