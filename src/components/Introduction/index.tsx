'use client'
import LayerIcon from './assets/layers.svg'
import ProjectsIcon from './assets/projects.svg'
import LineIcon from './assets/line.svg'
import Line2Icon from './assets/line2.svg'
import ArrowIcon from '../../assets/arrow.svg'
import ArrowBlackIcon from '../../assets/arrow-black.svg'
import Image from "next/image";
import {useAnimateOnScroll} from "@/hooks/animateScroll";
import {useTypewriter} from "@/hooks/useTypewriter";
import {useCounter} from "@/hooks/useCounter";

const CounterItem = ({end, title}: {end: number, title: string}) => {
    const {count, ref} = useCounter(end);
    return (
        <li ref={ref as any} className="flex flex-col">
            <span className="text-white whitespace-pre-wrap text-[60px] font-bold"> {count}+</span>
            <span className="text-[#998f8f] whitespace-pre-wrap">{title}</span>
        </li>
    );
};

export const Introduction = ()=>{

    const roles = [
        'Software Engineer',
        'Claude AI Developer',
    ];

    const displayText = useTypewriter(roles, 90, 50, 2200);

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
            title:'CLAUDE AI, NEXTJS,\nREACTJS, SVELTE',
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
                <h1 className="text-white font-bold tracking-[4px] text-[40px] leading-[60px] text-center md:text-[50px] md:leading-[100px] lg:text-[60px] lg:leading-[70px] lg:text-left min-h-[140px] lg:min-h-[150px]">
                    {displayText}
                    <span className="typewriter-cursor" />
                </h1>
                <p className="text-[#998f8f] whitespace-pre-wrap text-[14px] md:text-[16px] text-center lg:text-left lg:text-[18px] ">
                    {"Passionate about creating intuitive and engaging user\nexperiences. Experienced Claude AI developer building\nintelligent solutions powered by Anthropic's models.\nSpecialize in transforming ideas into beautifully\ncrafted, AI-enhanced products."}
                </p>
            </div>
            <ul className="mt-[20px] flex gap-[40px] justify-center list-none lg:justify-normal">
                <CounterItem end={5} title={'YEARS OF\nEXPERIENCE'} />
                <CounterItem end={15} title={'PROJECTS\nCOMPLETED'} />
            </ul>
            <ul className={'flex flex-col gap-[20px] m-[20px_10px_0_10px] sm:grid grid-cols-[1fr_1.5fr] lg:m-[20px_0_0_0]'}>
                {info.map((el,index)=>{
                    return (
                        <li key={index} className="relative h-[240px] min-w-[200px] h-[250px] rounded-[16px] overflow-hidden transition-transform duration-300 hover:scale-[1.03]" style={{background:el.bg}}>
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
