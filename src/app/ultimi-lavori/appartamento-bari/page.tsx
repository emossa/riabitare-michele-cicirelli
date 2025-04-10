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
    { src: "/ultimi-lavori/planimetria-prima.jpg", alt: "Ristrutturazione completa chiavi in mano", description: "Prima" },
    { src: "/ultimi-lavori/planimetria-dopo.jpg", alt: "Ristrutturazione completa chiavi in mano", description: "Dopo" },
    { src: "/ultimi-lavori/planimetria-quadra.jpg", alt: "Ristrutturazione completa chiavi in mano", description: "Dopo 3D" },
]

export const metadata: Metadata = {
    title: "Ristrutturazione appartamento Bari",
    description: "Ristrutturazione completa chiavi in mano di un appartamento in Via Giulio Petroni, Bari",
};

export default function AppartamentoBari() {
    return (
        <div>
            <Hero src="/ultimi-lavori/planimetria-quadra.jpg" width={1280} height={720} imageClassName="object-contain" title="Ristrutturazione appartamento" subtitle="Ristrutturazione completa chiavi in mano di un appartamento in Via Giulio Petroni, Bari" />
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
                            <h2 className="text-4xl font-bold mt-2 lg:mt-4">Una casa che accoglie</h2>
                            <span className="text-primary text-2xl block">Via Giulio Petroni, Bari</span>
                        </div>
                    </div>
                    <p className='mt-5 w-full max-w-lg'>Partendo da un appartamento degli anni ’70 con una disposizione ormai datata, abbiamo trasformato gli spazi in modo da dargli nuova vita e adattarlo a chi l’ha scelto e ci ha scelti.
                        Il desiderio era quello di creare un’area living che fosse comoda, accogliente e piena di luce e magari ottenere anche un bagno in più. Per far ciò abbiamo unito ingresso e soggiorno e con un’ottimizzazione degli spazi abbiamo aggiunto il comfort di un secondo bagno. Gli impianti idraulici, termici ed elettrici sono stati completamente rifatti, garantendo sicurezza e funzionalità. Non abbiamo dimenticato nemmeno gli infissi e le porte: i primi (che erano in legno) sono stati sostituiti con quelli in alluminio a taglio termico, le seconde ora sono eleganti e moderne, con una rifinitura patinata.
                        Ogni passo di questo progetto è stato pensato per dare a questo appartamento un respiro più ampio ed insieme la possibilità a chi lo abita di poterlo chiamare casa.
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
                        <li>Demolizione e ricostruzione dei tramezzi per la rielaborazione della suddivisione interna</li>
                        <li>Demolizione e rifacimento pavimentazione e massetti</li>
                        <li>Demolizione e rifacimento intonaci</li>
                        <li>Impianto idro fognante</li>
                        <li>Impianto termico</li>
                        <li>Impianto climatizzazione</li>
                        <li>Impianto elettrico</li>
                        <li>Impianto allarme</li>
                        <li>Fornitura e posa infissi</li>
                        <li>Fornitura e posa porte interne</li>
                        <li>Controsoffittature</li>
                        <li>Tinteggiature</li>
                    </ul>
                </div>
                <div className="w-full lg:w-[50%] mt-20 lg:px-24 lg:mt-0">
                    <Carousel>
                        <CarouselContent className="">
                            {gallery.map((image, index) => (
                                <CarouselItem key={index} className="w-full">
                                    <Image className='mx-auto' src={image.src} alt={image.alt} width={507} height={611} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4 lg:-left-12" />
                        <CarouselNext className="right-4 lg:-right-12" />
                    </Carousel>
                </div>
            </div>
            <div className="lg:px-10">
                <CtaFooter img="/planimetria.jpg" ></CtaFooter>
            </div>
        </div>

    )
}