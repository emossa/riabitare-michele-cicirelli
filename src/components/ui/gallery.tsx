import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./carousel"
import { ImagePopup } from "./image-popup";

export const Gallery = () => {
    return (
        <div className="flex flex-col items-center">
            <Carousel className="w-full mt-10">
                <CarouselContent>
                    <CarouselItem className="basis-1/2 lg:basis-1/4">
                        <ImagePopup src="/hero.jpg" alt="Hero" width={320} height={180} />
                    </CarouselItem>
                    <CarouselItem className="basis-1/2 lg:basis-1/4">
                        <ImagePopup src="/hero.jpg" alt="Hero" width={320} height={180} />
                    </CarouselItem>
                    <CarouselItem className="basis-1/2 lg:basis-1/4">
                        <ImagePopup src="/hero.jpg" alt="Hero" width={320} height={180} />
                    </CarouselItem>
                    <CarouselItem className="basis-1/2 lg:basis-1/4">
                        <ImagePopup src="/hero.jpg" alt="Hero" width={320} height={180} />
                    </CarouselItem>


                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}