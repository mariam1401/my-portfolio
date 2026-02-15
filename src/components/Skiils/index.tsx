'use client'

import AwsImage from'./assets/aws.png'
import CssImage from './assets/css.png'
import HtmlImage from './assets/html.png'
import ReactImage from './assets/react.webp'
import NextImage from './assets/nextjs.svg'
import ReduxImage from './assets/redux.svg'
import JavascriptImage from './assets/javascript.png'
import TypeScript from './assets/typescript.png'
import MaterialImage from './assets/material.png'
import TailwindImage from './assets/tailwind.png'
import SvelteImage from './assets/svelte.png'
import GitImage from './assets/github.svg'
import Image from "next/image";
import {useAnimateOnScroll} from "@/hooks/animateScroll";


export const Skills = ()=>{
    const experiences = [
        {
            image:ReactImage,
            title: 'React.js',
        },
        {
            image:NextImage,
            title: 'Next.js',
        },
        {
            image:SvelteImage,
            title: 'Svelte.js',
        },
        {
            image:ReduxImage,
            title: 'Redux',
        },
        {
            image:JavascriptImage,
            title: 'Javascript',
        },
        {
            image:TypeScript,
            title: 'Typescript',
        },
        {
            image:HtmlImage,
            title: 'HTML',
        },
        {
            image:CssImage,
            title: 'CSS',
        },
        {
            image:MaterialImage,
            title: 'Material UI',
        },
        {
            image:TailwindImage,
            title: 'Tailwind',
        },
        {
            image:AwsImage,
            title: 'AWS',
        },
        {
            image:GitImage,
            title: 'Git/Github',
        },

    ]

    const ref = useAnimateOnScroll({
        animation: "animate__fadeIn",
        once: true,
        speedClass: "animate__slow",
    });
    return (
        <div ref={ref as any} className='flex flex-col gap-[60px]' id={'skills'}>
            <h2 className={'text-white tracking-[4px]  text-[90px]  leading-[100px] font-bold'}>
                TECHNICAL SKILLS
            </h2>
            <ul className='grid grid-cols-3  gap-[20px]'>
                {experiences.map((el,index)=>{
                    return (
                        <li key={index} className=' relative rounded-[16px] transition-all duration-300 ease-linear p-[20px_16px] flex flex-col gap-[20px]   hover:bg-[rgba(255,255,255,0.1)]'>
                            <Image src={el.image} alt={el.title}  height={50}/>
                            <h3 className={'text-white text-[20px]'}>{el.title}</h3>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}
