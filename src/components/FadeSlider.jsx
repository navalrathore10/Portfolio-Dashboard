import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const FadeSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const slides = [
        {
            image: 'https://images.unsplash.com/photo-1661967103736-e69ba837102a?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text: 'Photography',
            link:'work/photography'
        },
        {
            image: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text: '<Programming>',
            link:'work/development'
        },
        {
            image: 'public/img/grad.png',
            text: 'Design',
            link:'work/designing'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setActiveIndex((activeIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setActiveIndex((activeIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full h-[250px] overflow-hidden rounded-lg mx-auto">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center ease-in-out 
                             ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundImage: `url(${slide.image})` }}>
                    
                    <div className="flex items-center justify-center w-full h-full backdrop-blur-sm rounded-2xl bg-black bg-opacity-10">
                        <div className="text-white text-2xl lg:text-3xl xl:text-4xl font-bold">{slide.text}</div>
                    </div>
                </div>
            ))}
            <button
                className="absolute bottom-4 left-4 border border-[#e3e3e3] text-white p-2 rounded-full hover:scale-[1.1] transition-colors"
                onClick={prevSlide}
            >
                <FaArrowLeft />
            </button>
            <button
                className="absolute bottom-4 right-4 border border-[#e3e3e3] text-white p-2 rounded-full hover:scale-[1.1] transition-colors"
                onClick={nextSlide}
            >
                <FaArrowRight />
            </button>
        </div>
    );
};

export default FadeSlider;
