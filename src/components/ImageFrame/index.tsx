import Image from "next/image";
import LineIcon from './assets/line.svg'
import Line2Icon from './assets/line2.svg'
import MeImage from './assets/me.jpeg'
import LinkedinIcon from './assets/linkedin.png'
import GithubIcon from './assets/github.png'
export const ImageFrame = ()=>{

    const linksData = [
        {icon:LinkedinIcon,link:'https://www.linkedin.com/in/mariam-karapetyan-47ba13214/'},
        {icon:GithubIcon,link:'https://github.com/mariam1401'}
    ]
    return (
        <div className="relative h-max w-[334px] bg-white pt-[30px] pr-[20px] pl-[20px] pb-[30px]  flex-col  rounded-[16px] ">
            <Image src={LineIcon} alt={'Line'} width={194} height={100} className='absolute top-0 left-0'/>
            <Image src={MeImage} alt={'Mariam'} width={240} height={284} className="m-auto rounded-[16px]"/>
            <div className="relative mt-[24px]">
                <h2 className={'text-[28px] align-middle text-center font-bold'}>Mariam Karapetyan</h2>
                <Image src={Line2Icon} alt={'Line'} width={194} height={100} className='ml-[-20px]'/>
                <p className="text-gray-600 text-center text-[18px]">A Software Engineer who has developed countless innovative solutions.</p>
                <ul className="flex mt-4 align-middle items-center justify-center gap-4">
                    {linksData.map((el,index)=>{
                        return (
                            <li key={index}>
                                <a href={el.link}>
                                    <Image src={el.icon} alt={'Icon'} height={20} width={20}/>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </div>
    )
}
