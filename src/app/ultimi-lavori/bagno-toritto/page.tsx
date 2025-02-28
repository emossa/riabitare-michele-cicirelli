import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CtaFooter } from "@/components/ui/cta-footer";
import { Gallery } from "@/components/ui/gallery";
import { GalleryWithThumbnails } from "@/components/ui/galleryWithThumbnails";
import { Hero } from "@/components/ui/hero";
import { Metadata } from "next";
import Image from "next/image";

const gallery = [
    { src: "/ultimi-lavori/rosa-1.jpg", alt: "Ristrutturazione completa chiavi in mano", description: "Ristrutturazione appartamento in Via Giulio Petroni, Bari" },
    { src: "/ultimi-lavori/rosa-2.jpg", alt: "Ristrutturazione completa chiavi in mano", description: "Ristrutturazione appartamento in Via Giulio Petroni, Bari" },
    { src: "/ultimi-lavori/rosa-3.jpg", alt: "Ristrutturazione completa chiavi in mano", description: "Ristrutturazione appartamento in Via Giulio Petroni, Bari" },
    { src: "/ultimi-lavori/rosa-4.jpg", alt: "Ristrutturazione completa chiavi in mano", description: "Ristrutturazione appartamento in Via Giulio Petroni, Bari" },
    { src: "/ultimi-lavori/rosa-5.jpg", alt: "Ristrutturazione completa chiavi in mano", description: "Ristrutturazione appartamento in Via Giulio Petroni, Bari" },
    { src: "/ultimi-lavori/rosa-6.jpg", alt: "Ristrutturazione completa chiavi in mano", description: "Ristrutturazione appartamento in Via Giulio Petroni, Bari" },
    { src: "/ultimi-lavori/rosa-7.jpg", alt: "Ristrutturazione completa chiavi in mano", description: "Ristrutturazione appartamento in Via Giulio Petroni, Bari" },
    { src: "/ultimi-lavori/rosa-8.jpg", alt: "Ristrutturazione completa chiavi in mano", description: "Ristrutturazione appartamento in Via Giulio Petroni, Bari" },
    { src: "/ultimi-lavori/rosa-9.jpg", alt: "Ristrutturazione completa chiavi in mano", description: "Ristrutturazione appartamento in Via Giulio Petroni, Bari" },
    { src: "/ultimi-lavori/rosa-10.jpg", alt: "Ristrutturazione completa chiavi in mano", description: "Ristrutturazione appartamento in Via Giulio Petroni, Bari" },
    { src: "/ultimi-lavori/rosa-11.jpg", alt: "Ristrutturazione completa chiavi in mano", description: "Ristrutturazione appartamento in Via Giulio Petroni, Bari" },
    { src: "/ultimi-lavori/rosa-12.jpg", alt: "Ristrutturazione completa chiavi in mano", description: "Ristrutturazione appartamento in Via Giulio Petroni, Bari" },
    { src: "/ultimi-lavori/rosa-13.jpg", alt: "Ristrutturazione completa chiavi in mano", description: "Ristrutturazione appartamento in Via Giulio Petroni, Bari" },
    { src: "/ultimi-lavori/rosa-14.jpg", alt: "Ristrutturazione completa chiavi in mano", description: "Ristrutturazione appartamento in Via Giulio Petroni, Bari" },
    { src: "/ultimi-lavori/rosa-15.jpg", alt: "Ristrutturazione completa chiavi in mano", description: "Ristrutturazione appartamento in Via Giulio Petroni, Bari" },
    { src: "/ultimi-lavori/rosa-16.jpg", alt: "Ristrutturazione completa chiavi in mano", description: "Ristrutturazione appartamento in Via Giulio Petroni, Bari" },
    { src: "/ultimi-lavori/rosa-17.jpg", alt: "Ristrutturazione completa chiavi in mano", description: "Ristrutturazione appartamento in Via Giulio Petroni, Bari" },
    { src: "/ultimi-lavori/rosa-18.jpg", alt: "Ristrutturazione completa chiavi in mano", description: "Ristrutturazione appartamento in Via Giulio Petroni, Bari" },
    { src: "/ultimi-lavori/rosa-19.jpg", alt: "Ristrutturazione completa chiavi in mano", description: "Ristrutturazione appartamento in Via Giulio Petroni, Bari" },
    { src: "/ultimi-lavori/rosa-20.jpg", alt: "Ristrutturazione completa chiavi in mano", description: "Ristrutturazione appartamento in Via Giulio Petroni, Bari" },
    { src: "/ultimi-lavori/rosa-21.jpg", alt: "Ristrutturazione completa chiavi in mano", description: "Ristrutturazione appartamento in Via Giulio Petroni, Bari" },
    { src: "/ultimi-lavori/rosa-22.jpg", alt: "Ristrutturazione completa chiavi in mano", description: "Ristrutturazione appartamento in Via Giulio Petroni, Bari" },
]

const galleryPlanimetria = [
    { src: "/ultimi-lavori/bagno-toritto-1.jpg", alt: "Ristrutturazione bagno completa", description: "Prima" },
    { src: "/ultimi-lavori/bagno-toritto-2.jpg", alt: "Ristrutturazione bagno completa", description: "Prima" },
    { src: "/ultimi-lavori/bagno-toritto-3.jpg", alt: "Ristrutturazione bagno completa", description: "Dopo" },
    { src: "/ultimi-lavori/bagno-toritto-4.jpg", alt: "Ristrutturazione bagno completa", description: "Dopo" },
]

export const metadata: Metadata = {
    title: "Ristrutturazione Bagno Toritto",
    description: "Ristrutturazione completa bagno in un appartamento in Via Mentana, Toritto",
};

export default function BagnoToritto() {
    return (
        <div>
            <Hero src="/ultimi-lavori/planimetria-quadra-palmiotto.jpg" width={1280} height={720} imageClassName="object-contain" title="Ristrutturazione Bagno Toritto" subtitle="Ristrutturazione completa bagno in un appartamento in Via Mentana, Toritto" />
            <div className="flex lg:flex-row flex-col-reverse mt-24">
                <div className="w-full lg:w-[50%] lg:px-24 py-24 px-5 lg:py-0 ">
                    <Carousel>
                        <CarouselContent className="">
                            {galleryPlanimetria.map((image, index) => (
                                <CarouselItem key={index} className="w-full">
                                    <p className='text-primary text-2xl block text-center uppercase mb-5'>{image.description}</p>
                                    <Image className='mx-auto' src={image.src} alt={image.alt} width={507} height={611} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4 lg:-left-12" />
                        <CarouselNext className="right-4 lg:-right-12" />
                    </Carousel>
                </div>
                <div className='px-10 w-full lg:w-[50%] flex flex-col justify-center items-center'>
                    <div className='w-full max-w-lg'>
                        <div className="w-32 h-4 bg-gray-200"></div>
                        <div>
                            <h2 className="text-4xl font-bold mt-2 lg:mt-4">Ristrutturazione Bagno Completa</h2>
                            <span className="text-primary text-2xl block">Via Mentana, Toritto</span>
                        </div>
                    </div>
                    <p className='mt-5 w-full max-w-lg'>Il rifacimento del bagno resosi necessario dal guasto degli impianti, ha previsto la demolizione completa del bagno e la sostituzione della vasca con la doccia per ottimizzare lo spazio per la collocazione della lavatrice. La pavimentazione e i rivestimenti in gres 60 x 60 effetto cemento in due toni differenti sono stati scelti per dare uno stile contemporaneo.
                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row  lg:mt-0">
                <div className='px-10 w-full lg:w-[50%] flex flex-col justify-center items-center'>
                    <div className='w-full max-w-lg'>
                        <div className="w-32 h-4 bg-gray-200"></div>
                        <div>
                            <h2 className="text-4xl font-bold mt-2 lg:mt-4">Lista dei lavori effettuati</h2>
                            <span className="text-primary text-2xl block">Scheda d'intervento</span>
                        </div>
                    </div>
                    <ul className='mt-5 w-full max-w-lg list-disc'>
                        <li>Demolizione e rifacimento intonaci e massetto</li>
                        <li>Rimozione pavimento e massetto</li>
                        <li>Rimozione intonaci</li>
                        <li>Impianto idro fognante</li>
                        <li>Adeguamento impianto elettrico</li>
                        <li>Sostituzione termosifone con scalda salviette</li>
                        <li>Pavimentazione e rivestimenti</li>
                        <li>Tinteggiatura</li>
                        <li>Fornitura sanitari doccia pavimenti e rivestimenti</li>
                    </ul>
                </div>
                <div className="w-full lg:w-[50%] mt-20 lg:px-24 lg:mt-0">

                    <Image className='mx-auto' src={'/ultimi-lavori/planimetria-quadra-palmiotto.jpg'} alt={'planimetria'} width={507} height={611} />

                </div>
            </div>
            <div className="lg:px-10">
                <CtaFooter img="/planimetria.jpg" ></CtaFooter>
            </div>
        </div>

    )
}