import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

const KeywordSearch = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        props.searchByKeyword(searchTerm);
        setSearchTerm('');
    }

    return ( 
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Control type="text" placeholder="Search by keyword..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
                </Col>
                <Col>
                    <Button variant="danger" type="submit">Search</Button>
                </Col>
            </Row>
        </Form>
    );
}
 
export default KeywordSearch;

