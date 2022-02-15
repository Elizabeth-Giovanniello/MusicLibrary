import React, { useState } from 'react';

const TitleSearch = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        props.searchByTitle(searchTerm);
        setSearchTerm('');
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search by title..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
            <button type="submit">Search</button>
        </form>
    );
}
 
export default TitleSearch;