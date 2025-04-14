import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const move = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target;
            if (
                target.closest('a') ||
                target.closest('button') ||
                target.closest('[data-cursor="pointer"]')
            ) {
                setIsPointer(true);
            } else {
                setIsPointer(false);
            }
        };

        document.addEventListener('mousemove', move);
        return () => document.removeEventListener('mousemove', move);
    }, []);

    return (
        <div
            className={`pointer-events-none fixed top-0 left-0 z-[9999] transition-transform duration-150 ease-out ${
                isPointer ? 'bg-white scale-150 mix-blend-difference' : 'bg-white/20 scale-100'
            }`}
            style={{
                transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
                width: '16px',
                height: '16px',
                borderRadius: '50%',
            }}
        />
    );
};

export default CustomCursor;
