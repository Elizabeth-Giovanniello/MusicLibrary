import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';


const ReleaseDateSearch = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        props.searchByReleaseDate(searchTerm);
        setSearchTerm('');
    }

    return ( 
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Control type="text" placeholder="Search by year of release..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
                </Col>
                <Col>
                    <Button variant="danger" type="submit">Search</Button>
                </Col>
            </Row>
        </Form>
    );
}
 
export default ReleaseDateSearch;