import { Description } from "@/components/ui/description";
import { Hero } from "@/components/ui/hero";
import { Servizi } from "@/components/ui/servizi";
import { Reviews } from "@/components/ui/reviews";
import { CtaFooter } from "@/components/ui/cta-footer";
import { GalleryWithThumbnails } from "@/components/ui/galleryWithThumbnails";
import { House, ShowerHead, HousePlug, ThermometerSun, WandSparkles, Recycle, Droplets, LayoutDashboard, HousePlus, PaintRoller, Zap } from "lucide-react";
import { DescriptionWithImage } from "@/components/ui/description-with-image";
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

export const metadata: Metadata = {
    title: "Come funziona",
    description: "Dalla progettazione alla realizzazione, il nostro lavoro è sempre allineato ai bisogni del cliente.",
};

export default function ComeFunziona() {
    return (
        <main className="">
            <Hero
                src="/hero.webp"
                title="Come funziona?"
                subtitle="Tutte le fasi che devi conoscere"
            />
            <div className="lg:px-24">
                <DescriptionWithImage
                    src="/fasi1.webp"
                    alt="Sopralluogo e pianificazione"
                    title="Sopralluogo e pianificazione"
                    subtitle="Il primo passo con e per Riabitare"
                    description="Per prima cosa si procede con una valutazione del tuo spazio: un tecnico analizza le condizioni iniziali della tua casa, del tuo bagno, del tuo locale commerciale o di ciò che vuoi trasformare. "
                    secondDescription="A seconda delle tue esigenze si definisce il piano: budget, tempistiche e materiali su misura per te, in modo da poter stabilire progetto tecnico e preventivo, grazie ai quali saprai esattamente come si svolgeranno i lavori e i relativi costi."
                    orientation="left"
                />
                <DescriptionWithImage
                    src="/fasi2.webp"
                    alt="Demolizione e preparazione"
                    title="Demolizione e preparazione"
                    subtitle="Fare spazio al nuovo"
                    description="La preparazione dello spazio è essenziale per garantire un lavoro senza imprevisti."
                    secondDescription="Che si tratti di pareti, pavimenti o impianti, si procede con la rimozione di tutto ciò che deve essere sostituito e soprattutto è il momento di messa in sicurezza l’ambiente, affinché sia pronto per i lavori."
                />
                <DescriptionWithImage
                    src="/fasi3.webp"
                    alt="Lavori strutturali e impiantistici"
                    title="Lavori strutturali e impiantistici"
                    subtitle="Ripartire dalle fondamenta"
                    description="Affinché la trasformazione avvenga è necessario occuparsi anche di ciò che non si vede: è il momento di pensare a tutti gli impianti (elettrici, idraulici e di climatizzazione). Si passa poi a pareti e controsoffitti, con un occhio sempre attento al rispetto delle normative. "
                    secondDescription="Ogni dettaglio è importante perché crediamo che sia grazie alla cura e all’attenzione ai materiali che si possa ottenere un risultato sicuro, solido e duraturo e che possa coniugare funzionalità e comfort. "
                    orientation="left"
                />
                <DescriptionWithImage
                    src="/fasi4.webp"
                    alt="Finiture e consegna"
                    title="Finiture e consegna"
                    subtitle="La fine dei lavori è per te un nuovo inizio"
                    description="Eccoci arrivati all’ultima fase! 
Tinteggiatura, pavimenti, rivestimenti e installazione degli infissi sono gli ultimi ritocchi che ti separano dal Riabitare il tuo progetto, ma prima un po’ di pazienza per il controllo qualità."
                    secondDescription="È importante per noi garantirti un risultato impeccabile, per questo ci premuriamo di verificare il funzionamento di ogni cosa e la precisione di ogni elemento con minuzia (e, lo ammettiamo, anche un po’ di pignoleria). 
Ora che è tutto pronto, non ti resta che goderti il risultato."
                />
                {/* <Description
                    title="Ristrutturazione chiavi in mano"
                    subtitle="Trasformiamo la tua casa senza stress."
                    firstText="Il nostro servizio di ristrutturazione chiavi in mano gestisce ogni aspetto del progetto, dalla progettazione alla realizzazione finale. Ci occupiamo di demolizioni, impianti, pavimentazioni, infissi e finiture, garantendo qualità e rispetto delle tempistiche concordate, così il cliente non deve preoccuparsi di coordinare i vari professionisti."
                    secondText="Collaboriamo con architetti e artigiani qualificati per trasformare gli spazi secondo i desideri del cliente. Ogni dettaglio, dall'idea iniziale alla consegna, viene gestito da noi, offrendo soluzioni personalizzate e senza imprevisti."
                /> */}
                {/* <GalleryWithThumbnails images={images} title="I nostri lavori" subtitle="Trasformiamo la tua casa senza stress." description="La qualità del nostro servizio di ristrutturazione chiavi in mano si riflette nell'attenzione ai dettagli, nell'uso di materiali eccellenti e nella collaborazione con professionisti esperti. Garantiamo lavori eseguiti a regola d'arte, rispettando tempi e budget, offrendo soluzioni personalizzate che rispondono alle esigenze specifiche di ogni cliente." /> */}
                {/* <Servizi services={services} /> */}
                <CtaFooter img="/hero2-ristr.webp" />
            </div>
        </main>
    );
}

