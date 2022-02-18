import React, { useState } from 'react';
import { Modal, Button} from 'react-bootstrap';
import { TrashFill } from 'react-bootstrap-icons';


const DeleteSong = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return ( 
        <div>
            <p className="ps-3 m-0 pb-2 pt-2" onClick={handleShow}>
                <TrashFill className="text-danger me-3" size={18}/>
                Delete Song
            </p>
            <Modal size="lg" centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Delete for '{props.song.title}'
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete {props.song.title} from your library? This cannot be undone.
                </Modal.Body>
                <Modal.Footer>
                        <Button variant="danger" onClick={()=>{props.deleteSong(props.song.id, props.song)}}>Delete</Button>
                        <Button variant="danger" onClick={handleClose}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
 
export default DeleteSong;