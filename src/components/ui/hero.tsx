import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export const Hero = ({ src, title, subtitle, width, height, imageClassName }: { src: string, title?: string, subtitle?: string, width?: number, height?: number, imageClassName?: string }) => {
    return (
        <>
            <div className="w-full h-[80vh] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />
                <div className='w-full h-full absolute inset-0 bg-white'>
                    <Image src={src} alt="Hero" width={width ?? 1920} height={height ?? 1080} className={cn('absolute top-0 left-0 w-full h-full object-cover', imageClassName)} />
                </div>
                <div className="absolute inset-0 bg-black opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center px-10">
                        <h1 className="text-4xl font-bold">{title}</h1>
                        <p className="text-lg">{subtitle}</p>
                        <Link href="/richiedi-preventivo" className="bg-primary text-white px-4 py-2 mt-4 inline-block rounded-md">Richiedi un preventivo</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

