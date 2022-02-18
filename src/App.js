import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic.jsx'
import NavBar from './Components/NavBar/NavBar.jsx';

function App() {

  const [musicLibrary, setMusicLibrary] = useState([]);

    useEffect(()=>{
      getAllMusic();
    }, [])

  async function getAllMusic(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    setMusicLibrary(response.data);
  }
  console.log(musicLibrary);


  async function addNewSong(song){

    let response = await axios.post('http://127.0.0.1:8000/music/', song)
    .then(response => { 
      console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    });
    getAllMusic();
  }

  async function editSong(songID, song){

    let response = await axios.put('http://127.0.0.1:8000/music/' + songID + '/', song)
    .then(response => { 
      console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    });
    getAllMusic();
  }

  async function deleteSong(songID, song){

    let response = await axios.delete('http://127.0.0.1:8000/music/' + songID + '/', song)
    .then(response => { 
      console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    });
    getAllMusic();
  }





  return (
    <div className="App">
      <NavBar/>
      <DisplayMusic musicLibrary={musicLibrary} addNewSong={addNewSong} editSong={editSong} deleteSong={deleteSong}/>
    </div>
  );
}

export default App;
