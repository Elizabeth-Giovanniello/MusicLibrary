import React, { useState, useEffect } from 'react';
import PageHeader from '../PageHeader/PageHeader';
import MusicTable from "../MusicTable/MusicTable";
import AddNewSong from '../AddNewSong/AddNewSong';
import { Container } from 'react-bootstrap';

const DisplayMusic = (props) => {

    console.log(props.musicLibrary)

    const [musicToDisplay, setMusicToDisplay] = useState(props.musicLibrary);


    useEffect(() => {
        setMusicToDisplay(props.musicLibrary);
      }, [props.musicLibrary]);



    function searchByCategory(categoryName, searchValue){
        let displayedMusic = props.musicLibrary.filter(function(song){
            if(categoryName === 'keyword'){
                return song.title.toLowerCase().includes(searchValue.toLowerCase()) || song.artist.toLowerCase().includes(searchValue.toLowerCase()) || song.album.toLowerCase().includes(searchValue.toLowerCase()) || song.genre.toLowerCase().includes(searchValue.toLowerCase()) || song.release_date.includes(searchValue);
            }
            else{
                return song[categoryName].toLowerCase().includes(searchValue.toLowerCase());
            }
        });
        setMusicToDisplay(displayedMusic);
    }




    return ( 
        <div>
            <PageHeader searchByCategory={searchByCategory}/>
            <Container className="mt-5">
                <MusicTable musicToDisplay={musicToDisplay} editSong={props.editSong} deleteSong={props.deleteSong}/>
                <AddNewSong addNewSong={props.addNewSong}/>
            </Container>
        </div>
    );
}
 
export default DisplayMusic;