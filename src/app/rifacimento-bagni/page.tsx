import { Description } from "@/components/ui/description";
import { Hero } from "@/components/ui/hero";
import { Gallery } from "@/components/ui/gallery";
import { Servizi } from "@/components/ui/servizi";
import { Reviews } from "@/components/ui/reviews";
import Image from "next/image";
import { CtaFooter } from "@/components/ui/cta-footer";
import { GalleryWithThumbnails } from "@/components/ui/galleryWithThumbnails";

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

export default function RifacimentoBagno() {
    return (
        <main className="">
            <Hero
                src="/bagno-g.webp"
                title="Rifacimento Bagno"
                subtitle="Ristrutturiamo il tuo bagno in modo completo."
            />
            <div className="lg:px-24">
                <Description
                    title="Rifacimento Bagno"
                    subtitle="Ristrutturiamo il tuo bagno in modo completo."
                    firstText="l servizio di rifacimento del bagno offerto da Riabitare Ristrutturazioni inizia con una consulenza personalizzata. Un tecnico effettua un sopralluogo per valutare lo stato attuale del bagno e discutere con il cliente le esigenze e i desideri. Successivamente, viene sviluppato un progetto su misura che include il nuovo layout, la scelta dei materiali, i sanitari e i rivestimenti. Viene poi fornito un preventivo dettagliato con i costi e i tempi di realizzazione."
                    secondText="Una volta approvato il progetto, Riabitare Ristrutturazioni passa alla fase operativa: demolizione del vecchio bagno, installazione degli impianti idraulici ed elettrici, posa dei nuovi rivestimenti e installazione di sanitari e arredi scelti. L'impresa assicura un lavoro a regola d'arte, rispettando i tempi concordati. Alla fine, viene effettuata una pulizia approfondita e il bagno viene consegnato pronto all'uso, garantendo qualità e durabilità."
                />
                <GalleryWithThumbnails images={images} title="I nostri lavori" subtitle="Rivoluzioniamo il tuo bagno" description="Riabitare Ristrutturazioni utilizza materiali di alta qualità, garantendo durabilità ed estetica raffinata. Il design è moderno e funzionale, con attenzione ai dettagli e soluzioni innovative. I rivestimenti, i sanitari e gli arredi sono selezionati da brand prestigiosi, assicurando eleganza e resistenza nel tempo." />
                <Servizi />
                <Reviews />
                <CtaFooter />
            </div>
        </main>
    );
}

