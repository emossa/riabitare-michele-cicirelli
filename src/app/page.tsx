import { Description } from "@/components/ui/description";
import { Hero } from "@/components/ui/hero";
import { Gallery } from "@/components/ui/gallery";
import { Servizi } from "@/components/ui/servizi";
import { Reviews } from "@/components/ui/reviews";
import Image from "next/image";
import { CtaFooter } from "@/components/ui/cta-footer";


export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="lg:px-24">
        <Description />
        <Gallery />
        <Servizi />
        <Reviews />
        <CtaFooter />
      </div>
    </main>
  );
}

