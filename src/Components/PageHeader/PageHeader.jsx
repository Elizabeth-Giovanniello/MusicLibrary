import React, { useState } from 'react';
import KeywordSearch from '../SearchBar/KeywordSearch';

const PageHeader = (props) => {

    const [searchType, setSearchType] = useState('keyword');
    const [searchBar, setSearchBar] = useState(KeywordSearch)

    function displaySearchBar(){

        switch(searchType) {
            case 'keyword':
                <KeywordSearch searchByKeyword={props.searchByKeyword}/>
                break;
            case 'genre':
                <SearchBar />
                break;
            case 'album':
                <SearchBar />
                break;
            case 'artist':
                <SearchBar />
                break;
            case 'title':
                <SearchBar />
                break;
            case 'release date':
                <SearchBar />
                break;
            //default??
        }
    }

    return ( 
        <div>
            <div className="dropdown">
                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">Search Category</button>
                <ul className="dropdown-menu">
                    <li className="dropdown-item" onClick={()=>{setSearchType('genre')}}>Genre</li>
                    <li className="dropdown-item" onClick={()=>{setSearchType('keyword')}}>Keyword</li>
                    <li className="dropdown-item" onClick={()=>{setSearchType('album')}}>Album</li>
                </ul>
            </div>
            {(() => {
                switch(searchType) {
                    case 'keyword':
                        <div>
                        <KeywordSearch searchByKeyword={props.searchByKeyword}/>
                        </div>
                        break;
                    // case 'genre':
                    //     <SearchBar />
                    //     break;
                    // case 'album':
                    //     <SearchBar />
                    //     break;
                    // case 'artist':
                    //     <SearchBar />
                    //     break;
                }
            })()}
        </div>
    );
}
 
export default PageHeader;

// searchByKeyword={searchByKeyword} searchByGenre={searchByGenre} searchByArtist={searchByArtist} searchByAlbum={searchByAlbum} searchByTitle={searchByTitle} searchByReleaseDate={searchByReleaseDate}