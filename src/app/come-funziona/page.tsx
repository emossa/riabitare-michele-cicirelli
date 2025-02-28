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
                subtitle="Ecco le varie fasi del nostro lavoro, dalla progettazione alla realizzazione."
            />
            <div className="lg:px-24">
                <DescriptionWithImage
                    src="/fasi1.webp"
                    alt="Sopralluogo e pianificazione"
                    title="Sopralluogo e pianificazione"
                    subtitle="Il primo passo per trasformare la tua casa"
                    description="La prima fase prevede un sopralluogo sul sito per valutare le condizioni iniziali e discutere le esigenze del cliente. Viene definito un piano dettagliato, inclusi budget, tempistiche e materiali da utilizzare. Viene inoltre sviluppato un progetto tecnico in linea con le richieste."
                    secondDescription="Il cliente riceve un preventivo dettagliato e un piano di lavoro, per avere un'idea chiara di come si svolgeranno i lavori e quali saranno i costi."
                    orientation="left"
                />
                <DescriptionWithImage
                    src="/fasi2.webp"
                    alt="Demolizione e preparazione"
                    title="Demolizione e preparazione"
                    subtitle="Prepariamo gli spazi per la ristrutturazione"
                    description="In questa fase, si procede alla rimozione delle strutture esistenti che devono essere sostituite, come muri, pavimenti, impianti idraulici o elettrici. La preparazione dello spazio è fondamentale per garantire un lavoro ordinato e senza intoppi."
                    secondDescription="Vengono effettuati interventi di ripristino e messa in sicurezza, per preparare l'ambiente alla fase successiva."
                />
                <DescriptionWithImage
                    src="/fasi3.webp"
                    alt="Lavori strutturali e impiantistici"
                    title="Lavori strutturali e impiantistici"
                    subtitle="Realizziamo le migliorie necessarie alla struttura e agli impianti"
                    description="Si passa all'installazione dei nuovi impianti (elettrici, idraulici, di climatizzazione) e all'esecuzione dei lavori strutturali come la realizzazione di pareti divisorie o controsoffitti. Tutto viene eseguito in conformità con le normative vigenti."
                    secondDescription="I materiali utilizzati sono di alta qualità e rispettano gli standard di sicurezza, per garantire un risultato duraturo e affidabile."
                    orientation="left"
                />
                <DescriptionWithImage
                    src="/fasi4.webp"
                    alt="Finiture e consegna"
                    title="Finiture e consegna"
                    subtitle="Ultimiamo i lavori e consegniamo la tua casa rinnovata"
                    description="In questa fase finale si realizzano le finiture, che includono la tinteggiatura, la posa di pavimenti e rivestimenti, l'installazione di infissi e complementi d'arredo. Una volta completati i lavori, si effettua un controllo finale prima della consegna chiavi in mano al cliente, assicurando che tutto sia conforme al progetto iniziale."
                    secondDescription="Il cliente riceve la casa ristrutturata e pronta per essere abitata, con la garanzia di un lavoro eseguito a regola d'arte e rispettando le tempistiche concordate."
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

