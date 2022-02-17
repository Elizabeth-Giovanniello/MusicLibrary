import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { PlusCircleFill } from 'react-bootstrap-icons';

const AddNewSong = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseDate, setReleaseDate] = useState('');


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    function resetForm(){
        setTitle("");
        setArtist("");
        setAlbum("");
        setGenre("");
        setReleaseDate("");
    }

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            release_date: releaseDate,
        };
        console.log(newSong)
        props.addNewSong(newSong);
        resetForm();
    }

    


    return ( 
        <div>
            <Button variant="basic" onClick={handleShow}>
                <PlusCircleFill className="text-danger" size={40}></PlusCircleFill>
            </Button>
            <Modal size="lg" centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add a New Song to Your Library
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Label>Title:</Form.Label>
                        <Form.Control className="mb-3" type="text" placeholder="Enter song title" value={title} onChange={(event) => setTitle(event.target.value)} required/>
                        <Form.Label>Artist:</Form.Label>
                        <Form.Control className="mb-3" type="text" placeholder="Enter name of artist" value={artist} onChange={(event) => setArtist(event.target.value)} required/>
                        <Form.Label>Album:</Form.Label>
                        <Form.Control className="mb-3" type="text" placeholder="Enter album name" value={album} onChange={(event) => setAlbum(event.target.value)} required/>
                        <Form.Label>Genre:</Form.Label>
                        <Form.Control className="mb-3" type="text" placeholder="Enter song genre" value={genre} onChange={(event) => setGenre(event.target.value)} required/>
                        <Form.Label>Release Date:</Form.Label>
                        <Form.Control className="mb-5" type="date" placeholder="Enter date of release" value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)} required/>
                        <Button variant="danger" type="submit" onClick={handleClose}>Add Song</Button>
                        <Button variant="danger" onClick={handleClose}>Cancel</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );

}
 
export default AddNewSong;