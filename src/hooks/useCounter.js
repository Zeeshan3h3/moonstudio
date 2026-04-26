import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function useCounter(target, duration = 2000) {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

    useEffect(() => {
        if (inView) {
            let start = null;
            let rafId = null;

            const increment = (timestamp) => {
                if (!start) start = timestamp;
                const progress = Math.min((timestamp - start) / duration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);

                setCount(Math.floor(easeOut * target));

                if (progress < 1) {
                    rafId = requestAnimationFrame(increment);
                } else {
                    setCount(target);
                }
            };

            rafId = requestAnimationFrame(increment);
            return () => cancelAnimationFrame(rafId);
        }
    }, [inView, target, duration]);

    return { ref, count };
}
