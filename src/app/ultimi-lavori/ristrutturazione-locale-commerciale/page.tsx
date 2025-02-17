import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CtaFooter } from "@/components/ui/cta-footer";
import { Gallery } from "@/components/ui/gallery";
import { GalleryWithThumbnails } from "@/components/ui/galleryWithThumbnails";
import { Hero } from "@/components/ui/hero";
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
                            <h2 className="text-4xl font-bold mt-2 lg:mt-4">Ristrutturazione Locale Commerciale</h2>
                            <span className="text-primary text-2xl block">Via Enrico Toti, Bari</span>
                        </div>
                    </div>
                    <p className='mt-5 w-full max-w-lg'>
                        L’ esigenza del nuovo acquirente era quella di cambiare la destinazione d’uso del locale. <br />
                        Il locale si presentava piuttosto disastrato ad un primo sopralluogo (ex birreria), impianto
                        elettrico fatiscente ed impianto idrico-fognario fuori uso. <br />
                        L’operazione di ristrutturazione ha riguardato la demolizione del precedente controsoffitto
                        pannellato in fibra minerale 60 x 60, la nuova realizzazione del controsoffitto in
                        cartongesso per l’abbassamento del solaio, l’inserimento del nuovo impianto elettrico, del
                        condizionamento e dei corpi illuminanti.  <br />
                        Il bagno è stato parzialmente modificato al fine di adeguare gli impianti.
                        La pavimentazione in marmette sottostante il linoleum è stata coperta con gres effetto
                        legno. <br />
                        La pitturazione del controsoffitto e delle pareti in tinta bianca, per esaltare l’ampiezza del
                        locale.
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
        </div>

    )
}