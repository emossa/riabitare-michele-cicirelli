import React from "react"
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "./navigation-menu"
import { ListItem } from "./list-item";
import { Drawer, DrawerContent, DrawerTrigger } from "./drawer";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion";
import { MenuIcon } from "lucide-react";

export const DesktopNavigation = () => {
    return (
        <div className="px-24 w-full flex justify-between">
            <div className="flex items-center">
                <Link href="/">
                    <span className="text-4xl font-bold">Logo</span>
                </Link>
            </div>
            <div className="flex items-center">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Home
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Servizi</NavigationMenuTrigger>
                            <NavigationMenuContent className="">
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    <ListItem title="Ristrutturazione chiavi in mano">
                                        Ristrutturiamo la tua casa in modo completo.
                                    </ListItem>
                                    <ListItem title="Ristrutturazione bagno">
                                        Ristrutturiamo il tuo bagno in modo completo.
                                    </ListItem>
                                    <ListItem title="Impianti elettrici">
                                        Progettiamo e realizziamo impianti elettrici per la tua casa.
                                    </ListItem>
                                    <ListItem title="Impianti termici">
                                        Progettiamo e realizziamo impianti termici ad alta efficienza.
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/contatti" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Casi di successo
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/progettazione" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Progettazione
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/contatti" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Contatti
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

        </div>
    )
}

export const MobileNavigation = () => {
    return (
        <>
            <Drawer direction="left">
                <DrawerTrigger>
                    <MenuIcon className="w-6 h-6" />
                </DrawerTrigger>
                <DrawerContent className="">
                    <NavigationMenu className="w-full">
                        <NavigationMenuList className="flex-col items-start">
                            <NavigationMenuItem className="ml-[4px]">
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="servizi" className="w-full border-0 pr-4">
                                        <AccordionTrigger className="p-0 hover:no-underline">
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()} >
                                                Servizi
                                            </NavigationMenuLink>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="grid w-full gap-3 p-4">
                                                <ListItem title="Ristrutturazione chiavi in mano">
                                                    Ristrutturiamo la tua casa in modo completo.
                                                </ListItem>
                                                <ListItem title="Ristrutturazione bagno">
                                                    Ristrutturiamo il tuo bagno in modo completo.
                                                </ListItem>
                                                <ListItem title="Impianti elettrici">
                                                    Progettiamo e realizziamo impianti elettrici per la tua casa.
                                                </ListItem>
                                                <ListItem title="Impianti termici">
                                                    Progettiamo e realizziamo impianti termici ad alta efficienza.
                                                </ListItem>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/contatti" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Casi di successo
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/progettazione" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Progettazione
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/contatti" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Contatti
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </DrawerContent>
            </Drawer>
            <div className="flex items-center">
                <Link href="/">
                    <span className="text-3xl font-bold">Logo</span>
                </Link>
            </div>
        </>
    )
}