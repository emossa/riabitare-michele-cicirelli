import Image from 'next/image'
import React from 'react'
export const Hero = () => {
    return (
        <>
            <div className="w-full h-[80vh] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />
                <Image src="/hero.webp" alt="Hero" width={1920} height={1080} className='absolute top-0 left-0 w-full h-full object-cover' />
                <div className="absolute inset-0 bg-black opacity-50" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                        <h1 className="text-4xl font-bold">Riabitare Ristrutturazioni</h1>
                        <p className="text-lg">di Michele Cicirelli</p>
                        <button className="bg-primary text-white px-4 py-2 rounded-lg mt-4">Richiedi un preventivo</button>
                    </div>
                </div>
            </div>
        </>
    )
}

