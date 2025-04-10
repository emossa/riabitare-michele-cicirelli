import { Description } from "@/components/ui/description";
import { Hero } from "@/components/ui/hero";
import { Servizi } from "@/components/ui/servizi";
import { Reviews } from "@/components/ui/reviews";
import { CtaFooter } from "@/components/ui/cta-footer";
import { GalleryWithThumbnails } from "@/components/ui/galleryWithThumbnails";
import { House, ShowerHead, HousePlug, ThermometerSun, WandSparkles, Recycle, Droplets, LayoutDashboard, PaintRoller, PencilRuler, SquareMousePointer } from "lucide-react";
import { Metadata } from "next";

const images = [
    { src: "/galleria-tint/tinteggiatura7.webp", alt: "Tinteggiatura e Controsoffitti", description: "Tinteggiatura e Controsoffitti" },
    { src: "/galleria-tint/tinteggiatura5.webp", alt: "Tinteggiatura e Controsoffitti", description: "Tinteggiatura e Controsoffitti" },
    { src: "/galleria-tint/tinteggiatura6.webp", alt: "Tinteggiatura e Controsoffitti", description: "Tinteggiatura e Controsoffitti" },
    { src: "/galleria-tint/tinteggiatura8.webp", alt: "Tinteggiatura e Controsoffitti", description: "Tinteggiatura e Controsoffitti" },
    { src: "/galleria-tint/tinteggiatura9.webp", alt: "Tinteggiatura e Controsoffitti", description: "Tinteggiatura e Controsoffitti" },
    { src: "/galleria-tint/tinteggiatura10.webp", alt: "Tinteggiatura e Controsoffitti", description: "Tinteggiatura e Controsoffitti" },
    { src: "/galleria-tint/tinteggiatura1.webp", alt: "Tinteggiatura e Controsoffitti", description: "Tinteggiatura e Controsoffitti" },
    { src: "/galleria-tint/tinteggiatura2.webp", alt: "Tinteggiatura e Controsoffitti", description: "Tinteggiatura e Controsoffitti" },
    { src: "/galleria-tint/tinteggiatura3.webp", alt: "Tinteggiatura e Controsoffitti", description: "Tinteggiatura e Controsoffitti" },
    { src: "/galleria-tint/tinteggiatura4.webp", alt: "Tinteggiatura e Controsoffitti", description: "Tinteggiatura e Controsoffitti" },

]

const services = [
    {
        title: "Tinteggiatura interni ed esterni",
        description: "Rivoluziona abitazioni, uffici, locali commerciali scegliendo fra una asta gamma di colori e finiture.",
        icon: <PaintRoller size={70} className='text-primary' />
    },
    {
        title: "Rasatura e preparazione pareti",
        description: "Rasatura, stuccatura e preparazione delle superfici per garantirti un lavoro uniforme e resistente.",
        icon: <SquareMousePointer size={70} className='text-primary' />
    },
    {
        title: "Controsoffitti in cartongesso",
        description: "L’intervento perfetto per migliorare i tuoi ambienti, coprendo ogni inestetismo.",
        icon: <PencilRuler size={70} className='text-primary' />
    },
    {
        title: "Controsoffitti isolanti",
        description: "Combinazione di funzionalità ed estetica per migliorare acustica, isolamento termico ed efficienza energetica.",
        icon: <Droplets size={70} className='text-primary' />
    },
]

export const metadata: Metadata = {
    title: "Tinteggiatura e controsoffitti",
    description: "Tinteggiatura e controsoffitti professionali per interni ed esterni",
};

export default function RifacimentoBagno() {
    return (
        <main className="">
            <Hero
                src="/hero2-ristr.webp"
                title="Tinteggiatura e controsoffitti"
                subtitle="Una ventata di fresco per la tua casa"
            />
            <div className="lg:px-24">
                <Description
                    title="Tinteggiatura e controsoffitti"
                    subtitle="Rinnova i tuoi ambienti con la tua personalità."
                    firstText="Il miglior modo per svoltare in fretta i tuoi spazi è sicuramente la tinteggiatura. Grazie alla preparazione delle pareti data dalla rasatura, dalla stuccatura professionale e dall’uso delle migliori vernici un ambiente può totalmente cambiare: che tu voglia dare carattere alla tua casa o anche solo dare una rinfrescata dopo i mesi invernali, questo è ciò che fa per te. "
                    secondText="Ma non solo, anche un controsoffitto può incredibilmente migliorare la tua casa: è perfetto per il miglioramento dell’isolamento acustico e termico, ma anche per nascondere qualche impianto non troppo bello da vedere e creare effetti di design. 
Basta poco per poter Riabitare la tua casa. "
                />
                <GalleryWithThumbnails images={images} title="I nostri lavori" subtitle="Tinteggiature e controsoffitti professionali" description="Precisione, materiali di pregio, attenzione ai dettagli sono gli ingredienti che fanno si che la qualità delle nostre tinteggiature e dei nostri controsoffitti sia impareggiabile.
Per te finiture impeccabili, colori resistenti e soluzioni personalizzate, per garantirti bellezza e soprattutto efficienza e durata nel tempo. " />
                <Servizi services={services} />
                <CtaFooter img="/galleria-tint/tinteggiatura3.webp" />
            </div>
        </main>
    );
}

