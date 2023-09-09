import React from 'react';
import './App.css';
import HeroSlider from './components/HeroSlider';

function App() {
    const images = ['porte.jpg', 'porte1.jpg'];  
    return (
        <div className="App">
            <HeroSlider images={images} />
        </div>
    );
}

export default App;
