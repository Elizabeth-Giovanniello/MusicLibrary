import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { ThreeDotsVertical, ThreeDots } from 'react-bootstrap-icons';
import EditSongDetails from '../EditSongDetails/EditSongDetails';


const OptionsMenu = (props) => {

    return ( 
        <DropdownButton variant="basic" className='text-danger float-start me-3 p-0' title={<ThreeDotsVertical></ThreeDotsVertical>}>
            {/* <Dropdown.Item onClick={()=>{}}>Delete</Dropdown.Item> */}
            <Dropdown.Item>
                <EditSongDetails editSong={props.editSong} song={props.song}/>
            </Dropdown.Item>
            {/* <Dropdown.Item onClick={()=>{}}>Add to playlist</Dropdown.Item>
            <Dropdown.Item onClick={()=>{}}>Play</Dropdown.Item> */}
        </DropdownButton>
    );
}
 
export default OptionsMenu;