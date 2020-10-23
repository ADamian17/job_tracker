import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const LoginRegisterContainer = ( { children, colZise } ) => {
    return (
        <Container fluid>
            <Row className="row justify-content-center full-screen ">

                <Col md={ colZise } className="align-self-center">
                    {children}
                </Col>

            </Row>              
        </Container>

    );

};

export default LoginRegisterContainer;
