/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import useOnScreen from '../../config/viewOnScreen';
import './slider.sass'

const Slider = ({ children }) => {
    const [isOnScreen, ref] = useOnScreen({ threshold: 0.1 });
    const [active, setActive] = useState(0);
    const itemsRef = useRef([]);

    const getTranslateXValue = (stt) => {
        if (window.matchMedia("(max-width: 600px)").matches) {
            return `${65 * stt}vw`;
        } else if (window.matchMedia("(max-width: 1024px)").matches) {
            return `${48 * stt}vw`;
        } else {
            return `${26 * stt}vw`;
        }
    };

    const loadShow = () => {
        if (!itemsRef.current || itemsRef.current.length === 0) return;

        itemsRef.current[active].style.transform = `none`;
        itemsRef.current[active].style.zIndex = 1;

        let stt = 0;
        for (let i = active + 1; i < itemsRef.current.length; i++) {
            stt++;
            itemsRef.current[i].style.transform = `translateX(${getTranslateXValue(stt)}) scale(${1 - 0 * stt})`;
            itemsRef.current[i].style.zIndex = -stt;
        }

        stt = 0;
        for (let i = active - 1; i >= 0; i--) {
            stt++;
            itemsRef.current[i].style.transform = `translateX(${getTranslateXValue(-stt)}) scale(${1 - 0 * stt})`;
            itemsRef.current[i].style.zIndex = -stt;
        }

        updateBullets();
    };

    const updateBullets = () => {
        const bulletsContainer = document.querySelector('.bullets');
        bulletsContainer.innerHTML = '';

        itemsRef.current.forEach((item, index) => {
            const bullet = document.createElement('span');
            bullet.classList.add('bullet');
            if (index === active) {
                bullet.classList.add('active');
            }
            bullet.addEventListener('click', () => {
                setActive(index);
            });
            bulletsContainer.appendChild(bullet);
        });
    };

    useEffect(() => {
        loadShow();
    }, [active]);

    return (
        <div className={`slider ${isOnScreen ? 'visible' : ''}`} ref={ref}>
            {React.Children.map(children, (child, index) => (
                <div
                    className="slider_card"
                    ref={(el) => (itemsRef.current[index] = el)}
                >
                    {child}
                </div>
            ))}

            <div className="bullets"></div>

            <div>
                <button id="prev" onClick={() => setActive(active - 1 >= 0 ? active - 1 : active)}>
                    <i className="fa-solid fa-angle-left"></i>
                </button>
                <button id="next" onClick={() => setActive(active + 1 < itemsRef.current.length ? active + 1 : active)}>
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </div>
        </div>
    )
}

export default Slider
