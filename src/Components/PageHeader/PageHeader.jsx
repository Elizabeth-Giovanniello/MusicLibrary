import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Dropdown, DropdownButton, Container, Row, Col } from 'react-bootstrap';


const PageHeader = (props) => {

    const [searchType, setSearchType] = useState('keyword');

    function displaySearchBar(){
        if (searchType == 'release_date'){
            var searchPhrase = 'year of release'
        }
        else{
            var searchPhrase = searchType
        }
        let placeholderPhrase = "Search by " + searchPhrase + "..."
        return <SearchBar searchByCategory={props.searchByCategory} category={searchType} placeholderPhrase={placeholderPhrase}/>
    }

  

    useEffect(()=>{
        displaySearchBar();
      }, [searchType])



    return ( 
        <Container className="mt-5">
            <Row>
                <h1 className="mb-5 text-center">Your Music Library</h1>
            </Row>
            <Row>
                <Col>
                <DropdownButton variant="danger" title="Search Category">
                    <Dropdown.Item onClick={()=>{setSearchType('keyword')}}>Keyword</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{setSearchType('genre')}}>Genre</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{setSearchType('album')}}>Album</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{setSearchType('title')}}>Title</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{setSearchType('artist')}}>Artist</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{setSearchType('release_date')}}>Release Date</Dropdown.Item>
                </DropdownButton>
                </Col>
                <Col>
                <div>
                    {displaySearchBar()}
                </div>
                </Col>
            </Row>
        </Container>
    );
}
 
export default PageHeader;

