import { Description } from "@/components/ui/description";
import { Hero } from "@/components/ui/hero";
import { Gallery } from "@/components/ui/gallery";
import { Servizi } from "@/components/ui/servizi";


export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="lg:px-24">
        <Description />
        <Gallery />
        <Servizi />


      </div>
    </main>
  );
}

