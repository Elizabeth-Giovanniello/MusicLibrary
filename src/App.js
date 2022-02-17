import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic.jsx'
import NavBar from './Components/NavBar/NavBar.jsx';

function App() {

  const [musicLibrary, setMusicLibrary] = useState([]);

    useEffect(()=>{
      getAllMusic();
    }, [addNewSong()])

  async function getAllMusic(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    setMusicLibrary(response.data);
  }
  console.log(musicLibrary);


  async function addNewSong(song){

    await axios.post('http://127.0.0.1:8000/music/', song);

  }

  useEffect(()=>{
    addNewSong();
  }, [])



  return (
    <div className="App">
      <NavBar/>
      <DisplayMusic musicLibrary={musicLibrary} addNewSong={addNewSong}/>
    </div>
  );
}

export default App;
