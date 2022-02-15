import React from 'react';
import { Table } from 'react-bootstrap';


const DisplayMusic = (props) => {

    return ( 
            <Table striped bordered size="sm" className="mx-5">
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
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td>{song.genre}</td>
                                <td>{song.releaseDate}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
    );
}
 
export default DisplayMusic;