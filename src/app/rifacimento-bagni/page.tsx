import { Description } from "@/components/ui/description";
import { Hero } from "@/components/ui/hero";
import { Servizi } from "@/components/ui/servizi";
import { Reviews } from "@/components/ui/reviews";
import { CtaFooter } from "@/components/ui/cta-footer";
import { GalleryWithThumbnails } from "@/components/ui/galleryWithThumbnails";
import { House, ShowerHead, HousePlug, ThermometerSun, WandSparkles, Recycle, Droplets, LayoutDashboard } from "lucide-react";

const images = [
    { src: "/galleria-bagno/galleria-servizio-bagno1.jpg", alt: "Bagno", description: "Bagno" },
    { src: "/galleria-bagno/galleria-servizio-bagno2.jpg", alt: "Bagno", description: "Bagno" },
    { src: "/galleria-bagno/galleria-servizio-bagno5.jpg", alt: "Bagno", description: "Bagno" },
    { src: "/galleria-bagno/galleria-servizio-bagno6.jpg", alt: "Bagno", description: "Bagno" },
    { src: "/galleria-bagno/galleria-servizio-bagno7.jpg", alt: "Bagno", description: "Bagno" },
    { src: "/galleria-bagno/galleria-servizio-bagno8.jpg", alt: "Bagno", description: "Bagno" },
    { src: "/galleria-bagno/galleria-servizio-bagno9.jpg", alt: "Bagno", description: "Bagno" },
    { src: "/galleria-bagno/galleria-servizio-bagno10.jpg", alt: "Bagno", description: "Bagno" },
    { src: "/galleria-bagno/galleria-servizio-bagno11.jpg", alt: "Bagno", description: "Bagno" },
    { src: "/galleria-bagno/galleria-servizio-bagno12.jpg", alt: "Bagno", description: "Bagno" },
    { src: "/galleria-bagno/galleria-servizio-bagno13.jpg", alt: "Bagno", description: "Bagno" },
]

const services = [
    {
        title: "Ristrutturazione completa",
        description: "Include la sostituzione di tutti gli elementi del bagno, come sanitari, piastrelle, pavimenti, impianti idraulici, e impianti elettrici. Solitamente implica un rifacimento totale dell’ambiente.",
        icon: <Recycle size={70} className='text-primary' />
    },
    {
        title: "Sostituzione dei sanitari",
        description: "Prevede il cambio di lavabo, wc, bidet e doccia o vasca. Questo tipo di intervento è meno invasivo e può migliorare estetica e funzionalità senza alterare l’intero bagno.",
        icon: <Droplets size={70} className='text-primary' />
    },
    {
        title: "Rifacimento della doccia o vasca",
        description: "Concentrato sull'area doccia o vasca, questo intervento può includere la sostituzione del box doccia, la trasformazione della vasca in doccia o l’aggiunta di una cabina doccia moderna.",
        icon: <ShowerHead size={70} className='text-primary' />
    },
    {
        title: "Rifacimento pavimenti e rivestimenti",
        description: "Consiste nel rinnovare solo piastrelle e pavimenti per dare un aspetto nuovo al bagno. Questo intervento può includere l'impermeabilizzazione delle superfici.",
        icon: <LayoutDashboard size={70} className='text-primary' />
    },
]

export default function RifacimentoBagno() {
    return (
        <main className="">
            <Hero
                src="/bagno-g.webp"
                title="Rifacimento Bagno"
                subtitle="Ristrutturiamo il tuo bagno in modo completo."
            />
            <div className="lg:px-24">
                <Description
                    title="Rifacimento Bagno"
                    subtitle="Ristrutturiamo il tuo bagno in modo completo."
                    firstText="l servizio di rifacimento del bagno offerto da Riabitare Ristrutturazioni inizia con una consulenza personalizzata. Un tecnico effettua un sopralluogo per valutare lo stato attuale del bagno e discutere con il cliente le esigenze e i desideri. Successivamente, viene sviluppato un progetto su misura che include il nuovo layout, la scelta dei materiali, i sanitari e i rivestimenti. Viene poi fornito un preventivo dettagliato con i costi e i tempi di realizzazione."
                    secondText="Una volta approvato il progetto, Riabitare Ristrutturazioni passa alla fase operativa: demolizione del vecchio bagno, installazione degli impianti idraulici ed elettrici, posa dei nuovi rivestimenti e installazione di sanitari e arredi scelti. L'impresa assicura un lavoro a regola d'arte, rispettando i tempi concordati. Alla fine, viene effettuata una pulizia approfondita e il bagno viene consegnato pronto all'uso, garantendo qualità e durabilità."
                />
                <GalleryWithThumbnails images={images} title="I nostri lavori" subtitle="Rivoluzioniamo il tuo bagno" description="Riabitare Ristrutturazioni utilizza materiali di alta qualità, garantendo durabilità ed estetica raffinata. Il design è moderno e funzionale, con attenzione ai dettagli e soluzioni innovative. I rivestimenti, i sanitari e gli arredi sono selezionati da brand prestigiosi, assicurando eleganza e resistenza nel tempo." />
                <Servizi services={services} />
                <CtaFooter img="/galleria-bagno/galleria-servizio-bagno2.jpg" />
            </div>
        </main>
    );
}

