import React, { useState } from 'react';
// import { Form, Col, Button } from 'react-bootstrap';

const JobEdit = ({ details }) => {
    const [job_position, setJobPosition] = useState(details.job_position);
    const [job_post_url, setJobPostUrl] = useState(details.job_post_url);
    const [job_status, setJobStatus] = useState(details.job_status);
    const [company_name, setCompanyName] = useState(details.company_name);
    const [on_site, setOnSite] = useState(details.on_site);
    const [phone_screen, setPhoneScreen ] = useState(details.phone_screen);
    const [ point_of_contact, setPointOfContact ] = useState(details.point_of_contact);

    console.log(details);


    return (
        <form className="card-body p-5">

            <p className="fields">
                <span className="mr-1">Company Name:</span> 
                <input type="text" placeholder={company_name} onChange={ (e) => setCompanyName(e.target.value) } />
            </p>
             
            <p className="fields">
                <span className="align-self-center mr-2"> Job Position:</span>  
                <input type="text" placeholder={job_position} onChange={ (e) => setJobPosition(e.target.value) } />
            </p>

            <p className="fields">
                <span className="align-self-center mr-2"> Job Post Url:</span>  
                <input type="text" placeholder={ job_post_url } onChange={ (e) => setJobPostUrl(e.target.value) } />
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
            
                <select className="custom-select col-2"  value={job_status} onChange={ (e) => setJobStatus(e.target.value) } >
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
            
                <select className="custom-select col-2"  value={phone_screen} onChange={ (e) => setPhoneScreen(e.target.value) } >
                    <option defaultValue value="" >Select One....</option>
                    <option value="no">No</option>
                    <option value="scheduled">Scheduled</option>
                </select> 
            </p>

            <p className="fields"  >
                <span className="align-self-center mr-2"> Point Of Contact: </span>
            
                <select className="custom-select col-2"  value={point_of_contact} onChange={ (e) => setPointOfContact(e.target.value) }>
                    <option defaultValue value="">Select One...</option>
                    <option value="linkedin">Linkedin</option>
                    <option value="indeed">indeed</option>
                    <option value="company website">Company Site</option>
                    <option value="glassdoor">GlassDoor</option>
                    <option value="angelList">AngelList</option>
                </select> 
            </p>


        </form>

    );

};


export default JobEdit;
