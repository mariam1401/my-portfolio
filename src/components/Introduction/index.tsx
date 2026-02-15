'use client'
import LayerIcon from './assets/layers.svg'
import ProjectsIcon from './assets/projects.svg'
import LineIcon from './assets/line.svg'
import Line2Icon from './assets/line2.svg'
import ArrowIcon from '../../assets/arrow.svg'
import ArrowBlackIcon from '../../assets/arrow-black.svg'
import Image from "next/image";
import {useAnimateOnScroll} from "@/hooks/animateScroll";

export const Introduction = ()=>{

    const data = [
        {
            title:'YEARS OF\nEXPERIENCE',
            value:'5'
        },
        {
            title:'PROJECTS\nCOMPLETED',
            value:'15'
        }
    ]

    const info = [
        {
            icon:LayerIcon,
            title:'DYNAMIC ANIMATION,\nMOTION DESIGN',
            bgIcon:Line2Icon,
            bg:'#f46c38',
            color:'white',
            arrowIcon:ArrowIcon,
        },
        {
            icon:ProjectsIcon,
            title:'FIGMA,NEXTJS,\nREACTJS,SVELTE',
            bgIcon:LineIcon,
            bg:'#c5ff41',
            color:'black',
            arrowIcon:ArrowBlackIcon
        }
    ]
    const ref = useAnimateOnScroll({
        animation: "animate__fadeIn",
        once: true,
        speedClass: "animate__slow",
    });

    return (
        <div ref={ref as any}  id={'#home'}>
            <div>
                <h1 className="text-white tracking-[4px]  text-[110px]  leading-[100px] font-bold">SOFTWARE<br/>ENGINEER</h1>
                <p className="text-[#998f8f] whitespace-pre-wrap text-[18px]">
                    {"Passionate about creating intuitive and engaging user\nexperiences. Specialize in transforming ideas into\nbeautifully crafted products."}
                </p>
            </div>
            <ul className="mt-[20px] flex gap-[40px]  list-none">
                {data.map((el,index)=>{
                    return (
                        <li key={index} className="flex flex-col">
                            <span className="text-white whitespace-pre-wrap text-[60px] font-bold"> +{el.value}</span>
                            <span className="text-[#998f8f] whitespace-pre-wrap">{el.title}</span>
                        </li>
                    )
                })}
            </ul>
            <ul className={'grid grid-cols-[1fr_1.5fr] gap-[20px] mt-[20px]'}>
                {info.map((el,index)=>{
                    return (
                        <li key={index} className="relative  h-[240px] min-w-[200px] h-[250px] rounded-[16px]" style={{background:el.bg}}>
                            <Image src={el.bgIcon} alt={'Icon'} className='h-full' />
                            <div className="absolute top-0 bottom-0 flex flex-col gap-[16px] p-[40px_20px_22px] ">
                                <Image src={el.icon}  alt={'Icon'} width={38} height={40}/>
                                <h2 className={'text-[24px] whitespace-pre-wrap'} style={{color:el?.color}}>
                                    {el.title}
                                </h2>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
