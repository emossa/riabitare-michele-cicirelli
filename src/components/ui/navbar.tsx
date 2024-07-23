"use client"

import React, { useEffect, useState } from "react";
import { useMediaQuery } from 'usehooks-ts'

import { DesktopNavigation, MobileNavigation } from "@/components/ui/navigation"

export const Navbar = () => {
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    const [navBar, setNavBar] = useState(<DesktopNavigation />);
    useEffect(() => {
        if (isDesktop) {
            setNavBar(<DesktopNavigation />);
        } else {
            setNavBar(<MobileNavigation />);
        }
    }, [isDesktop]);
    return (
        <div className="
            flex
            items-center
            justify-between
            p-4
        ">
            {navBar}
        </div>
    );
}






