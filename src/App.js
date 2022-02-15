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
    let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
    setMusicLibrary(response.data);
  }
  console.log(musicLibrary);

  return (
    <div className="App">
      <NavBar/>
      <DisplayMusic musicLibrary={musicLibrary}/>
    </div>
  );
}

export default App;
