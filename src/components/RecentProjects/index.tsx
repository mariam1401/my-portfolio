'use client'
import AregAIImage from './assets/aregAi.png'
import BookaImage from './assets/booka.png'
import FocalImage from './assets/focal.png'
import WebImage from './assets/10web.png'
import ArrowIcon from './assets/arrow.svg'
import Image from "next/image";
import Link from "next/link";
import {useAnimateOnScroll} from "@/hooks/animateScroll";

export const RecentProjects = ()=>{

    const projects = [
        {image:AregAIImage,title:'AregAi',desc:'AI Monitoring for Solar Energy',link:'aregAi'},
        {image:BookaImage,title:'Booka',desc:'The Event Planning Marketplace',link:'booka'},
        {image:FocalImage,title:'FocalPoints',desc:'AI Call Analysis & Agent Metrics',link:'focalpoints'},
        {image:WebImage,title:'Wordpress Plugins',desc:"All WordPress Plugins, One Place",link:'wordpress-plugins'}
    ]
    const ref = useAnimateOnScroll({
        animation: "animate__fadeIn",
        once: true,
        speedClass: "animate__slow",
    });

    return (
        <div  ref={ref as any} className='flex flex-col gap-[60px]' id={'projects'}>
            <h2 className='text-white tracking-[4px]  text-[90px]  leading-[100px] font-bold'>RECENT<br/>PROJECTS</h2>
            <div>
                <ul className='flex flex-col gap-[30px]'>
                    {projects.map((el,index)=>{
                        return (
                            <li key={index} className={'animation-pulse'}>
                                <Link href={`/projects/${el.link}`} className=' relative rounded-[16px] transition-all duration-300 ease-linear p-[20px_16px] flex gap-[20px] items-center cursor-pointer hover:bg-[rgba(255,255,255,0.1)]'>
                                    <Image src={el.image} alt={el.title}  height={130} className='rounded-[16px]'/>
                                    <div>
                                        <h3 className={'text-white text-[20px]'}>{el.title}</h3>
                                        <p className={'text-[#998f8f]'}>{el.desc}</p>
                                    </div>
                                    <Image
                                        src={ArrowIcon}
                                        alt={'Arrow'}
                                        className='absolute top-4 right-4 rotate-[-45deg] '/>
                                </Link>
                            </li>
                        )
                    })}
                </ul>




            </div>

        </div>
    )
}
