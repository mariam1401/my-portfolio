'use client';
import { useState, useEffect, useRef } from 'react';

export function useCounter(end: number, duration = 2000) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    setStarted(true);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;

        const steps = 60;
        const increment = end / steps;
        const stepTime = duration / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [started, end, duration]);

    return { count, ref };
}
