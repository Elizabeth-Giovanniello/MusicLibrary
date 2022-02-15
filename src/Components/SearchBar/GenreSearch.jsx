import React, { useState } from 'react';

const GenreSearch = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        props.searchByGenre(searchTerm);
        setSearchTerm('');
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search by genre..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
            <button type="submit">Search</button>
        </form>
    );
}
 
export default GenreSearch;