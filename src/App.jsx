import { useState, useEffect } from 'react';
import './App.css';
import "./jenkSpellings.js";
import { useLanyard } from 'use-lanyard';
import { Canvas } from '@react-three/fiber';
import { Model } from './Jenky';

function MyComponent() {
  const [activity, setActivity] = useState('');
  const [playing, setPlaying] = useState('');
  const [spotifyUrl, setSpotifyUrl] = useState('');

  const { data: presence } = useLanyard('323205750262595595');

  useEffect(() => {
    if (presence && presence.discord_status === 'online' && presence.activities.length > 0) {
      const spotifyActivity = presence.activities.find(activity => activity.name === 'Spotify');
      if (spotifyActivity) {
        const currentActivity = presence.spotify.song;
        setActivity(currentActivity);
        setPlaying("Listening to");
        setSpotifyUrl(`http://open.spotify.com/track/${presence.spotify.track_id}`);
      } else {
        const currentActivity = presence.activities[0].name;
        setActivity(currentActivity);
        setPlaying("Currently playing");
      }
    } else {
      setPlaying("Doing");
      setActivity('nothing');
    }
  }, [presence]);

  return (
    <>
      <div className="name">
        <span id="game">{[playing]}</span>
      </div>
      <div className="game">
        {spotifyUrl ? (
          <a href={spotifyUrl} className="link">
            <span id="game">{activity}</span>
          </a>
        ) : (
          <span id="game">{activity}</span>
        )}
      </div>
    </>
  );
}

function AlbumArt() {
  const [albumArt, setAlbumArt] = useState('');

  const { data: presence } = useLanyard('323205750262595595');
  const [spotifyUrl, setSpotifyUrl] = useState('');

  useEffect(() => {
    if (presence && presence.discord_status === 'online' && presence.activities.length > 0) {
      const spotifyActivity = presence.activities.find(activity => activity.name === 'Spotify');
      if (spotifyActivity) {
        const currentAlbum = presence.spotify.album_art_url;
        setAlbumArt(currentAlbum);
        setSpotifyUrl(`http://open.spotify.com/track/${presence.spotify.track_id}`);
      } else {
        const currentAlbum = presence.activities[0].application_id;
        setAlbumArt(`https://dcdn.dstn.to/app-icons/${currentAlbum}`);
      }
    }
  }, [presence]);

  return (
    <>
      {spotifyUrl ? (
        <a href={spotifyUrl} className="link">
          <img draggable="false" onDragStart={() => false} id="get" width="90em" src={albumArt} className="art"></img>
        </a>
      ) : (
        <img draggable="false" onDragStart={() => false} id="get" width="90em" src={albumArt} className="art" ></img>
      )}
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className='halftone'></div>
      <div className="IntroContainer">
        <div className="introWrapper">
          <div className='Hi'>hi i'm <br /> <span id="names" className="fade-transition">jenku</span></div>
          <div className='status'>
            <div className='left'>
              <MyComponent className="a" />
            </div>
            <div className="dsGame">
              <img draggable="false" onDragStart={() => false} src="/emptyDS.svg" width="120em" height="auto"></img>
              <AlbumArt />
            </div>
          </div>
        </div>

        <div className='extraInfo'>
          <div>i draw and allat</div>
          <div>i also collect nintendo consoles</div>
        </div>

        <div className="iamabusingdiv">
          <div className='PLeaseDONTREAD'>
            <div className="Horror">My Consoles</div>
            <div className='myConsoles'>
              <ul>
                <li>NES</li>
                <li>SNES</li>
                <li>N64</li>
                <li>GameCube</li>
                <li>Wii</li>
                <li>Wii U</li>
                <li>Switch</li>
                <li>Switch Lite</li>
                <li>GameBoy</li>
                <li>GameBoy Pocket</li>
                <li>GBA</li>
                <li>GBA SP</li>
                <li>DS PHAT</li>
                <li>DS Lite</li>
                <li>DSi XL</li>
                <li>2DS</li>
                <li>3DS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>



      <div className="window">
        <div className="Horror">spin me</div>
        <div id="model">
          <Canvas id="jenker">
            <ambientLight intensity={1.4} />
            <spotLight intensity={2} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
            <Model />
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default App;
