import Image from 'next/image'
export const Servizi = () => {
    return (
        <>
            <div className="flex w-full items-center justify-center gap-10 lg:gap-20 mt-24">
                <div className="h-[1px] bg-primary w-full lg:max-w-[30%]"></div>
                <span className="text-primary text-4xl font-bold mx-4">Servizi</span>
                <div className="h-[1px] bg-primary w-full lg:max-w-[30%]"></div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between mt-14 px-10 items-center lg:items-start flex-wrap">
                <div className="flex flex-col items-center max-w-[350px] border px-10 py-5 shadow-xl min-h-[450px] mt-5">
                    <Image src="/ristrutturazione.png" alt="" width={150} height={150} />
                    <div>
                        <p className="text-2xl font-bold mt-8">Ristrutturazione chiavi in mano</p>
                        <p className="text-lg">
                            {"Trasformiamo la tua casa senza stress. Offriamo un servizio completo e personalizzato, dalla progettazione alla consegna."}
                        </p>
                    </div>
                    <button className="bg-primary text-white px-4 py-2 mt-4">Scopri di più</button>
                </div>
                <div className="flex flex-col items-center max-w-[350px] border px-10 py-5 shadow-xl min-h-[450px] mt-5">
                    <Image src="/bagni.png" alt="" width={150} height={150} />
                    <div>
                        <p className="text-2xl font-bold mt-8" >Rifacimento del bagno</p>
                        <p className="text-lg">
                            {"Rinnova il tuo spazio con stile. Offriamo design moderno, materiali di alta qualità e installazione professionale per un bagno funzionale e elegante."}
                        </p>
                    </div>
                    <button className="bg-primary text-white px-4 py-2 mt-4">Scopri di più</button>
                </div>
                <div className="flex flex-col items-center max-w-[350px] border px-10 py-5 shadow-xl min-h-[450px] mt-5">
                    <Image src="/elettrico.png" alt="" width={150} height={150} />
                    <div>
                        <p className="text-2xl font-bold mt-8">Impianti elettrici</p>
                        <p className="text-lg">
                            {"Sicurezza e efficienza. Installiamo nuovi sistemi con materiali certificati, migliorando la funzionalità e la conformità alle normative."}
                        </p>
                    </div>
                    <button className="bg-primary text-white px-4 py-2 mt-4">Scopri di più</button>
                </div>
                <div className="flex flex-col items-center max-w-[350px] border px-10 py-5 shadow-xl min-h-[450px] mt-5">
                    <Image src="/termico.png" alt="" width={150} height={150} />
                    <div>
                        <p className="text-2xl font-bold mt-8">Impianti termici</p>
                        <p className="text-lg">
                            {"Comfort e risparmio energetico. Installiamo sistemi efficienti e moderni per garantire calore omogeneo e riduzione dei consumi."}
                        </p>
                    </div>
                    <button className="bg-primary text-white px-4 py-2 mt-4">Scopri di più</button>
                </div>

            </div>
        </>
    )
}