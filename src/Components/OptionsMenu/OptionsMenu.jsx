import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { ThreeDotsVertical, ThreeDots } from 'react-bootstrap-icons';
import EditSongDetails from '../EditSongDetails/EditSongDetails';
import DeleteSong from '../DeleteSong/DeleteSong';
import './OptionsMenu.css'


const OptionsMenu = (props) => {

    const [isHighlighted, setIsHighlighted] = useState(false);


    return ( 
        <Dropdown drop='start'>
            <Dropdown.Toggle variant="basic" className='float-start me-3 p-0'>
                <ThreeDotsVertical className={'me-3 p-0' + (isHighlighted ? " text-danger" : " text-secondary")} onMouseEnter={()=>setIsHighlighted(true)} onMouseLeave={()=>setIsHighlighted(false)}></ThreeDotsVertical>
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