import { Navbar, Nav } from 'react-bootstrap';
import {MusicNoteBeamed } from 'react-bootstrap-icons';

const NavBar = (props) => {


    return ( 
        <Navbar sticky="top" bg="light" className="mb-5">
            <Navbar.Brand className="ps-5">
                <MusicNoteBeamed className="text-danger" size={40}></MusicNoteBeamed>
                <strong>You</strong><strong className="text-danger">Tunes</strong>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Library</Nav.Link>
                    <Nav.Link href="#link">Playlists</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
     );
}
 //TODO: make these links actually work later (the library and playlists ones)
export default NavBar;