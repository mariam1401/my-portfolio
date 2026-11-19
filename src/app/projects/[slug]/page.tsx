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
        <div className="min-h-screen">
            <div className={'max-w-[810px] m-[0_10px] flex flex-col gap-[30px] md:gap-[50px] md:m-auto mt-[40px] pb-[80px] lg:max-w-[1140px]'}>
                <Link href={'/'} className="flex items-center gap-2 text-[#998f8f] hover:text-white transition-colors w-fit group">
                    <Image src={'/arrow.svg'} alt={'Arrow'} width={30} height={40} className={'rotate-180 w-[20px] h-[30px] cursor-pointer md:w-[30px] group-hover:-translate-x-1 transition-transform'} />
                    <span className="text-sm">Back to portfolio</span>
                </Link>

                <div>
                    <h1 className={'tracking-[4px] text-[40px] text-white font-bold md:text-[60px] lg:text-[80px] leading-tight'}>{data.title}</h1>
                    <h2 className={'text-[20px] text-[#998f8f] md:text-[30px] lg:text-[40px] mt-2'}>{data.short_description}</h2>
                    {data.tags && (
                        <div className="flex flex-wrap gap-2 mt-4">
                            {data.tags.map((tag, i) => (
                                <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-[rgba(255,255,255,0.08)] text-[#c5ff41] border border-[rgba(197,255,65,0.2)]">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className={'m-[0_10px] lg:m-0'}>
                    <ImageSlider data={data.images}/>
                </div>

                <div className={'text-white project-detail'} dangerouslySetInnerHTML={{ __html:data.description }}/>
            </div>
        </div>
    )
}
