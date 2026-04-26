import { useEffect, useRef } from 'react';

export default function useCursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let ringX = mouseX;
        let ringY = mouseY;
        let rafId = null;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animateCursor = () => {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;

            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
            }
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
            }

            rafId = requestAnimationFrame(animateCursor);
        };

        window.addEventListener('mousemove', onMouseMove);
        animateCursor();

        const handleHoverIn = () => ringRef.current?.classList.add('scale-150', 'border-opacity-30');
        const handleHoverOut = () => ringRef.current?.classList.remove('scale-150', 'border-opacity-30');

        const hoverables = document.querySelectorAll('a, button, input, textarea, select, [data-cursor="hover"]');
        hoverables.forEach(el => {
            el.addEventListener('mouseenter', handleHoverIn);
            el.addEventListener('mouseleave', handleHoverOut);
        });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(rafId);
            hoverables.forEach(el => {
                el.removeEventListener('mouseenter', handleHoverIn);
                el.removeEventListener('mouseleave', handleHoverOut);
            });
        };
    }, []);

    return { dotRef, ringRef };
}
