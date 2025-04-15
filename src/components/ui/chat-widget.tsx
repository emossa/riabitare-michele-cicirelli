"use client";
import { trackFormSubmission } from "@/lib/utils";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const ChatWidget = () => {

    return (
        <FloatingWhatsApp
            statusMessage="Online"
            chatMessage="Hai bisogno di aiuto?"
            phoneNumber="393471294953"
            accountName="Riabitare Ristrutturazioni"
            placeholder="Scrivi un messaggio..."
            buttonStyle={{
                zIndex: 40,
            }}
            avatar="/favicon.jpg"
            onSubmit={
                (message) => {
                    trackFormSubmission(
                        {
                            formId: "richiesta_preventivo_wa",
                            formName: "Richiesta Preventivo WhatsApp",
                            formCategory: "quote",
                            formData: {
                                message: message,
                            },
                            success: true,
                        }
                    )
                }
            }
        />
    );
};

export default dynamic(() => Promise.resolve(ChatWidget), {
    ssr: false,
});
