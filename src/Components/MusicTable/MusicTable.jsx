import React from 'react';
import { Table, Container, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { ThreeDotsVertical, ThreeDots } from 'react-bootstrap-icons';
import OptionsMenu from '../OptionsMenu/OptionsMenu';


const MusicTable = (props) => {




    
    console.log(props.musicToDisplay);

    return ( 

        
            <Table striped bordered size="sm">
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
                    {props.musicToDisplay.map((song, index) => {
                        return (
                                
                                <tr key={index}>
                                    <td>
                                        <OptionsMenu editSong={props.editSong} song={song}/>
                                    {song.title}</td>
                                    <td>{song.artist}</td>
                                    <td>{song.album}</td>
                                    <td>{song.genre}</td>
                                    <td>{song.release_date}</td>
                                </tr>
                            
                        )
                    })}
                </tbody>
            </Table>

    );
}
 
export default MusicTable;