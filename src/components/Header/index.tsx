'use client'
import Image from "next/image";
import HomeIcon from './assets/home.svg'
import ProjectIcon from './assets/project.svg'
import ToolsIcon from './assets/tools.svg'
import WorkIcon from './assets/work.svg'
import styles from './Header.module.css'

export const Header = ()=>{

    const data = [
        {
            icon:HomeIcon,
            name:'Home',
            link:'#home'
        },
        {
            icon:WorkIcon,
            name:'Experience',
            link:'#experience'
        },
        {
            icon:ProjectIcon,
            name:'Projects',
            link:'#projects'
        },
        {
            icon:ToolsIcon,
            name:'Skills',
            link:'#skills'
        },
    ]

    return (
        <div className={styles.header}>
            <ul className={styles.header__list}>
                {data.map((el,index)=>{
                    return (
                        <li key={index} className="animation-pulse p-[4px] relative">
                            <a href={el.link}>
                                <Image src={el.icon} alt={el.name} width={20} height={20} />
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
