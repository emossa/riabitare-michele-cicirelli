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
            <Carousel className="w-full mt-10 px-10">
                <CarouselContent>
                    <CarouselItem className="basis-9/12 lg:basis-1/4">
                        <ImagePopup src="/chiavi-in-mano-g.webp" description="I lavori svolti comprendono la rasatura e stuccatura delle pareti, la preparazione per la pittura, l'installazione di un condizionatore d'aria e la ventilazione della stanza." alt="Ristrutturazione chiavi in mano" width={320} height={180} />
                    </CarouselItem>
                    <CarouselItem className="basis-9/12 lg:basis-1/4">
                        <ImagePopup src="/bagno-g.webp" description="Il bagno ristrutturato presenta piastrelle bianche lucide alle pareti e scure a spina di pesce sul pavimento. Sono stati installati una cabina doccia in vetro, una vasca moderna, un lavabo sospeso, rubinetteria cromata, specchio con luci LED, scaffali metallici, ventilazione e dettagli decorativi." alt="Rifacimento Bagno" width={320} height={180} />
                    </CarouselItem>
                    <CarouselItem className="basis-9/12 lg:basis-1/4">
                        <ImagePopup src="/impianti-elettrici-g.webp" description="Sono stati svolti lavori di impiantistica elettrica, con l'installazione di cavi elettrici all'interno di guaine protettive. Le guaine sono state posizionate ordinatamente lungo il soffitto e le pareti, garantendo protezione e organizzazione dei cavi elettrici." alt="Rifacimento impianto elettrico" width={320} height={180} />
                    </CarouselItem>
                    <CarouselItem className="basis-9/12 lg:basis-1/4">
                        <ImagePopup src="/impianto-termico-g.webp" description="È stato installato un impianto termico con riscaldamento a pavimento. Tubazioni per l'acqua calda sono state posizionate sotto il pavimento, distribuite uniformemente per garantire un riscaldamento efficiente e uniforme. Le tubazioni sono state coperte con un massetto autolivellante prima di posare la pavimentazione." alt="Impianto termico a pavimento" width={320} height={180} />
                    </CarouselItem>

                </CarouselContent>
                <CarouselNext className='hidden lg:block' />
                <CarouselPrevious className='hidden lg:block' />
            </Carousel>
        </div>
    )
}