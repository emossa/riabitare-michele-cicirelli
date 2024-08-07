import { Description } from "@/components/ui/description";
import { Hero } from "@/components/ui/hero";
import { Gallery } from "@/components/ui/gallery";
import { Servizi } from "@/components/ui/servizi";
import { Reviews } from "@/components/ui/reviews";
import Image from "next/image";
import { CtaFooter } from "@/components/ui/cta-footer";

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
          firstText={`Ristrutturazioni Bari S.r.l. è un'azienda leader nel settore delle ristrutturazioni
             e del restauro edilizio nella provincia di Bari. Con oltre 20 anni di esperienza, la nostra
              impresa si distingue per l'attenzione ai dettagli.`}
          secondText={`Offriamo una gamma completa di servizi che spaziano dalla progettazione e
             consulenza iniziale alla realizzazione chiavi in mano di ristrutturazioni di interni ed esterni,
              risanamenti strutturali e riqualificazioni energetiche.`}
        />
        <Gallery images={images} />
        <Servizi />
        <Reviews />
        <CtaFooter />
      </div>
    </main>
  );
}

