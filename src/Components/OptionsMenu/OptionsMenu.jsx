import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { ThreeDotsVertical, ThreeDots } from 'react-bootstrap-icons';
import EditSongDetails from '../EditSongDetails/EditSongDetails';
import DeleteSong from '../DeleteSong/DeleteSong';


const OptionsMenu = (props) => {

    return ( 
        <Dropdown>
            <Dropdown.Toggle variant="basic" className='text-danger float-start me-3 p-0'>
                <ThreeDotsVertical className='text-danger float-start me-3 p-0'></ThreeDotsVertical>
            </Dropdown.Toggle>
            <Dropdown.Menu className="p-0">
                <Dropdown.Item className="p-0">
                    <EditSongDetails editSong={props.editSong} song={props.song}/>
                </Dropdown.Item>
                <Dropdown.Item className="p-0">
                    <DeleteSong deleteSong={props.deleteSong} song={props.song}/>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
 
export default OptionsMenu;