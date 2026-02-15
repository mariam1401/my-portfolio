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


            <div className={'max-w-[1140px] m-auto flex flex-col gap-[60px] mt-[40px]'}>
                <Link href={'/'}>
                    <Image src={'/arrow.svg'} alt={'Arrow'} width={30} height={40} className={'rotate-180 cursor-pointer'} />
                </Link>
                <div>
                    <h1 className={'tracking-[4px] text-[80px] text-white font-bold'}>{data.title}</h1>
                    <h2 className={'text-[50px] text-[#998f8f]'}>{data.short_description}</h2>
                </div>

                <ImageSlider data={data.images}/>
                <div className={'text-white'} dangerouslySetInnerHTML={{ __html:data.description }}/>
            </div>

        </div>
    )
}
