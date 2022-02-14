import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';

const DisplayMusic = (props) => {

    console.log(props.musicLibrary)

    const [musicToDisplay, setMusicToDisplay] = useState(props.musicLibrary);

    function searchByKeyword(keyword){
        let displayedMusic = props.musicLibrary.filter(function(song){
            return song.title.toLowerCase().includes(keyword) || song.artist.toLowerCase().includes(keyword) || song.album.toLowerCase().includes(keyword) || song.genre.toLowerCase().includes(keyword);
        })
        setMusicToDisplay(displayedMusic);
    }


    return ( 
        <div>
            <SearchBar searchByKeyword={searchByKeyword}/>

            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                <tbody>
                    {musicToDisplay.map((song, index) => {
                        return (
                            <tr key={index}>
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td>{song.genre}</td>
                                <td>{song.releaseDate}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}
 
export default DisplayMusic;