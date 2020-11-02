import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const Message = ({ message, url, title }) => {
    return (
        <Row className="row">

            <Col className="p-3 text-start">
                            
                <p>{ message } <Link to={ url }>{ title }</Link></p>
                            
            </Col>

        </Row>
    );
};

export default Message;
