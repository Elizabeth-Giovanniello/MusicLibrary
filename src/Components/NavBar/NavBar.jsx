import { Navbar, Nav } from 'react-bootstrap';
import {MusicNoteBeamed } from 'react-bootstrap-icons';

const NavBar = (props) => {


    return ( 
        <Navbar fixed="top" bg="light" className="mb-5">
            <Navbar.Brand className="ps-5">
                <MusicNoteBeamed color="maroon" size={40}></MusicNoteBeamed>
                YouTunes
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Library</Nav.Link>  //TODO: make these links actually work later
                    <Nav.Link href="#link">Playlists</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
     );
}
 
export default NavBar;