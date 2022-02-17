import React, { useState, useEffect } from 'react';
import PageHeader from '../PageHeader/PageHeader';
import MusicTable from "../MusicTable/MusicTable";
import AddNewSong from '../AddNewSong/AddNewSong';

const DisplayMusic = (props) => {

    console.log(props.musicLibrary)

    const [musicToDisplay, setMusicToDisplay] = useState(props.musicLibrary);


    useEffect(() => {
        setMusicToDisplay(props.musicLibrary);
      }, [props.musicLibrary]);



    function searchByKeyword(keyword){
        let displayedMusic = props.musicLibrary.filter(function(song){
            return song.title.toLowerCase().includes(keyword.toLowerCase()) || song.artist.toLowerCase().includes(keyword.toLowerCase()) || song.album.toLowerCase().includes(keyword.toLowerCase()) || song.genre.toLowerCase().includes(keyword.toLowerCase()) || song.release_date.includes(keyword);
        })
        setMusicToDisplay(displayedMusic);
    }

    function searchByGenre(genre){
        let displayedMusic = props.musicLibrary.filter(function(song){
            return song.genre.toLowerCase().includes(genre.toLowerCase());
        })
        setMusicToDisplay(displayedMusic);
    }

    function searchByArtist(artist){
        let displayedMusic = props.musicLibrary.filter(function(song){
            return song.artist.toLowerCase().includes(artist.toLowerCase());
        })
        setMusicToDisplay(displayedMusic);
    }

    function searchByAlbum(album){
        let displayedMusic = props.musicLibrary.filter(function(song){
            return song.album.toLowerCase().includes(album.toLowerCase());
        })
        setMusicToDisplay(displayedMusic);
    }

    function searchByTitle(title){
        let displayedMusic = props.musicLibrary.filter(function(song){
            return song.title.toLowerCase().includes(title.toLowerCase());
        })
        setMusicToDisplay(displayedMusic);
    }

    function searchByReleaseDate(releaseDate){
        let displayedMusic = props.musicLibrary.filter(function(song){
            return song.release_date.includes(releaseDate);
        })
        setMusicToDisplay(displayedMusic);
    }







    return ( 
        <div>
            <PageHeader searchByKeyword={searchByKeyword} searchByGenre={searchByGenre} searchByArtist={searchByArtist} searchByAlbum={searchByAlbum} searchByTitle={searchByTitle} searchByReleaseDate={searchByReleaseDate}/>
            <MusicTable musicToDisplay={musicToDisplay}/>
            <AddNewSong addNewSong={props.addNewSong}/>
        </div>
    );
}
 
export default DisplayMusic;