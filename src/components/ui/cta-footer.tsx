import Image from 'next/image';
import Link from 'next/link';
export const CtaFooter = ({ img }: { img: string }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-20 mt-24 lg:mb-10" >
            <div className="hidden lg:block w-full bg-primary  overflow-hidden rounded-md">
                <Image src={img} alt="Hero" width={1920} height={1080} className="object-fill" />
            </div>
            <div className="w-full bg-primary overflow-hidden lg:max-w-[30%] flex flex-col items-center justify-center h-[70vh] lg:h-auto px-10 lg:rounded-md">
                <p className="text-4xl font-bold text-secondary p-4 text-center">Riabitare Ristrutturazioni</p>
                <p className="text-lg text-secondary p-4 text-center">di Michele Cicirelli</p>
                <Link href="/richiedi-preventivo" className="bg-secondary text-primary px-4 py-2 mt-4 max-w-[80%] rounded-md">Richiedi un preventivo</Link>
            </div>
        </div>
    )
}