import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel"
import { ReviewCard } from "./review-card"

export const Reviews = () => {
    const reviews = [
        { name: "Marco R.", review: "Ottimo servizio, lavoro preciso e pulito. Super consigliato!" },
        { name: "Giulia B.", review: "Team professionale e affidabile. Ristrutturazione perfetta!" },
        { name: "Luca V.", review: "Tempi rispettati e ottima qualità. Bravi!" },
        { name: "Anna N.", review: "Molto soddisfatto, lavori eseguiti a regola d’arte." },
        { name: "Paolo B.", review: "Preventivo rispettato, nessuna sorpresa. Eccellente!" },
        { name: "Sara G.", review: "Grande attenzione ai dettagli. Consigliatissimi!" },
        { name: "Francesco R.", review: "Esperienza positiva, personale cordiale e competente." },
        { name: "Laura V.", review: "Hanno superato le mie aspettative. Complimenti!" },
        { name: "Davide A.", review: "Risultato finale impeccabile. Da provare!" },
        { name: "Chiara G.", review: "Serietà e professionalità. Un'impresa top!" },
        { name: "Matteo M.", review: "Tempi brevi e lavoro di qualità. Fantastici!" },
        { name: "Elena T.", review: "Precisione e pulizia durante i lavori. Molto bravi!" },
        { name: "Giorgio A.", review: "Servizio clienti eccellente. Molto soddisfatto!" },
        { name: "Maria C.", review: "Ristrutturazione senza stress. Team eccezionale!" },
        { name: "Alessandro M.", review: "Ottimo rapporto qualità-prezzo. Affidabili!" },
        { name: "Roberta A.", review: "Lavori terminati prima del previsto. Straordinari!" },
        { name: "Simone V.", review: "Hanno trasformato la mia casa. Grazie!" },
        { name: "Martina O.", review: "Competenti e disponibili. Consiglio vivamente!" },
        { name: "Riccardo B.", review: "Massima serietà e professionalità. Perfetti!" },
        { name: "Valentina B.", review: "Hanno fatto un lavoro incredibile. Molto contento!" }
    ];

    return (
        <>
            <div className="flex w-full items-center justify-center gap-10 lg:gap-20 mt-24">
                <div className="h-[1px] bg-primary w-full lg:max-w-[30%]"></div>
                <span className="text-primary text-4xl font-bold mx-4">Dicono di noi</span>
                <div className="h-[1px] bg-primary w-full lg:max-w-[30%]"></div>
            </div>
            <Carousel className="w-full mt-10 px-10">
                <CarouselContent className="flex">
                    {reviews.map((review, index) => (
                        <CarouselItem key={index} className=" basis-9/12 lg:basis-3/12">
                            <ReviewCard name={review.name} review={review.review} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext className='hidden lg:block' />
                <CarouselPrevious className='hidden lg:block' />
            </Carousel>
        </>
    )
}