import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

const TitleSearch = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        props.searchByTitle(searchTerm);
        setSearchTerm('');
    }

    return ( 
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Control type="text" placeholder="Search by title..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
                </Col>
                <Col>
                    <Button variant="danger" type="submit">Search</Button>
                </Col>
            </Row>
        </Form>
    );
}
 
export default TitleSearch;