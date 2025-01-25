import Link from "next/link"

export const Servizi = ({ services }: {
    services: {
        title: string,
        description: string,
        icon: React.ReactNode,
        url?: string,
    }[]
}) => {

    return (
        <>
            <div className="flex w-full items-center justify-center gap-10 lg:gap-20 mt-24">
                <div className="h-[1px] bg-primary w-full lg:max-w-[30%]"></div>
                <span className="text-primary text-4xl font-bold mx-4">Servizi</span>
                <div className="h-[1px] bg-primary w-full lg:max-w-[30%]"></div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center gap-10 mt-14 px-10 items-center lg:items-start flex-wrap">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col max-w-[350px] border px-7 py-5 shadow-md min-h-[400px] mt-5  rounded-md">
                        {service.icon}
                        <div>
                            <p className="text-2xl font-bold mt-8">{service.title}</p>
                            <p className="text-lg">
                                {service.description}
                            </p>
                        </div>
                        {
                            service.url && (
                                <Link href={service.url} >
                                    <button className="bg-primary text-white px-4 py-2 mt-4  rounded-md">Scopri di più</button>
                                </Link>
                            )
                        }
                    </div>
                ))}
            </div>
        </>
    )
}