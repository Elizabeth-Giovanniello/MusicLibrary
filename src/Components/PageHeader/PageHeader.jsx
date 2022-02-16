import React, { useState, useEffect } from 'react';
import KeywordSearch from '../SearchBar/KeywordSearch';
import TitleSearch from '../SearchBar/TitleSearch';
import AlbumSearch from '../SearchBar/AlbumSearch';
import ArtistSearch from '../SearchBar/ArtistSearch';
import GenreSearch from '../SearchBar/GenreSearch';
import ReleaseDateSearch from '../SearchBar/ReleaseDateSearch';
import { Dropdown, DropdownButton, Container, Row, Col } from 'react-bootstrap';


const PageHeader = (props) => {

    const [searchType, setSearchType] = useState('keyword');
    const [searchBar, setSearchBar] = useState(<KeywordSearch searchByKeyword={props.searchByKeyword}/>)

    function displaySearchBar(){

        switch(searchType) {
            case 'keyword':
                setSearchBar(<KeywordSearch searchByKeyword={props.searchByKeyword}/>)
                break;
            case 'genre':
                setSearchBar(<GenreSearch searchByGenre={props.searchByGenre}/>)
                break;
            case 'album':
                setSearchBar(<AlbumSearch searchByAlbum={props.searchByAlbum}/>)
                break;
            case 'artist':
                setSearchBar(<ArtistSearch searchByArtist={props.searchByArtist}/>)
                break;
            case 'title':
                setSearchBar(<TitleSearch searchByTitle={props.searchByTitle}/>)
                break;
            case 'release date':
                setSearchBar(<ReleaseDateSearch searchByReleaseDate={props.searchByReleaseDate}/>)
                break;
            //default??
        }
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
                    <Dropdown.Item onClick={()=>{setSearchType('genre')}}>Genre</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{setSearchType('keyword')}}>Keyword</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{setSearchType('album')}}>Album</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{setSearchType('title')}}>Title</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{setSearchType('artist')}}>Artist</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{setSearchType('release date')}}>Release Date</Dropdown.Item>
                </DropdownButton>
                </Col>
                <Col>
                <div>
                    {searchBar}
                </div>
                </Col>
            </Row>
        </Container>
    );
}
 
export default PageHeader;

