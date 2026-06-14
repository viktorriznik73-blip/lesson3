import React from 'react'
import ReactDOM from 'react-dom/client' 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const user = {
    name: 'Itsuki Nakano',
    imageUrl: 'https://i.pinimg.com/736x/ca/b3/c6/cab3c65398032f5b200e55540dc906dd.jpg',
    imageSize: 150,
};

export default function Profile() {
    return (
        <>
           <h1>{user.name}</h1>
            <img src={user.imageUrl}
             alt={'Photo of' + user.name}  style={{ width: user.imageSize,
                height: user.imageSize
             }}/>
    </>
    );
}