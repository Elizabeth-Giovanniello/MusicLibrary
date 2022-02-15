import React, { useState } from 'react';

const AlbumSearch = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        props.searchByAlbum(searchTerm);
        setSearchTerm('');
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search by album..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
            <button type="submit">Search</button>
        </form>
    );
}
 
export default AlbumSearch;