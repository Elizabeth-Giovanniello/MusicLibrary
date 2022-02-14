import React, { useState } from 'react';

const PageHeader = (props) => {

    const [searchType, setSearchType] = useState('keyword');


    return ( 
        <div>
            <div className="dropdown">
                <button>Search Category</button>
                <ul className="dropdown-menu">
                    <li className="dropdown-item" onClick={setSearchType('genre')}>Genre</li>
                    <li className="dropdown-item" onClick={setSearchType('album')}>Album</li>
                    <li className="dropdown-item" onClick={setSearchType('artist')}>Artist</li>
                </ul>
            </div>
            {(() => {
                switch(searchType) {
                    case 'keyword':
                        <SearchBar />
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
                }
            })()}
        </div>
    );
}
 
export default PageHeader;