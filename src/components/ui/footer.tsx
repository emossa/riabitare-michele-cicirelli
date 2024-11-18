import Image from 'next/image';
export const Footer = () => {
    return (
        <>
            <div className="w-full bg-primary text-white py-14 lg:mt-24 px-10">
                <div className='flex w-full justify-center'>
                    <Image src="/logo-b.png" width={151} height={101} alt="" />
                </div>
                <div className="flex w-full justify-center mt-8">
                    <p className="text-center">Via Marco Polo 10, Toritto - Tel. +393471294953 </p>
                </div>
                <div className="flex w-full justify-center mt-8">
                    <p className="text-center">P.I. 10023827423 </p>
                </div>
                <div className="flex w-full justify-center mt-8">
                    <p className="text-center">© 2021 - All rights reserved - Realizzato da <a href='https://www.linkedin.com/in/emanuele-mossa-19872a183/' target='blank' className='underline'>Emanuele Mossa</a></p>
                </div>
            </div>
        </>
    )
}