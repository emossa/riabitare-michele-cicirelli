"use client"

import React from 'react'
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./carousel"
import { ImagePopup } from "./image-popup";
import Image from 'next/image';



export const GalleryWithThumbnails = (
    { images, title, subtitle, description, imgWidth = 1280, imgHeight = 920 }: { images: { src: string, description: string, alt: string }[], title?: string, subtitle?: string, description?: string, imgWidth?: number, imgHeight?: number }
) => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [api2, setApi2] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    React.useEffect(() => {
        if (!api || !api2) {
            return
        }

        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
        api2.on("select", () => {
            setCurrent(api2.selectedScrollSnap() + 1)
        })

    }, [api, api2])
    return (
        <div className="flex flex-col lg:flex-row gap-20 px-5">
            <div className='w-full lg:w-[50%]'>
                <Carousel setApi={setApi} className="w-full ">
                    <CarouselContent>
                        {images.map((image, index) => (
                            <CarouselItem key={index} className="w-full">
                                <Image className='object-fill' src={image.src} alt={image.alt} width={imgWidth} height={imgHeight} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <Carousel setApi={setApi2} className="w-full mt-5 ">
                    <CarouselContent>
                        {images.map((image, index) => (
                            <CarouselItem key={index} className="basis-1/4">
                                <Image onClick={() => {
                                    api?.scrollTo(index)
                                    api2?.scrollTo(index)
                                }} src={image.src} alt={image.alt} width={imgWidth / 10} height={imgHeight / 10} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselNext className='hidden lg:flex lg:justify-center lg:items-center ' />
                    <CarouselPrevious className='hidden lg:flex lg:justify-center lg:items-center' />
                </Carousel>
            </div>
            <div className='w-full lg:w-[50%] flex flex-col justify-center items-center'>
                <div className='w-full max-w-lg'>
                    <div className="w-32 h-4 bg-gray-200"></div>
                    <div >
                        <h2 className="text-4xl font-bold mt-2 lg:mt-4">{title}</h2>
                        <span className="text-primary text-2xl block">{subtitle}</span>
                    </div>
                </div>
                <p className='mt-5 w-full max-w-lg'>{description}</p>

            </div>
        </div>
    )
}
