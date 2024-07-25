"use client";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const ChatWidget = () => {

    return (
        <FloatingWhatsApp
            statusMessage="Online"
            chatMessage="Hai bisogno di aiuto?"
            phoneNumber="393298064862"
            accountName="Riabitare Ristrutturazioni"
            placeholder="Scrivi un messaggio..."
            buttonStyle={{
                zIndex: 40,
            }}
            avatar="/logo.png"
        />
    );
};

export default dynamic(() => Promise.resolve(ChatWidget), {
    ssr: false,
});
