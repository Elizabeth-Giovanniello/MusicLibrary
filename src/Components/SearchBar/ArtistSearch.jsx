import React, { useState } from 'react';

const ArtistSearch = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        props.searchByArtist(searchTerm);
        setSearchTerm('');
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search by artist..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
            <button type="submit">Search</button>
        </form>
    );
}
 
export default ArtistSearch;