import Image from 'next/image'
import React from 'react'
export const Hero = ({ src, title, subtitle }: { src: string, title?: string, subtitle?: string }) => {
    return (
        <>
            <div className="w-full h-[80vh] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />
                <Image src={src} alt="Hero" width={1920} height={1080} className='absolute top-0 left-0 w-full h-full object-cover' />
                <div className="absolute inset-0 bg-black opacity-50" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center px-10">
                        <h1 className="text-4xl font-bold">{title}</h1>
                        <p className="text-lg">{subtitle}</p>
                        <button className="bg-primary text-white px-4 py-2 mt-4">Richiedi un preventivo</button>
                    </div>
                </div>
            </div>
        </>
    )
}

