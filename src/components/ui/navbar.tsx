"use client"

import React, { useEffect, useState } from "react";
import { useMediaQuery } from 'usehooks-ts'

import { DesktopNavigation, MobileNavigation } from "@/components/ui/navigation"

export const Navbar = () => {
    return (
        <div className="
            flex
            items-center
            justify-between
            p-4
        ">
            <DesktopNavigation />
            <MobileNavigation />
        </div>
    );
}






