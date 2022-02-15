import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';


const GenreSearch = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        props.searchByGenre(searchTerm);
        setSearchTerm('');
    }

    return ( 
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Control type="text" placeholder="Search by genre..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
                </Col>
                <Col>
                    <Button type="submit">Search</Button>
                </Col>
            </Row>
        </Form>
    );
}
 
export default GenreSearch;