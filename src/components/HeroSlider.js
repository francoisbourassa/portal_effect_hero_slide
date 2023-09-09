import React, { useState } from 'react';
import './HeroSlider.css';

function HeroSlider(props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showNewPage, setShowNewPage] = useState(false);
    const [reverseAnimation, setReverseAnimation] = useState(false);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % props.images.length);
    }

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + props.images.length) % props.images.length);
    }

    const handleDoorClick = () => {
        if (currentSlide === 0 && !reverseAnimation) {
            nextSlide();
            setTimeout(() => {
                setShowNewPage(true);
            }, 2000); 
        } else if (showNewPage) {
            setShowNewPage(false);
            setReverseAnimation(true);
            setTimeout(() => {
                prevSlide();
                setReverseAnimation(false);
            }, 2000);
        }
    }

    if (showNewPage) {
        return (
            <div className="new-page" onClick={handleDoorClick}>
                <img src="porte1.jpg" alt="Nouvelle Page" />
            </div>
        );
    }

    return (
        <div className={`hero-slider ${currentSlide === 0 ? 'door-closed' : 'door-open'} ${reverseAnimation ? 'reverse-animation' : ''}`}>
            {props.images.map((image, index) => (
                <div 
                    key={index} 
                    className={`slide ${currentSlide === index ? 'active' : ''}`}
                    onClick={handleDoorClick}
                >
                    <img src={image} alt={`Slide ${index}`} />
                </div>
            ))}
        </div>
    );
}

export default HeroSlider;
