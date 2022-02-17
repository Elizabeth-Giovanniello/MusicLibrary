import React from 'react';
import { Table, Container } from 'react-bootstrap';


const MusicTable = (props) => {

    console.log(props.musicToDisplay);

    return ( 

        <Container className="mt-5">
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
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td>{song.genre}</td>
                                <td>{song.release_date}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    );
}
 
export default MusicTable;