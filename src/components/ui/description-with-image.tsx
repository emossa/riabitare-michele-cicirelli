import Image from "next/image"
export function DescriptionWithImage({
    src,
    description,
    alt,
    secondDescription,
    title,
    subtitle,
    orientation
}: {
    src: string,
    description: string,
    alt: string,
    secondDescription?: string,
    title: string,
    subtitle: string,
    orientation?: "left" | "right"
}) {
    return (
        <>
            {orientation === "left" ? (
                <div className="flex my-10 lg:my-24 flex-col lg:flex-row px-10 lg:px-0">
                    <div className="lg:w-1/2 mt-10 flex items-center justify-center">
                        <Image src={src} alt={alt} width={1920} height={1080} className="object-fill" />
                    </div>
                    <div className="lg:w-1/2 flex items-center justify-center">
                        <div className='lg:max-w-lg'>
                            <div className=''>
                                <div className="w-32 h-4 bg-gray-200"></div>
                                <div >
                                    <h2 className="text-4xl font-bold mt-4">{title}</h2>
                                    <span className="text-primary text-2xl block">{subtitle}</span>
                                </div>
                            </div>
                            <p className="mt-4">
                                {description}
                            </p>
                            {
                                secondDescription && (
                                    <p className="mt-4">
                                        {secondDescription}
                                    </p>
                                )
                            }
                        </div>
                    </div>
                </div>
            )
                : (
                    <div className="flex my-10 lg:my-24 flex-col lg:flex-row px-10 lg:px-0">

                        <div className="lg:w-1/2 flex items-center justify-center">
                            <div className='lg:max-w-lg'>
                                <div className=''>
                                    <div className="w-32 h-4 bg-gray-200"></div>
                                    <div>
                                        <h2 className="text-4xl font-bold mt-4">{title}</h2>
                                        <span className="text-primary text-2xl block">{subtitle}</span>
                                    </div>
                                </div>
                                <p className="mt-4">
                                    {description}
                                </p>
                                {
                                    secondDescription && (
                                        <p className="mt-4">
                                            {secondDescription}
                                        </p>
                                    )
                                }
                            </div>
                        </div>
                        <div className="lg:w-1/2 mt-10 flex items-center justify-center">
                            <Image src={src} alt={alt} width={1920} height={1080} className="object-fill" />
                        </div>
                    </div>
                )}
        </>
    )
}