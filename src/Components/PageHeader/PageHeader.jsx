import React, { useState, useEffect } from 'react';
import KeywordSearch from '../SearchBar/KeywordSearch';
import TitleSearch from '../SearchBar/TitleSearch';
import AlbumSearch from '../SearchBar/AlbumSearch';
import ArtistSearch from '../SearchBar/ArtistSearch';
import GenreSearch from '../SearchBar/GenreSearch';
import ReleaseDateSearch from '../SearchBar/ReleaseDateSearch';


const PageHeader = (props) => {

    const [searchType, setSearchType] = useState('keyword');
    const [searchBar, setSearchBar] = useState(<KeywordSearch searchByKeyword={props.searchByKeyword}/>)

    function displaySearchBar(){
//TODO: when you get back, copy KeywordSearch and make search bar components for each of the search types. also add a default here. then try calling this function where the switch case is in the return, and test.
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

    // handleSearchSelect(event, searchCategory){
    //     event.preventDefault();
    //     setSearchType(searchCategory);
    // }

    useEffect(()=>{
        displaySearchBar();
      }, [])



    return ( 
        <div>
            <div className="dropdown">
                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">Search Category</button>
                <ul className="dropdown-menu">
                    <li className="dropdown-item" onClick={()=>{setSearchType('genre')}}>Genre</li>
                    <li className="dropdown-item" onClick={()=>{setSearchType('keyword')}}>Keyword</li>
                    <li className="dropdown-item" onClick={()=>{setSearchType('album')}}>Album</li>
                    <li className="dropdown-item" onClick={()=>{setSearchType('title')}}>Title</li>
                    <li className="dropdown-item" onClick={()=>{setSearchType('artist')}}>Artist</li>
                    <li className="dropdown-item" onClick={()=>{setSearchType('release date')}}>Release Date</li>
                </ul>
            </div>
            <div>
                {searchBar}
            </div>
        </div>
    );
}
 
export default PageHeader;

