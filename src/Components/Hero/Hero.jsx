import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow_icon.png'
import hero_image2 from '../Assets/hero_image2.png'
import { BsArrowRight } from 'react-icons/bs'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2>New arrivals only</h2>
                <div>

                    <div className='hero-hand-icon'>
                        <p>New</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>Collections</p>
                    <p>for everyone</p>

                </div>
                <div className="hero-latest-btn">
                    <div>Lattest Collection</div>
                    <span><BsArrowRight /></span>
                    {/* <img src={arrow_icon} alt="" /> */}
                </div>
            </div>
            <div className='hero-right'>
                <img src={hero_image2} alt="" />
            </div>
        </div>


    )
}

export default Hero 
