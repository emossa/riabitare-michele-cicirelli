import { Description } from "@/components/ui/description";
import { Hero } from "@/components/ui/hero";
import { Servizi } from "@/components/ui/servizi";
import { Reviews } from "@/components/ui/reviews";
import { CtaFooter } from "@/components/ui/cta-footer";
import { GalleryWithThumbnails } from "@/components/ui/galleryWithThumbnails";
import { House, ShowerHead, HousePlug, ThermometerSun, WandSparkles, Recycle, Droplets, LayoutDashboard, HousePlus, PaintRoller, Zap } from "lucide-react";
import { Metadata } from "next";

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
        title: "Trasformazione totale degli spazi",
        description: "Impianti elettrici, idraulici, pavimenti e finiture.",
        icon: <Recycle size={70} className='text-primary' />
    },
    {
        title: "Tinteggiatura e rasatura",
        description: "Risultato impeccabile garantito dal lavoro di rasatura e preparazione delle superfici e vernici di qualità.",
        icon: <PaintRoller size={70} className='text-primary' />
    },
    {
        title: "Rifacimento tetto",
        description: "Sostituzione o riparazione del tetto, miglioramento dell’isolamento termico e protezione della tua casa dalle intemperie e dai segni del tempo.",
        icon: <HousePlus size={70} className='text-primary' />
    },
    {
        title: "Ristrutturazione energetica",
        description: " Ottimizzazione energetica e aggiornamento degli impianti per ridurre consumi e costi.",
        icon: <Zap size={70} className='text-primary' />
    },
]

export const metadata: Metadata = {
    title: "Ristrutturazione chiavi in mano",
    description: "Trasformiamo la tua casa senza stress.",
};

export default function RifacimentoBagno() {
    return (
        <main className="">
            <Hero
                src="/hero-ristr.webp"
                title="Ristrutturazione chiavi in mano"
                subtitle="Con te dal progetto alla consegna"
            />
            <div className="lg:px-24">
                <Description
                    title="Ristrutturazione chiavi in mano"
                    subtitle="Riabita i tuoi spazi."
                    firstText="Di cosa hai bisogno per dar vita ad una casa che ti somiglia?
Demolizioni, impianti, pavimenti, infissi e finiture non saranno più una tua preoccupazione, siamo qui per questo: con il nostro servizio chiavi in mano tutto ciò che dovrai fare sarà rilassarti, perché al resto ci pensiamo noi."
                    secondText="Con un unico interlocutore sempre al tuo fianco ci premuriamo di seguirti sempre, garantendoti progettazione su misura, trasparenza, tempi certi e massima cura dei dettagli, in collaborazione con architetti e artigiani qualificati."
                />
                <GalleryWithThumbnails images={images} title="I nostri lavori" subtitle="Trasformiamo la tua casa con passione e concretezza." description="La nostra missione è far in modo che l’amore per il nostro lavoro si rifletta sempre nel risultato finale, e per far ciò ci assicuriamo di utilizzare solo materiali eccellenti e collaborare con professionisti esperti nel settore, lavorando con cura e precisione, nel rispetto di tempistiche e costi, concordati secondo le tue esigenze. " />
                <Servizi services={services} />
                <CtaFooter img="/hero2-ristr.webp" />
            </div>
        </main>
    );
}

