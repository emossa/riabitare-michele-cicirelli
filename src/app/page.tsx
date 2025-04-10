import { Description } from "@/components/ui/description";
import { Hero } from "@/components/ui/hero";
import { Gallery } from "@/components/ui/gallery";
import { Servizi } from "@/components/ui/servizi";
import { Reviews } from "@/components/ui/reviews";
import { CtaFooter } from "@/components/ui/cta-footer";
import { House, ShowerHead, PaintRoller } from "lucide-react";
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
    description: "Un servizio completo e personalizzato, dalla progettazione alla consegna.",
    icon: <House size={70} className='text-primary mx-auto' />,
    url: '/ristrutturazione-chiavi-in-mano'
  },
  {
    title: "Rifacimento del bagno",
    description: "Trasformazione su misura per le tue esigenze.",
    icon: <ShowerHead size={70} className='text-primary mx-auto' />,
    url: '/rifacimento-bagni'
  },
  {
    title: "Tinteggiatura e controsoffitti",
    description: "Massima precisione e materiali di qualità per interni ed esterni.",
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
          firstText={`Riabitare Ristrutturazioni nasce più di vent’anni fa a Toritto con l’obiettivo di accompagnarti passo dopo passo nella costruzione del tuo angolo di mondo (purché si trovi in provincia di Bari!). Che si tratti di case, appartamenti, locali commerciali, bagni o esterni, con il nostro servizio di ristrutturazioni chiavi in mano non sarai mai solo.`}
          secondText={`L’attenzione ai dettagli e ai materiali è importante tanto quanto la tua fiducia, garantita dal supporto continuo in tutte le fasi del viaggio: siamo con te dai sopralluoghi, alla progettazione e ai lavori, discutendo sempre in modo chiaro di prezzi, pagamenti, tempistiche e pratiche burocratiche, restando in contatto con te per garantire assistenza prima, durante e dopo la fine dei lavori. Ti assicuriamo un lavoro di qualità e nessuna preoccupazione, perché ciò che più ci sta a cuore è poter dare vita ai tuoi progetti e Riabitare i tuoi spazi.`}
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

