import { Description } from "@/components/ui/description";
import { Hero } from "@/components/ui/hero";
import { Servizi } from "@/components/ui/servizi";
import { Reviews } from "@/components/ui/reviews";
import { CtaFooter } from "@/components/ui/cta-footer";
import { GalleryWithThumbnails } from "@/components/ui/galleryWithThumbnails";
import { House, ShowerHead, HousePlug, ThermometerSun, WandSparkles, Recycle, Droplets, LayoutDashboard, HousePlus, PaintRoller, Zap } from "lucide-react";

const images = [
    {
        src: "/galleria-ristr/galleria-servizio-ristr1.webp",
        description: "Ristrutturazione chiavi in mano",
        alt: "Ristrutturazione chiavi in mano"
    },
    {
        src: "/galleria-ristr/galleria-servizio-ristr2.webp",
        description: "Ristrutturazione chiavi in mano",
        alt: "Ristrutturazione chiavi in mano"
    },
    {
        src: "/galleria-ristr/galleria-servizio-ristr3.webp",
        description: "Ristrutturazione chiavi in mano",
        alt: "Ristrutturazione chiavi in mano"
    },
    {
        src: "/galleria-ristr/galleria-servizio-ristr4.webp",
        description: "Ristrutturazione chiavi in mano",
        alt: "Ristrutturazione chiavi in mano"
    },
    {
        src: "/galleria-ristr/galleria-servizio-ristr5.webp",
        description: "Ristrutturazione chiavi in mano",
        alt: "Ristrutturazione chiavi in mano"
    },
    {
        src: "/galleria-ristr/galleria-servizio-ristr6.webp",
        description: "Ristrutturazione chiavi in mano",
        alt: "Ristrutturazione chiavi in mano"
    }
]

const services = [
    {
        title: "Ristrutturazione completa",
        description: "Offriamo un rifacimento totale degli spazi interni, gestendo impianti elettrici, idraulici, pavimenti e finiture, per trasformare ogni ambiente in uno spazio moderno e funzionale.",
        icon: <Recycle size={70} className='text-primary' />
    },
    {
        title: "Tinteggiatura e rasatura",
        description: "Eseguiamo lavori di preparazione delle pareti con rasatura professionale e tinteggiatura di alta qualità, garantendo una superficie liscia e finiture estetiche impeccabili.",
        icon: <PaintRoller size={70} className='text-primary' />
    },
    {
        title: "Rifacimento tetto",
        description: "Interveniamo sulla sostituzione o riparazione del tetto, migliorando l'isolamento termico e proteggendo la casa dalle intemperie, con materiali e tecniche all’avanguardia.",
        icon: <HousePlus size={70} className='text-primary' />
    },
    {
        title: "Ristrutturazione energetica",
        description: "Realizziamo interventi per ottimizzare l'efficienza energetica della tua casa, inclusi isolamento termico e aggiornamenti degli impianti, per ridurre consumi e costi.",
        icon: <Zap size={70} className='text-primary' />
    },
]

export default function RifacimentoBagno() {
    return (
        <main className="">
            <Hero
                src="/hero-ristr.webp"
                title="Ristrutturazione chiavi in mano"
                subtitle="Offriamo un servizio completo e personalizzato, dalla progettazione alla consegna."
            />
            <div className="lg:px-24">
                <Description
                    title="Ristrutturazione chiavi in mano"
                    subtitle="Trasformiamo la tua casa senza stress."
                    firstText="Il nostro servizio di ristrutturazione chiavi in mano gestisce ogni aspetto del progetto, dalla progettazione alla realizzazione finale. Ci occupiamo di demolizioni, impianti, pavimentazioni, infissi e finiture, garantendo qualità e rispetto delle tempistiche concordate, così il cliente non deve preoccuparsi di coordinare i vari professionisti."
                    secondText="Collaboriamo con architetti e artigiani qualificati per trasformare gli spazi secondo i desideri del cliente. Ogni dettaglio, dall'idea iniziale alla consegna, viene gestito da noi, offrendo soluzioni personalizzate e senza imprevisti."
                />
                <GalleryWithThumbnails images={images} title="I nostri lavori" subtitle="Trasformiamo la tua casa senza stress." description="La qualità del nostro servizio di ristrutturazione chiavi in mano si riflette nell'attenzione ai dettagli, nell'uso di materiali eccellenti e nella collaborazione con professionisti esperti. Garantiamo lavori eseguiti a regola d'arte, rispettando tempi e budget, offrendo soluzioni personalizzate che rispondono alle esigenze specifiche di ogni cliente." />
                <Servizi services={services} />
                <CtaFooter img="/hero2-ristr.webp" />
            </div>
        </main>
    );
}

