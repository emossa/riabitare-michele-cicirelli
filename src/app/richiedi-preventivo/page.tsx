import { ContactForm } from "@/components/ui/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Richiedi Preventivo",
    description: "Consulenza sempre gratuita per la tua casa",
};

export default function RichiediPreventivoPage() {
    return (
        <div className="bg-primary flex flex-col">
            <ContactForm />
        </div>
    )
}