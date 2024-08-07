
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./carousel"
import { ImagePopup } from "./image-popup";
import Image from "next/image";



export const Gallery = (
    { images }: { images: { src: string, description: string, alt: string }[] }
) => {
    return (
        <div className="flex flex-col items-center">
            <Carousel className="w-full mt-10 px-10">
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index} className="basis-9/12 lg:basis-1/4">
                            <ImagePopup src={image.src} description={image.description} alt={image.alt} width={320} height={180} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext className='hidden lg:flex lg:justify-center lg:items-center ' />
                <CarouselPrevious className='hidden lg:flex lg:justify-center lg:items-center' />
            </Carousel>
        </div>
    )
}
