import React from 'react'
export const Description = (
    { title, subtitle, firstText, secondText }: { title?: string, subtitle?: string, firstText?: string, secondText?: string }
) => {
    return (
        <div className="flex my-10 lg:my-24 flex-col lg:flex-row px-10 lg:px-0">
            <div className="lg:w-1/2 mt-10 flex items-center justify-center">
                <div className=''>
                    <div className="w-32 h-4 bg-gray-200"></div>
                    <div >
                        <h2 className="text-4xl font-bold mt-4">{title}</h2>
                        <span className="text-primary text-2xl block">{subtitle}</span>
                    </div>
                </div>

            </div>
            <div className="lg:w-1/2 flex items-center justify-center">
                <div className='lg:max-w-lg'>
                    <p className="mt-4">
                        {firstText}
                    </p>
                    <p className="mt-4">
                        {secondText}
                    </p>
                </div>
            </div>
        </div>
    )
}



