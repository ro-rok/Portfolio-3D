import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { logoIconsList } from '../constants/index.js';

const LogoIcon = ({ icon }) => (
    <div className="marquee-item flex items-center justify-center h-[64px] px-[4px]">
        <img
            src={icon.imgPath}
            alt={icon.name || 'skill'}
            className="h-[36px] w-auto object-contain opacity-50 grayscale contrast-75"
        />
    </div>
);


const LogoShowcase = () => {
    const wrapperRef = useRef(null);
    const marqueeRef = useRef(null);
    const tweenRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        const wrapper = wrapperRef.current;

        const totalWidth = marquee.offsetWidth / 2;

        // Animate left scroll by pixel width
        tweenRef.current = gsap.to(marquee, {
            x: `-${totalWidth}px`,
            ease: 'linear',
            duration: 30, // ⏳ Slower = higher value
            repeat: -1,
        });

        // Pause/resume on hover
        const pause = () => tweenRef.current.pause();
        const play = () => tweenRef.current.play();

        wrapper.addEventListener('mouseenter', pause);
        wrapper.addEventListener('mouseleave', play);

        return () => {
            wrapper.removeEventListener('mouseenter', pause);
            wrapper.removeEventListener('mouseleave', play);
        };
    }, []);

    return (
        <div className="w-full bg-black py-10 overflow-hidden relative">
            <div
                className="marquee relative h-[64px] overflow-hidden w-full"
                ref={wrapperRef}
            >
                <div
                    ref={marqueeRef}
                    className="marquee-box flex w-max gap-1"
                >
                    {/* Double the content for seamless loop */}
                    {[...logoIconsList, ...logoIconsList].map((icon, index) => (
                        <LogoIcon key={index} icon={icon} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoShowcase;
