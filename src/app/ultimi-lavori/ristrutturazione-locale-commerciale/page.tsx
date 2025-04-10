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
    { src: "/ultimi-lavori/mastromatteo-1.jpg", alt: "Ristrutturazione bagno completa", description: "Prima" },
    { src: "/ultimi-lavori/mastromatteo-2.jpg", alt: "Ristrutturazione bagno completa", description: "Prima" },
    { src: "/ultimi-lavori/mastromatteo-3.jpg", alt: "Ristrutturazione bagno completa", description: "Dopo" },
    { src: "/ultimi-lavori/mastromatteo-4.jpg", alt: "Ristrutturazione bagno completa", description: "Dopo" },
]

export const metadata: Metadata = {
    title: "Ristrutturazione Locale Commerciale",
    description: "Ristrutturazione completa locale commerciale in Via Enrico Toti, Bari",
};

export default function BagnoToritto() {
    return (
        <div>
            <Hero src="/ultimi-lavori/planimetria-3d-mastromatteo.png" width={1280} height={720} imageClassName="object-contain" title="Ristrutturazione Locale Commerciale" subtitle="Ristrutturazione completa locale commerciale in Via Enrico Toti, Bari" />
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
                            <h2 className="text-4xl font-bold mt-2 lg:mt-4">Un’altra storia</h2>
                            <span className="text-primary text-2xl block">Via Enrico Toti, Bari</span>
                        </div>
                    </div>
                    <p className='mt-5 w-full max-w-lg'>
                        Questa è la storia di una ex birreria che ha ripreso vita come locale commerciale.
                        A dirla tutta, quando il nuovo proprietario ha visto questo posto per la prima volta ha fatto fatica ad immaginarne il potenziale, eppure oggi la trasformazione è avvenuta.
                        Gli impianti erano fuori uso, i pavimenti usurati, il controsoffitto ormai superato… eppure, con dedizione e cura siamo riusciti a progettare insieme un nuovo ambiente pronto ad accogliere nuove idee e persone. <br />
                        Siamo partiti rifacendo completamente impianti elettrico ed idraulico. Il linoleum è stato sostituito con un gres effetto legno, perfetto per un ambiente caldo e accogliente.
                        Per rendere lo spazio più luminoso e valorizzare ogni angolo abbiamo scelto il bianco per pareti e controsoffitto. Poi, per migliorare estetica e vivibilità, anche un nuovo controsoffitto che integra illuminazione e condizionamento. <br />
                        Niente ci rende più orgogliosi che aiutarti a realizzare i tuoi sogni (ma al posto bacchetta magica usiamo attrezzi e olio di gomito).
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
                        <li>Demolizione e ricostruzione del controsoffitto</li>
                        <li>Rimozione pavimento in linoleum, rifacimento pavimentazione</li>
                        <li>Apertura tracce per nuovi impianti, ripristino intonaci</li>
                        <li>Impianto idro fognante</li>
                        <li>Impianto climatizzazione</li>
                        <li>Impianto elettrico</li>
                        <li>Fornitura e posa porta interne</li>
                        <li>Controsoffittature</li>
                        <li>Tinteggiature</li>
                    </ul>
                </div>
                <div className="w-full lg:w-[50%] mt-20 lg:px-24 lg:mt-0">
                    <Image className='mx-auto' src={'/ultimi-lavori/planimetria-3d-mastromatteo.png'} alt={'planimetria'} width={1200} height={675} />
                </div>
            </div>
            <div className="lg:px-10">
                <CtaFooter img="/planimetria.jpg" ></CtaFooter>
            </div>
        </div >

    )
}