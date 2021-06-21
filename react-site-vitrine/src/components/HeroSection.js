import React from 'react'
import { Button } from './Button'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>ADVENDTURE  AWAITS</h1>
            <p>Whate are you waiting for ?</p>
            <div className="hero-btns">
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >  
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
