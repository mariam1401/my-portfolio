'use client'
import AregAIImage from './assets/aregAi.png'
import BookaImage from './assets/booka.png'
import FocalImage from './assets/focal.png'
import ArrowIcon from './assets/arrow.svg'
import Image from "next/image";
import Link from "next/link";
import {useStaggerOnScroll} from "@/hooks/staggerScroll";

export const RecentProjects = ()=>{

    const projects = [
        {image:AregAIImage,title:'AregAi',desc:'AI Monitoring for Solar Energy',link:'aregAi', tags:['React','Claude AI','D3.js']},
        {image:FocalImage,title:'FocalPoints',desc:'AI Call Analysis & Agent Metrics',link:'focalpoints', tags:['Svelte','AWS','Firestore']},
        {image:BookaImage,title:'Booka',desc:'The Event Planning Marketplace',link:'booka', tags:['Next.js','Stripe','Firestore']},
    ]
    const ref = useStaggerOnScroll({ delayStep: 150 });

    return (
        <div className='flex flex-col gap-[60px]' id={'projects'}>
            <h2 className='text-white font-bold tracking-[4px] text-[50px] leading-[60px] text-center md:text-[80px] md:leading-[80px] lg:text-[90px] lg:leading-[110px] lg:text-start'>RECENT<br/>PROJECTS</h2>
            <div ref={ref as any}>
                <ul className='flex flex-col gap-[30px]'>
                    {projects.map((el,index)=>{
                        return (
                            <li key={index}>
                                <Link href={`/projects/${el.link}`} className='relative rounded-[16px] transition-all duration-300 ease-linear p-[20px_16px] flex gap-[20px] items-center cursor-pointer hover:bg-[rgba(255,255,255,0.08)] border border-transparent hover:border-[rgba(255,255,255,0.1)] group'>
                                    <Image src={el.image} alt={el.title} height={130} className='rounded-[16px] w-auto h-[90px] transition-transform duration-300 group-hover:scale-105'/>
                                    <div className="flex-1">
                                        <h3 className={'text-white text-[16px] md:text-[20px] font-bold'}>{el.title}</h3>
                                        <p className={'text-[#998f8f] text-[14px] md:text-[16px]'}>{el.desc}</p>
                                        <div className="flex flex-wrap gap-1.5 mt-2">
                                            {el.tags.map((tag, i) => (
                                                <span key={i} className="px-2 py-0.5 text-[11px] rounded-full bg-[rgba(255,255,255,0.06)] text-[#c5ff41] border border-[rgba(197,255,65,0.15)]">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <Image
                                        src={ArrowIcon}
                                        alt={'Arrow'}
                                        className='absolute top-4 right-4 rotate-[-45deg] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'/>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
