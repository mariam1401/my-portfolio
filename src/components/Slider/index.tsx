

'use client'
//@ts-ignore
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";



export const ImageSlider = ({data})=>{
    return (
        <Slider
            imageList={data}
            loop={true}
            autoPlay={true}
            autoPlayInterval={3000}
            showDotControls={false}
        />
    )
}
