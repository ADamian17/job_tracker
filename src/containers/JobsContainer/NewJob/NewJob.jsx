import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { getJobs } from '../../../redux/jobs/jobs.actions';
import { hideModal } from '../../../redux/modal/modal.action';

import Job from '../../../models/Job';

const JobFrom = ( props ) => {
    const { getJobs, hideModal } = props;

    const [job_position, setJobPosition] = useState('');
    const [job_post_url, setJobPostUrl] = useState('');
    const [job_status, setJobStatus] = useState('applied');
    const [company_name, setCompanyName] = useState('');
    const [on_site, setOnSite] = useState('no');
    const [phone_screen, setPhoneScreen ] = useState('no');
    const [ point_of_contact, setPointOfContact ] = useState('');
    const [ error, setError ] = useState( null );

    const jobData = {
        job_position,
        job_post_url,
        job_status,
        company_name,
        on_site,
        phone_screen,
        point_of_contact
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await Job.addJob(jobData);
            const jobs = await Job.getAllJobs();
            getJobs( jobs.data.data );
            hideModal();
            
        } catch ( error ) {
            setError( error.response );
        }
        
    }; 
    
    console.log('err', error);

    return (
        <>
            <Form>
                {/* row 1 */}
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Job Position</Form.Label>
                        <Form.Control type="text" name="job_position" placeholder="Job Position" onChange={(e) => setJobPosition( e.target.value) } />
                    </Form.Group>
  
                    <Form.Group as={Col}>
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control type="text" name="company_name" placeholder="Job Status" onChange={(e) => setCompanyName( e.target.value) } />
                    </Form.Group>
                </Form.Row>
  
                {/* row 2 */}
                <Form.Group>
                    <Form.Label>Job Post Url</Form.Label>
                    <Form.Control type="text" name="job_post_url" placeholder="Job Post Url" onChange={(e) => setJobPostUrl(e.target.value)} />
                </Form.Group>
  
                {/* row 3 */}
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>On Site</Form.Label>
                        <Form.Control as="select" name="on_site" onChange={(e) => setOnSite(e.target.value) } >
                            <option defaultValue value="no">No</option>
                            <option value="yes">Yes</option>
                        </Form.Control>
                    </Form.Group>
  
                    <Form.Group as={Col}>
                        <Form.Label>Job Status</Form.Label>
                        <Form.Control as="select" name="job_status" onChange={(e) => setJobStatus(e.target.value) } >
                            <option defaultValue value="" >Select One....</option>
                            <option value="applied">Applied</option>
                            <option value="no response">No Response</option>
                            <option value="In progress">In Progress</option>
                            <option value="rejected">Rejected</option>
                            <option value="complete">Complete</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
  
                {/* Row 4 */}
                <Form.Row>

                    <Form.Group as={Col}>
                        <Form.Label>Phone Screen</Form.Label>
                        <Form.Control as="select" name="phone_screen" onChange={( e ) => setPhoneScreen( e.target.value ) } >
                            <option defaultValue value="" >Select One....</option>
                            <option value="no">No</option>
                            <option value="scheduled">Scheduled</option>
                        </Form.Control>
                    </Form.Group>
  
                    <Form.Group as={Col}>
                        <Form.Label>Point of Contact</Form.Label>
                        <Form.Control as="select" name="point_of_contact" onChange={(e) => setPointOfContact( e.target.value )} >
                            <option defaultValue value="">Select One...</option>
                            <option value="linkedin">Linkedin</option>
                            <option value="indeed">indeed</option>
                            <option value="company website">Company Site</option>
                            <option value="glassdoor">GlassDoor</option>
                            <option value="angelList">AngelList</option>
                        </Form.Control>
                    </Form.Group>

                </Form.Row>

                <Form.Row>
                    <Button variant="primary" onClick={handleSubmit}>
                        Add Job
                    </Button>
                    <Button variant="secondary">
                        cancel
                    </Button>
                </Form.Row>
            </Form>
        </>
    );

};

const mapDispatchToProps = dispatch => ({
    getJobs: ( jobs ) => dispatch( getJobs( jobs ) ),
    hideModal: () => dispatch( hideModal() )
});

export default connect( null, mapDispatchToProps )( JobFrom );
