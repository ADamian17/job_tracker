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
            await Job.addJob(jobData);
            const jobs = await Job.getAllJobs();
            getJobs( jobs.data.data );
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
                <Form.Row>

                    <Form.Group as={Col}>
                        <Form.Label>Job Post Url</Form.Label>
                        <Form.Control type="text" name="job_post_url" placeholder="Job Post Url" onChange={(e) => setJobPostUrl(e.target.value)} />
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
                    <button className="btn btn-secondary mr-2" onClick={handleCancel}>
                        cancel
                    </button>
                    <button className="btn btn-primary" onClick={handleSubmit}>
                        Add Job
                    </button>
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
