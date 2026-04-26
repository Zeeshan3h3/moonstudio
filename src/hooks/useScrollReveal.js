import { useInView } from 'react-intersection-observer';

export default function useScrollReveal(options = {}) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
        ...options
    });

    return { ref, isActive: inView };
}
