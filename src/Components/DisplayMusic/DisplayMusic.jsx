import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import MusicTable from "../MusicTable/MusicTable";

const DisplayMusic = (props) => {

    console.log(props.musicLibrary)

    const [musicToDisplay, setMusicToDisplay] = useState(props.musicLibrary);

    function searchByKeyword(keyword){
        let displayedMusic = props.musicLibrary.filter(function(song){
            return song.title.toLowerCase().includes(keyword) || song.artist.toLowerCase().includes(keyword) || song.album.toLowerCase().includes(keyword) || song.genre.toLowerCase().includes(keyword) || song.releaseDate.toLowerCase().includes(keyword);
        })
        setMusicToDisplay(displayedMusic);
    }


    return ( 
        <div>
            <SearchBar searchByKeyword={searchByKeyword}/>
            <MusicTable musicToDisplay={musicToDisplay}/>
        </div>
    );
}
 
export default DisplayMusic;