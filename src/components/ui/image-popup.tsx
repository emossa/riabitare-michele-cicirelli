import React from 'react'
import Image, { ImageProps } from 'next/image'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
export const ImagePopup = ({ description, ...props }: ImageProps & { description?: string }) => {
    return (
        <>
            <Dialog>
                <DialogTrigger className='cursor-pointer'>
                    <Image {...props} />
                </DialogTrigger>
                <DialogContent className='w-full max-w-[800px]'>
                    <DialogHeader>
                        <DialogTitle>{props.alt}</DialogTitle>
                    </DialogHeader>
                    <img src={props.src as string ?? ''} alt={props.alt} className="w-full h-auto" />
                    {description && <DialogDescription>
                        {description}
                    </DialogDescription>}
                    <DialogFooter>
                        <button className="bg-primary text-white px-4 py-2 mt-4">Richiedi un preventivo</button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
