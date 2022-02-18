import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { PencilFill } from 'react-bootstrap-icons';

const EditSongDetails = (props) => {

    const [title, setTitle] = useState(props.song.title);
    const [artist, setArtist] = useState(props.song.artist);
    const [album, setAlbum] = useState(props.song.album);
    const [genre, setGenre] = useState(props.song.genre);
    const [releaseDate, setReleaseDate] = useState(props.song.release_date);


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    function handleSubmit(event) {
        event.preventDefault();
        handleClose();
        let editedSong = {
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            release_date: releaseDate,
        };
        console.log(editedSong)
        props.editSong(props.song.id, editedSong);
    }

    


    return ( 
        <div>
            <p className="ps-3 m-0 pb-2 pt-2" onClick={handleShow}>
                <PencilFill className="text-danger me-3" size={18}/>
                Edit Song
            </p>
            <Modal size="lg" centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Edit Details for '{props.song.title}'
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Label>Title:</Form.Label>
                        <Form.Control className="mb-3" type="text" value={title} onChange={(event) => setTitle(event.target.value)} required/>
                        <Form.Label>Artist:</Form.Label>
                        <Form.Control className="mb-3" type="text" value={artist} onChange={(event) => setArtist(event.target.value)} required/>
                        <Form.Label>Album:</Form.Label>
                        <Form.Control className="mb-3" type="text" value={album} onChange={(event) => setAlbum(event.target.value)} required/>
                        <Form.Label>Genre:</Form.Label>
                        <Form.Control className="mb-3" type="text" value={genre} onChange={(event) => setGenre(event.target.value)} required/>
                        <Form.Label>Release Date:</Form.Label>
                        <Form.Control className="mb-5" type="date" value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)} required/>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                        <Button variant="danger" type="submit" onClick={handleSubmit}>Submit changes</Button>
                        <Button variant="danger" onClick={handleClose}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );

}
 
export default EditSongDetails;