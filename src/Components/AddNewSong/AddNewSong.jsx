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



    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            releaseDate: releaseDate,
        };
        console.log(newSong)
        props.addNewSong(newSong);
        //not sure if we need to clear the text yet or not, as it's a modal... tbd
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
                        <Form.Control type="text" placeholder="Song title" value={title} onChange={(event) => setTitle(event.target.value)} required/>
                        <Form.Control type="text" placeholder="Artist" value={artist} onChange={(event) => setArtist(event.target.value)} required/>
                        <Form.Control type="text" placeholder="Album" value={album} onChange={(event) => setAlbum(event.target.value)} required/>
                        <Form.Control type="text" placeholder="Genre" value={genre} onChange={(event) => setGenre(event.target.value)} required/>
                        <Form.Control type="date" placeholder="Release date" value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)} required/>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" type="submit"></Button>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );

}
 
export default AddNewSong;