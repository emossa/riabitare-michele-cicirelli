"use client"
import { sendQuoteRequest } from "@/server/quote-request"
import { Button } from "./button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form"
import { Input } from "./input"
import { Textarea } from "./textarea"
import { useForm } from "react-hook-form"
import { use, useEffect, useState, useTransition } from "react"
import { getErrorMessage } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"
import { Skeleton } from "./skeleton"

type FormValues = {
    name: string,
    phone: string,
    email: string,
    city: string,
    address: string,
    message: string,
}

export const ContactForm = () => {


    const [sentRequestData, setSentRequestData] = useState<FormValues | null>(null)
    const form = useForm<FormValues>({
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            city: "",
            address: "",
            message: "",
        }
    })
    const [isPending, startTransition] = useTransition()
    const { toast } = useToast()
    const onSubmit = async (data: FormValues) => {
        startTransition(async () => {
            try {
                await sendQuoteRequest({
                    name: data.name,
                    phone: data.phone,
                    email: data.email,
                    city: data.city,
                    address: data.address,
                    message: data.message,
                })
                setSentRequestData(data)
                toast({
                    title: "Richiesta inviata",
                    description: "La richiesta è stata inviata con successo",
                })
            } catch (e) {
                toast({
                    title: "Errore",
                    description: getErrorMessage(e),
                    variant: "destructive",
                })
            }
        })
    }

    return (
        <>

            {sentRequestData && <div className="w-full max-w-6xl mx-auto py-24" >
                <div className="w-full  mx-auto lg:py-14 px-5  lg:px-14 flex flex-col items-center" >
                    <h1 className="text-2xl lg:text-4xl font-bold text-center text-white">
                        Grazie per aver inviato la tua richiesta
                    </h1>
                    <p className="text-center text-primary-foreground mt-5">
                        La tua richiesta è stata inviata con successo. Sarai contattato al più presto.
                    </p>
                    <div className="max-w-xl w-full mx-auto border border-gray-200 rounded-lg p-5 mt-5 flex flex-col gap-2 bg-white">
                        <p className="text-primary lg:text-xl">
                            <strong>Nome:</strong> {sentRequestData.name}
                        </p>
                        <p className="text-primary lg:text-xl">
                            <strong>Email:</strong> {sentRequestData.email}
                        </p>
                        <p className="text-primary lg:text-xl">
                            <strong>Telefono:</strong> {sentRequestData.phone}
                        </p>
                        <p className="text-primary lg:text-xl">
                            <strong>Città:</strong> {sentRequestData.city}
                        </p>
                        <p className="text-primary lg:text-xl">
                            <strong>Indirizzo:</strong> {sentRequestData.address}
                        </p>
                        <p className="text-primary lg:text-xl">
                            <strong>Descrizione della richiesta:</strong>
                        </p>
                        <p className="text-primary lg:text-xl">
                            <p className="bg-gray-100 p-2 rounded-lg ">
                                {sentRequestData.message}
                            </p>
                        </p>
                    </div>
                </div >
            </div>}
            {!sentRequestData && <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="w-full max-w-6xl mx-auto py-24 px-5">
                        <h1 className="text-white text-4xl font-bold">Richiedi Preventivo</h1>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
                            <div className="col-span-2 lg:col-span-1">
                                <FormField control={form.control} name="name" render={({ field }) => (
                                    <FormItem>
                                        <FormControl {...field} className="">
                                            <Input placeholder="Nome e cognome" type="text" required />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            </div>
                            <div className="col-span-2 lg:col-span-1">
                                <FormField control={form.control} name="phone" render={({ field }) => (
                                    <FormItem>
                                        <FormControl {...field} className="">
                                            <Input placeholder="Telefono" type="tel" required />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            </div>
                            <div className="col-span-2 lg:col-span-1">
                                <FormField control={form.control} name="email" render={({ field }) => (
                                    <FormItem>
                                        <FormControl {...field} className="">
                                            <Input placeholder="Email" type="email" required />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            </div>
                            <div className="col-span-2 lg:col-span-1">
                                <FormField control={form.control} name="city" render={({ field }) => (
                                    <FormItem>
                                        <FormControl {...field} className="">
                                            <Input placeholder="Città" type="text" required />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            </div>
                            <div className="col-span-2">
                                <FormField control={form.control} name="address" render={({ field }) => (
                                    <FormItem>
                                        <FormControl {...field} className="">
                                            <Input className="col-span-2" placeholder="Indirizzo" type="text" required />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            </div>
                            <div className="col-span-2">
                                <FormField control={form.control} name="message" render={({ field }) => (
                                    <FormItem>
                                        <FormControl {...field} className="">
                                            <Textarea className="col-span-2" placeholder="Descrivi brevemente la tua richiesta" required />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            </div>
                        </div>
                        <div className="flex justify-end mt-10">
                            <Button disabled={isPending} type="submit" className="bg-white text-primary hover:bg-white hover:scale-105">
                                {isPending ? (<>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Invio...
                                </>) : "Invia richiesta"}
                            </Button>
                        </div>
                    </div>
                </form>
            </Form>
            }
            {/* {
                !sentRequestData && <div className="w-full max-w-6xl mx-auto py-24 px-5">
                    <h1 className="text-white text-4xl font-bold">Richiedi Preventivo</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
                        <div className="col-span-2 lg:col-span-1">
                            <Skeleton className="w-full h-10 mb-2" />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                            <Skeleton className="w-full h-10 mb-2" />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                            <Skeleton className="w-full h-10 mb-2" />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                            <Skeleton className="w-full h-10 mb-2" />
                        </div>
                        <div className="col-span-2">
                            <Skeleton className="w-full h-10 mb-2" />
                        </div>
                        <div className="col-span-2">
                            <Skeleton className="w-full h-[100px] mb-2" />
                        </div>
                    </div>
                    <div className="flex justify-end mt-10">
                        <Skeleton className="w-[80px] h-10 mb-2" />
                    </div>
                </div>
            } */}


        </>
    )

}