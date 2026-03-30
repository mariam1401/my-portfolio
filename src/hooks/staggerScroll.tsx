'use client';
import { useEffect, useRef } from "react";

type StaggerOptions = {
    cssClass?: string;     // CSS class that carries the animation (default: blur-fade-up)
    delayStep?: number;    // ms between each child
    threshold?: number;
    rootMargin?: string;
};

export function useStaggerOnScroll({
    cssClass = "blur-fade-up",
    delayStep = 80,
    threshold = 0.1,
    rootMargin = "0px 0px -10% 0px",
}: StaggerOptions = {}) {
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const container = ref.current;
        if (!container) return;

        const items = Array.from(container.querySelectorAll('li')) as HTMLElement[];
        // hide until observer fires
        items.forEach(item => { item.style.opacity = '0'; });

        const observer = new IntersectionObserver(entries => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                items.forEach((item, i) => {
                    // clear inline opacity so CSS animation-fill-mode takes over
                    item.style.opacity = '';
                    item.style.animationDelay = `${i * delayStep}ms`;
                    item.classList.add(cssClass);
                });
                observer.unobserve(container);
            }
        }, { threshold, rootMargin });

        observer.observe(container);
        return () => observer.disconnect();
    }, [cssClass, delayStep, threshold, rootMargin]);

    return ref;
}
