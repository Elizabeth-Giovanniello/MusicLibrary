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


    function resetForm(){
        setTitle(props.song.title);
        setArtist(props.song.artist);
        setAlbum(props.song.album);
        setGenre(props.song.genre);
        setReleaseDate(props.song.release_date);
    }

    function handleSubmit(event) {
        event.preventDefault();
        let editedSong = {
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            release_date: releaseDate,
        };
        console.log(editedSong)
        props.editSong(props.song.id, editedSong);
        resetForm();
    }

    


    return ( 
        <div>
            <Button variant="basic" onClick={handleShow}>
                <PencilFill className="text-danger" size={40}/>
                Edit Song
            </Button>
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
                        <Button variant="danger" type="submit" onClick={handleClose}>Submit changes</Button>
                        <Button variant="danger" onClick={handleClose}>Cancel</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );

}
 
export default EditSongDetails;