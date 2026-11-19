'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

export const ImageSlider = ({ data }: { data: { url: string }[] }) => {
    const [current, setCurrent] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const len = data.length

    const goTo = useCallback((index: number) => {
        if (isTransitioning) return
        setIsTransitioning(true)
        setCurrent(index)
        setTimeout(() => setIsTransitioning(false), 500)
    }, [isTransitioning])

    const next = useCallback(() => goTo((current + 1) % len), [current, len, goTo])
    const prev = useCallback(() => goTo((current - 1 + len) % len), [current, len, goTo])

    useEffect(() => {
        const timer = setInterval(next, 4000)
        return () => clearInterval(timer)
    }, [next])

    return (
        <div className="relative w-full overflow-hidden rounded-[16px] group">
            {/* Slides */}
            <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {data.map((item, i) => (
                    <div key={i} className="min-w-full relative aspect-video">
                        <Image
                            src={item.url}
                            alt={`Slide ${i + 1}`}
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 100vw, 1140px"
                            priority={i === 0}
                        />
                    </div>
                ))}
            </div>

            {/* Prev / Next arrows */}
            <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
                aria-label="Previous"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
            </button>
            <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
                aria-label="Next"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {data.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            i === current
                                ? 'w-6 bg-white'
                                : 'w-2 bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Counter */}
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                {current + 1} / {len}
            </div>
        </div>
    )
}
