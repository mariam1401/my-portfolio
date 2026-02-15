'use client';

import { useEffect, useRef } from "react";

type Options = {
    animation?: string;      // "animate__fadeInUp", "animate__zoomIn", etc
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
    delayClass?: string;     // "animate__delay-1s"
    speedClass?: string;     // "animate__fast"
};

export function useAnimateOnScroll({
                                       animation = "animate__fadeInUp",
                                       threshold = 0.15,
                                       rootMargin = "0px 0px -10% 0px",
                                       once = true,
                                       delayClass,
                                       speedClass,
                                   }: Options = {}) {
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Start hidden until it appears (optional but usually looks best)
        el.style.opacity = "0";

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) {
                        if (!once) {
                            el.style.opacity = "0";
                            if (typeof animation === "string") {
                                el.classList.remove(animation);
                            }
                        }
                        continue;
                    }

                    el.style.opacity = "1";
                    if (typeof animation === "string") {
                        el.classList.add("animate__animated", animation);
                    }
                    if (delayClass) el.classList.add(delayClass);
                    if (speedClass) el.classList.add(speedClass);

                    if (once) observer.unobserve(el);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, [animation, threshold, rootMargin, once, delayClass, speedClass]);

    return ref;
}
