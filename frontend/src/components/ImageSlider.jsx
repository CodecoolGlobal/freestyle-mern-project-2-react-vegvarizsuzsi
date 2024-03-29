import React, {useState} from "react";
import { sliderData } from './ImageSliderDB';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

import './ImageSlider.css'

const ImageSlider = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <div id='gallery'>
            <div className='gallery-container'>
                <section className='slider'>
                    <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                    <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
                    {sliderData.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (<img src={slide.image} alt="sw_img" className='image' />)}
                            </div>
                        )
                    })} 
                </section>
            </div>
        </div>
    )
}

export default ImageSlider