import { Description } from "@/components/ui/description";
import { Hero } from "@/components/ui/hero";
import { Gallery } from "@/components/ui/gallery";
import { Servizi } from "@/components/ui/servizi";
import { Reviews } from "@/components/ui/reviews";
import Image from "next/image";
import { CtaFooter } from "@/components/ui/cta-footer";
import { House, ShowerHead, HousePlug, ThermometerSun, PaintRoller } from "lucide-react";
import { url } from "inspector";
import { UltimiLavori } from "@/components/ui/ultimi-lavori";
import { Metadata } from "next";

const images = [
  {
    src: "/chiavi-in-mano-g.webp",
    description: "I lavori svolti comprendono la rasatura e stuccatura delle pareti, la preparazione per la pittura, l'installazione di un condizionatore d'aria e la ventilazione della stanza.",
    alt: "Ristrutturazione chiavi in mano"
  },
  {
    src: "/bagno-g.webp",
    description: "Il bagno ristrutturato presenta piastrelle bianche lucide alle pareti e scure a spina di pesce sul pavimento. Sono stati installati una cabina doccia in vetro, una vasca moderna, un lavabo sospeso, rubinetteria cromata, specchio con luci LED, scaffali metallici, ventilazione e dettagli decorativi.",
    alt: "Rifacimento Bagno"
  },
  {
    src: "/impianti-elettrici-g.webp",
    description: "Sono stati svolti lavori di impiantistica elettrica, con l'installazione di cavi elettrici all'interno di guaine protettive. Le guaine sono state posizionate ordinatamente lungo il soffitto e le pareti, garantendo protezione e organizzazione dei cavi elettrici.",
    alt: "Rifacimento impianto elettrico"
  },
  {
    src: "/impianto-termico-g.webp",
    description: "È stato installato un impianto termico con riscaldamento a pavimento. Tubazioni per l'acqua calda sono state posizionate sotto il pavimento, distribuite uniformemente per garantire un riscaldamento efficiente e uniforme. Le tubazioni sono state coperte con un massetto autolivellante prima di posare la pavimentazione.",
    alt: "Impianto termico a pavimento"
  }
]

const services = [
  {
    title: "Ristrutturazione chiavi in mano",
    description: "Trasformiamo la tua casa senza stress. Offriamo un servizio completo e personalizzato, dalla progettazione alla consegna.",
    icon: <House size={70} className='text-primary mx-auto' />,
    url: '/ristrutturazione-chiavi-in-mano'
  },
  {
    title: "Rifacimento del bagno",
    description: "Rinnova il tuo spazio con stile. Offriamo design moderno, materiali di alta qualità e installazione professionale per un bagno funzionale e elegante.",
    icon: <ShowerHead size={70} className='text-primary mx-auto' />,
    url: '/rifacimento-bagni'
  },
  {
    title: "Tinteggiatura e controsoffitti",
    description: "Offriamo tinteggiature professionali per interni ed esterni, garantendo precisione e utilizzo di vernici di qualità.",
    icon: <PaintRoller size={70} className='text-primary mx-auto' />,
    url: '/tinteggiatura'
  }
]

export const metadata: Metadata = {
  title: "Riabitare Ristrutturazioni",
  description: "Trasformiamo la tua casa senza stress.",
};

export default function Home() {
  return (
    <main className="">
      <Hero
        src="/hero.webp"
        title="Riabitare Ristrutturazioni"
        subtitle="di Michele Cicirelli"
      />
      <div className="lg:px-24">
        <Description
          title="Riabitare Ristrutturazioni"
          subtitle="di Michele Cicirelli"
          firstText={`Riabitare Ristrutturazioni è un' azienda con oltre 20 anni di esperienza nel settore delle ristrutturazioni chiavi in mano di abitazioni, bagni, attività commerciali ed esterni. La nostra impresa si distingue per il rapporto di fiducia con la clientela e per le ristrutturazioni di pregio con l’ attenzione ai dettagli e l’ utilizzo di materiali e finiture di qualità.`}
          secondText={`Inoltre, mette a disposizione dei suoi clienti, personale qualificato e tecnici a supporto di tutto il processo: dai sopralluoghi preliminari, alla fase di preventivazione dei lavori, alla progettazione e scelta dei materiali, al disbrigo delle pratiche edilizie, alla realizzazione del progetto di ristrutturazione, pagamenti personalizzati ed assistenza pre, durante e post lavori.`}
        />
        <Gallery images={images} />
        <Servizi services={services} />
        <UltimiLavori />
        <Reviews />
        <CtaFooter img="/hero.webp" />
      </div>
    </main>
  );
}

