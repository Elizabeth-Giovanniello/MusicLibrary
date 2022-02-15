import React, { useState } from 'react';

const ReleaseDateSearch = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        props.searchByReleaseDate(searchTerm);
        setSearchTerm('');
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search by release date..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
            <button type="submit">Search</button>
        </form>
    );
}
 
export default ReleaseDateSearch;