"use client"

import React from "react";
import { useMediaQuery } from 'usehooks-ts'

import { DesktopNavigation, MobileNavigation } from "@/components/ui/navigation"

export const Navbar = () => {
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    return (
        <div className="
            flex
            items-center
            justify-between
            p-4
           
        ">
            {
                isDesktop && <DesktopNavigation />
            }
            {
                !isDesktop && <MobileNavigation />
            }
        </div>
    );
}






