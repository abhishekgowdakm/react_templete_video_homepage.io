import React from 'react';
import Background from './../../multimedia/Background.mp4';
import './Homepage.css';
import logo from './../../multimedia/adventure.png';
export default function HomePage() {
  return (
    <div>
    <video id='VideoBackground' autoPlay loop muted>
        <source src={Background} type='video/mp4'>
        </source>
    </video>
    <header class="Nav-bar">
      <img src={logo} class="Nav-Select"></img>
    </header>
    <header className='Logo'>
    <h1>AUTONO</h1>
    <p>      Life Adventure</p>
    </header>
    
    </div>
  )
}
