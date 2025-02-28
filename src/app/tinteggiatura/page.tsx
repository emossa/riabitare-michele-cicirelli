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
        description: "Verniciature professionali per abitazioni, uffici e locali commerciali, con una vasta gamma di colori e finiture per adattarsi a ogni ambiente.",
        icon: <PaintRoller size={70} className='text-primary' />
    },
    {
        title: "Rasatura e preparazione pareti",
        description: "Interventi di rasatura, stuccatura e preparazione delle superfici per garantire una tinteggiatura uniforme e duratura.",
        icon: <SquareMousePointer size={70} className='text-primary' />
    },
    {
        title: "Controsoffitti in cartongesso",
        description: "Realizzazione di controsoffitti in cartongesso per migliorare l’isolamento, nascondere impianti o creare giochi di luci e forme.",
        icon: <PencilRuler size={70} className='text-primary' />
    },
    {
        title: "Controsoffitti isolanti",
        description: " Installazione di controsoffitti con materiali isolanti per migliorare l’acustica e l’efficienza energetica degli ambienti, combinando funzionalità ed estetica.",
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
                subtitle="Offriamo tinteggiature professionali per interni ed esterni, garantendo precisione, utilizzo di vernici di qualità e finiture personalizzate."
            />
            <div className="lg:px-24">
                <Description
                    title="Tinteggiatura e controsoffitti"
                    subtitle="Rinnova il tuo spazio con stile"
                    firstText="Il nostro servizio di tinteggiatura garantisce pareti perfettamente rifinite grazie all'uso di vernici di alta qualità e tecniche professionali. Ci occupiamo della preparazione delle superfici, con rasature e stuccature che assicurano un risultato uniforme e duraturo. Offriamo inoltre una vasta gamma di colori e finiture per adattarci a qualsiasi esigenza estetica."
                    secondText="Realizziamo strutture in cartongesso o materiali specifici, ideali per migliorare l’isolamento acustico e termico, nascondere impianti e creare effetti di design. L'installazione è curata nei minimi dettagli, con soluzioni personalizzate che coniugano estetica e funzionalità."
                />
                <GalleryWithThumbnails images={images} title="I nostri lavori" subtitle="Tinteggiature e controsoffitti professionali" description="La qualità del nostro servizio di tinteggiatura e controsoffitto si basa su precisione, materiali di pregio e attenzione ai dettagli. Offriamo finiture impeccabili, con colori resistenti e soluzioni personalizzate. I controsoffitti sono realizzati per garantire estetica, isolamento e durata nel tempo, utilizzando tecniche avanzate e un’installazione accurata per risultati professionali." />
                <Servizi services={services} />
                <CtaFooter img="/galleria-tint/tinteggiatura3.webp" />
            </div>
        </main>
    );
}

