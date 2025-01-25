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
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "./drawer";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";

export const DesktopNavigation = () => {
    return (
        <div className="px-24 w-full flex justify-between">
            <div className="flex items-center">
                <Link href="/">
                    <span className="text-4xl font-bold">
                        <Image src="/logo.png" width={151} height={101} alt="" />
                    </span>
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
                                    <Link href={'/ristrutturazione-chiavi-in-mano'} passHref>
                                        <ListItem title="Ristrutturazione chiavi in mano">
                                            Ristrutturiamo la tua casa in modo completo.
                                        </ListItem>
                                    </Link>
                                    <Link href={'/rifacimento-bagni'} passHref>
                                        <ListItem title="Ristrutturazione bagno">
                                            Ristrutturiamo il tuo bagno in modo completo.
                                        </ListItem>
                                    </Link>
                                    <Link href={'/tinteggiatura'} passHref>
                                        <ListItem title="Tinteggiatura e controsoffitti">
                                            Tinteggiatura e controsoffitti per la tua casa.
                                        </ListItem>
                                    </Link>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        {/* <NavigationMenuItem>
                            <Link href="/contatti" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Casi di successo
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem> */}
                        <NavigationMenuItem>
                            <Link href="/come-funziona" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Come funziona
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/richiedi-preventivo" legacyBehavior passHref>
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
    const [open, setOpen] = React.useState(false)
    const onClick = () => {
        setOpen(!open)
    }
    return (
        <>
            <div className="flex items-center">
                <Link href="/">
                    <Image src="/logo.png" width={100} height={69} alt="" />
                </Link>
            </div>
            <Drawer direction="left" open={open} onOpenChange={setOpen}>
                <MenuIcon className="w-6 h-6" onClick={onClick} />
                <DrawerContent className="">
                    <DrawerHeader className="flex justify-between">
                        <DrawerTitle>Menu</DrawerTitle>
                        <DrawerClose>
                            <X className="w-6 h-6" />
                        </DrawerClose>
                    </DrawerHeader>

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
                                                <Link href={'/ristrutturazione-chiavi-in-mano'} passHref onClick={onClick}>
                                                    <ListItem title="Ristrutturazione chiavi in mano">
                                                        Ristrutturiamo la tua casa in modo completo.
                                                    </ListItem>
                                                </Link>
                                                <Link href={'/rifacimento-bagni'} passHref onClick={onClick}>
                                                    <ListItem title="Ristrutturazione bagno">
                                                        Ristrutturiamo il tuo bagno in modo completo.
                                                    </ListItem>
                                                </Link>
                                                <Link href={'/tinteggiatura'} passHref onClick={onClick}>
                                                    <ListItem title="Tinteggiatura e controsoffitti">
                                                        Tinteggiatura e controsoffitti per la tua casa.
                                                    </ListItem>
                                                </Link>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </NavigationMenuItem>
                            {/* <NavigationMenuItem>
                                <Link href="/contatti" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Casi di successo
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem> */}
                            <NavigationMenuItem onClick={onClick}>
                                <Link href="/come-funziona" legacyBehavior passHref >
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Come funziona
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </DrawerContent>
            </Drawer>
        </>
    )
}