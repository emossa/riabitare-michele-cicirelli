import { Description } from "@/components/ui/description";
import { Hero } from "@/components/ui/hero";
import { Servizi } from "@/components/ui/servizi";
import { Reviews } from "@/components/ui/reviews";
import { CtaFooter } from "@/components/ui/cta-footer";
import { GalleryWithThumbnails } from "@/components/ui/galleryWithThumbnails";
import { House, ShowerHead, HousePlug, ThermometerSun, WandSparkles, Recycle, Droplets, LayoutDashboard } from "lucide-react";
import { Metadata } from "next";

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
        description: "Rifacimento totale dell’ambiente che prevede rimozione e sostituzione di tutti gli elementi del bagno: sanitari, piastrelle, pavimenti, impianti idraulici ed elettrici.",
        icon: <Recycle size={70} className='text-primary' />
    },
    {
        title: "Sostituzione dei sanitari",
        description: "Rifacimento parziale utile a migliorare l’estetica e la funzionalità dell’ambiente ma in modo meno invasivo rispetto al rifacimento totale. Prevede sostituzione di lavabo, water, bidet, doccia o vasca. ",
        icon: <Droplets size={70} className='text-primary' />
    },
    {
        title: "Rifacimento della doccia o vasca",
        description: "Intervento parziale che può consistere nella sostituzione del box doccia o trasformazione della vasca in doccia o ancora l’aggiunta di una cabina doccia moderna.",
        icon: <ShowerHead size={70} className='text-primary' />
    },
    {
        title: "Rifacimento pavimenti e rivestimenti",
        description: "Rinnovazione solo di piastrelle e pavimenti con eventuale impermeabilizzazione delle superfici.  ",
        icon: <LayoutDashboard size={70} className='text-primary' />
    },
]

export const metadata: Metadata = {
    title: "Rifacimento Bagno",
    description: "Ristrutturiamo il tuo bagno in modo completo.",
};

export default function RifacimentoBagno() {
    return (
        <main className="">
            <Hero
                src="/bagno-g.webp"
                title="Rifacimento Bagno"
                subtitle="Una trasformazione completa"
            />
            <div className="lg:px-24">
                <Description
                    title="Rifacimento Bagno"
                    subtitle="Riabita il tuo spazio di benessere."
                    firstText="Il tuo bagno più che vintage è invecchiato male? Un guasto improvviso ti ha rovinato i piani e ora non sai come fare?
Che si tratti di voglia di cambiare o di un imprevisto sgradito, siamo pronti ad aiutarti a trasformare tutto in opportunità."
                    secondText="Per noi un bagno non è semplicemente una stanza della casa, ma un luogo di benessere e quiete. Per questo ti assicuriamo un progetto personalizzato e un preventivo con costi e tempi sempre rispettati. 
Non ti resterà che rilassarti: demolizione del vecchio bagno, installazione di impianti, arredi, sanitari e posa dei rivestimenti sono compito nostro."
                />
                <GalleryWithThumbnails images={images} title="I nostri lavori" subtitle="Rivoluzioniamo il tuo bagno" description="Materiali di alta qualità, durabilità ed estetica raffinata. Creiamo per te soluzioni funzionali alle tue esigenze selezionando rivestimenti, sanitari e arredi fra i migliori marchi, assicurandoti bellezza e resistenza nel tempo." />
                <Servizi services={services} />
                <CtaFooter img="/galleria-bagno/galleria-servizio-bagno2.jpg" />
            </div>
        </main>
    );
}

