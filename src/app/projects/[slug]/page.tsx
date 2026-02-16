import {ProjectsData} from "@/constants";
import {ImageSlider} from "@/components/Slider";
import Image from "next/image";
import Link from "next/link";

export default async function Page({params}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const data = ProjectsData.filter((el)=>el.id === slug)[0]
    return (
        <div>
            <div className={'max-w-[810px] m-[0_10px] flex flex-col gap-[30px] md:gap-[50px] md:m-auto mt-[40px] lg:max-w-[1140px]'}>
                <Link href={'/'}>
                    <Image src={'/arrow.svg'} alt={'Arrow'} width={30} height={40} className={'rotate-180 w-[20px] h-[30px] mt-0 cursor-pointer md:w-[30px] md:mt-[10px] '} />
                </Link>
                <div>
                    <h1 className={'tracking-[4px] text-[40px] text-white font-bold md:[60px]  lg:text-[80px]'}>{data.title}</h1>
                    <h2 className={'text-[20px] text-[#998f8f] md:text-[30px] lg:text-[50px]'}>{data.short_description}</h2>
                </div>
                <div className={'m-[0_10px] lg:m-0'}>

                    <ImageSlider data={data.images}/>
                </div>
                <div className={'text-white'} dangerouslySetInnerHTML={{ __html:data.description }}/>
            </div>

        </div>
    )
}
