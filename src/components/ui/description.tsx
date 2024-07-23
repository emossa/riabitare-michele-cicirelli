import React from 'react'
export const Description = () => {
    return (
        <div className="flex my-10 lg:my-24 flex-col lg:flex-row px-10 lg:px-0">
            <div className="lg:w-1/2 mt-10 flex items-center justify-center">
                <div className='relative flex h-24 items-end'>
                    <div className="absolute top-0 left-0 w-32 h-4 bg-gray-200"></div>
                    <h2 className="text-4xl font-bold mt-8">Riabitare Ristrutturazioni</h2>
                </div>

            </div>
            <div className="lg:w-1/2 flex items-center justify-center">
                <div className='lg:max-w-lg'>
                    <p className="mt-4">
                        Ristrutturazioni Bari S.r.l. è un'azienda leader nel settore delle ristrutturazioni e del restauro edilizio nella provincia di Bari. Con oltre 20 anni di esperienza, la nostra impresa si distingue per l'attenzione ai dettagli.
                    </p>
                    <p className="mt-4">
                        Offriamo una gamma completa di servizi che spaziano dalla progettazione e consulenza iniziale alla realizzazione chiavi in mano di ristrutturazioni di interni ed esterni, risanamenti strutturali e riqualificazioni energetiche.
                    </p>
                </div>
            </div>
        </div>
    )
}



