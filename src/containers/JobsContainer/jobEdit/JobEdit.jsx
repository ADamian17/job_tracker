import React, { useState } from 'react';
// import { Form, Col, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { setShowEdit  } from '../../../redux/form/form.actions';
import { showJobDetails } from '../../../redux/jobs/jobs.actions';

import Job from '../../../models/Job';

import Input from '../../../components/Input/Input';
import Select from '../../../components/Select/Select';


const JobEdit = ( { details, setShowEdit, showJobDetails, jobId, currentUser } ) => {
    console.log( 'details', details);

    const [job_position, setJobPosition] = useState(details.job_position);
    const [job_post_url, setJobPostUrl] = useState(details.job_post_url);
    const [job_status, setJobStatus] = useState(details.job_status);
    const [company_name, setCompanyName] = useState(details.company_name);
    const [on_site, setOnSite] = useState(details.on_site);
    const [phone_screen, setPhoneScreen ] = useState(details.phone_screen);
    const [ point_of_contact, setPointOfContact ] = useState(details.point_of_contact);

    // for dropdown
    const [ show, setShow ] = useState( false );

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

    const handleOption = ( value, setFunc ) => {
        setFunc(value);
        setShow( !show );
    };

    const handleSubmit = async ( e ) => {
        e.preventDefault();

        try {

            const updatedJob = await Job.editJob( currentUser, jobData, jobId );
            showJobDetails( updatedJob.data.data );
            setShowEdit();
            
        } catch (error) {
            return console.log(error);
        }
    };
    
    return (
        <form className="jobEdit">

            {/* r-1 */}
            <div className="row row--small-p">

                <div className="col col--small">

                    <p className="fields">
                        <span>Company Name:</span> 
                    </p>

                    <Input 
                        type="text" 
                        placeholder={company_name}
                        label="Company Name" 
                        value={company_name} onChange={ (e) => setCompanyName(e.target.value) } />
                </div>

                <div className="col col--small">
                    <p className="fields">
                        <span className="align-self-center mr-2"> Job Position:</span>  
                    </p>
                    <Input 
                        type="text" 
                        placeholder={job_position} 
                        value={job_position}
                        label="Job Position" 
                        onChange={ (e) => setJobPosition(e.target.value) } />
                </div>
            </div>

            {/* r-2 */}

            <div className="row row--100">

                <p className="fields">
                    <span className="align-self-center mr-2"> Job Post Url:</span>  
                </p>
                    
                <Input 
                    type="text" 
                    placeholder={ job_post_url } 
                    value={job_post_url} 
                    label="Job Post Url"
                    onChange={ (e) => setJobPostUrl(e.target.value) } />
            </div>

            {/* r-3 */}
            <div className="row">
                <div className="col">

                    <p className="fields">
                        <span className="align-self-center mr-2">On Site: </span>
                    </p>

                    {/* select */}
                    <Select
                        show={show}
                        setShow={setShow}
                        option={on_site}
                        setOption={setOnSite}
                        options={['no', 'yes' ]} 
                        handleOption={handleOption} />
                    
                </div>

                {/* col 2 */}
                <div className="col">
                    <p className="fields">
                        <span className="align-self-center mr-2">Job Status:</span>
                    </p>

                    {/* select */}
                    <Select
                        show={show}
                        setShow={setShow}
                        option={job_status}
                        setOption={setJobStatus}
                        options={['applied', 'no response', 'in progress', 'rejected', 'complete' ]} 
                        handleOption={handleOption} />
                        
                </div>

            </div>
            

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
