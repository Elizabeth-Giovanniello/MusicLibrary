


const OptionsMenu = (props) => {

    return ( 
        <DropdownButton variant="basic" className='text-danger float-start me-3 p-0' title={<ThreeDotsVertical></ThreeDotsVertical>}>
            {/* <Dropdown.Item onClick={()=>{}}>Delete</Dropdown.Item> */}
            <Dropdown.Item onClick={<EditSongDetails editSong={props.editSong}/>}>Edit</Dropdown.Item>
            {/* <Dropdown.Item onClick={()=>{}}>Add to playlist</Dropdown.Item>
            <Dropdown.Item onClick={()=>{}}>Play</Dropdown.Item> */}
        </DropdownButton>
     );
}
 
export default OptionsMenu;