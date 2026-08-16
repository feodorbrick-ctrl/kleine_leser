import React, { useRef, useEffect } from 'react';
import cl from './slider.module.css';
import Input from "../input/input";

const Slider = ({ reactSlide = [<Input/>] }) => {
    const sliderRef = useRef(null);
    const isScrollingRef = useRef(false); // Используем ref вместо state для проверки

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const handleWheel = (event) => {
            event.preventDefault();

            if (isScrollingRef.current) return;

            isScrollingRef.current = true;

            // Получаем ширину ПЕРВОГО слайда при каждом скролле
            const firstSlide = slider.children[0];
            if (!firstSlide) return;

            const slideWidth = firstSlide.offsetWidth;
            const direction = event.deltaY > 0 ? 1 : -1;

            slider.scrollBy({
                left: slideWidth * direction,
                behavior: 'smooth'
            });
            isScrollingRef.current = false;
        };

        slider.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            slider.removeEventListener('wheel', handleWheel);
        };
    }, []); // Пустой массив зависимостей - только при монтировании

    return (
        <div ref={sliderRef} className={cl.slider}>
            {reactSlide.map((slide, index) =>
                <div key={index} className={cl.slide}>
                    {
                        index + 1
                    }
                    <br/>
                    {
                        React.cloneElement(slide, {
                            className: slide.props?.className || ''
                        })
                    }
                </div>
            )}
        </div>
    );
};

export default Slider;