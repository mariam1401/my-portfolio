'use client'
import Image from "next/image";
import LineIcon from './assets/line.svg'
import Line2Icon from './assets/line2.svg'
import MeImage from './assets/me.jpeg'
import LinkedinIcon from './assets/linkedin.png'
import GithubIcon from './assets/github.png'

export const ImageFrame = ()=>{

    const linksData = [
        {icon:LinkedinIcon,link:'https://www.linkedin.com/in/mariam-karapetyan-47ba13214/', label:'LinkedIn'},
        {icon:GithubIcon,link:'https://github.com/mariam1401', label:'Github'}
    ]
    return (
        <div className="float-anim relative h-max m-[0_20px] bg-white pt-[30px] pr-[20px] pl-[20px] pb-[30px] flex-col rounded-[16px] lg:w-[334px] profile-card overflow-hidden">
            {/* Animated gradient border */}
            <div className="profile-card-border" />

            <Image src={LineIcon} alt={'Line'} width={194} height={100} className='absolute top-0 left-0'/>
            <div className="relative">
                <Image src={MeImage} alt={'Mariam'} width={240} height={284} className="m-auto rounded-[16px] profile-image"/>
                {/* Status badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm">
                    <span className="status-dot w-2 h-2 rounded-full bg-green-500 inline-block" />
                    <span className="text-[11px] font-medium text-gray-600">Available for work</span>
                </div>
            </div>
            <div className="relative mt-[30px]">
                <h2 className={'text-[28px] align-middle text-center font-bold'}>Mariam Karapetyan</h2>
                <Image src={Line2Icon} alt={'Line'} width={194} height={100} className='ml-[-20px] hidden lg:visible'/>
                <p className="text-gray-600 text-center text-[18px]">Frontend & Claude AI Developer crafting intelligent, beautiful web experiences.</p>
                <div className="flex flex-col gap-2 mt-4 text-center text-[13px] text-gray-500">
                    <a href="mailto:mariamkarapetyan1401@gmail.com" className="contact-link hover:text-gray-800 transition-colors">mariamkarapetyan1401@gmail.com</a>
                    <a href="tel:+37477811300" className="contact-link hover:text-gray-800 transition-colors">+374 77 811 300</a>
                </div>
                <ul className="flex mt-3 align-middle items-center justify-center gap-3">
                    {linksData.map((el,index)=>{
                        return (
                            <li key={index}>
                                <a href={el.link} className="social-link flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 transition-all duration-300 hover:bg-gray-200 hover:scale-110">
                                    <Image src={el.icon} alt={el.label} height={18} width={18}/>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
