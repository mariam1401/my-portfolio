'use client'
import {useStaggerOnScroll} from "@/hooks/staggerScroll";


export const Experience = ()=>{
    const experiences = [
        {
            title: 'AregAi | Software Engineer',
            date: '2025 - Present',
            desc: 'Built responsive and user-friendly interfaces while collaborating closely with backend teams to integrate RESTful APIs and optimize data flow.'
        },
        {
            title: 'SoftShark | Software Engineer',
            date: '2021 - 2025',
            desc: 'Designed, developed, and maintained large-scale frontend applications using React.js and Next.js, focusing on performance, scalability, and clean architecture.'
        },
        {
            title: 'Booka | Software Engineer',
            date: '2023 - 2024',
            desc: 'Developed key UI features for an event planning marketplace, improving user experience and ensuring cross-browser and cross-device compatibility.'
        }
    ]
    const ref = useStaggerOnScroll({ delayStep: 150 });

    return (
        <div ref={ref as any} className='flex flex-col gap-[60px]' id={'experience'}>
            <h2 className={'text-white  font-bold  tracking-[4px] text-[50px] leading-[60px] text-center md:text-[80px] md:leading-[80px] lg:text-[90px] lg:leading-[110px] lg:text-left'}>
                5+ YEARS OF<br/>EXPERIENCE
            </h2>
            <ul className='flex flex-col gap-[30px]'>
                {experiences.map((el,index)=>{
                    return (
                        <li key={index} className='experience-card relative rounded-[16px] transition-all duration-300 ease-linear p-[20px_16px] flex flex-col gap-[20px] cursor-pointer hover:bg-[rgba(255,255,255,0.1)]'>
                            <h3 className={'text-white text-[20px]'}>{el.title}</h3>
                            <p className={'text-[#998f8f]'}>{el.desc}</p>
                            <p className={'text-[#998f8f]'}>{el.date}</p>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}
