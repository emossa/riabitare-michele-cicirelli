import Image from "next/image";
import Link from "next/link";

const lavori = [
    {
        thumbnail: "/ultimi-lavori/planimetria_rosa.jpg",
        title: "Ristrutturazione completa chiavi in mano",
        description: "Ristrutturazione appartamento in Via Giulio Petroni, Bari",
        url: "/ultimi-lavori/appartamento-bari"
    },
    {
        thumbnail: "/ultimi-lavori/planimetria-palmiotto.jpg",
        title: "Ristrutturazione completa bagno",
        description: "Ristrutturazione bagno in Via Mentana, Toritto",
        url: "/ultimi-lavori/bagno-toritto"
    },
    {
        thumbnail: "/ultimi-lavori/planimetria-3d-mastromatteo.png",
        title: "Ristrutturazione locale commerciale",
        description: "Ristrutturazione completa locale commerciale in Via Enrico Toti, Bari",
        url: "/ultimi-lavori/ristrutturazione-locale-commerciale"
    },

]
export const UltimiLavori = () => {
    return (
        <>
            <div className="flex w-full items-center justify-center gap-10 lg:gap-20 mt-24">
                <div className="h-[1px] bg-primary w-full lg:max-w-[30%]"></div>
                <span className="text-primary text-4xl font-bold mx-4">Lavori recenti</span>
                <div className="h-[1px] bg-primary w-full lg:max-w-[30%]"></div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center gap-10 mt-14 px-10 items-center lg:items-start flex-wrap">
                {lavori.map((lavoro, index) => (
                    <div key={index} className="flex flex-col justify-between gap-2 max-w-[320px] px-7 py-5 border shadow-md min-h-[430px] rounded-lg bg-white">
                        <div>
                            <Image className="mx-auto my-0" src={lavoro.thumbnail} width={320} height={180} alt="" />
                            <p className="text-2xl font-bold mt-2">{lavoro.title}</p>
                            <p className="text-lg">{lavoro.description}</p>
                        </div>
                        <Link href={lavoro.url} >
                            <button className="bg-primary text-white px-4 py-2 mt-4 rounded-md">Scopri di più</button>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};