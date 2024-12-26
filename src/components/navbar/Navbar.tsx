"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import LogoDark from "../icons/LogoDark";
import { useTheme } from "next-themes";
import Logo from "../icons/Logo";
import Github from "../icons/Github";
import Discord from "../icons/Discord";
import { useState, useEffect } from "react";
import { Languages } from "../icons/Flags";
import { Moon, Sun, Menu, X } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname } from "next/navigation";
import { NavItems } from "@/utils/navItem";
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"


export default function Navbar() {
    const { theme, setTheme } = useTheme();

    const isDarkMode = theme === "dark";
    const Icon = isDarkMode ? Sun : Moon;
    const NavbarLogo = isDarkMode ? <Logo /> : <LogoDark />;
    const [selectedFlag, setSelectedFlag] = useState("en-EN");
    const [expanded, setExpanded] = useState(false);
    const [mounted, setMounted] = useState(false);


    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const isOpen = expanded;
    const toggleMenu = () => setExpanded((prev) => !prev);

    const selectedLanguageIcon = Languages.find(
        (e) => e.code === selectedFlag
    )?.icon


    const isActive = (path: string): boolean => {
        return pathname ? pathname === path : false;
    }

    const NavbarDropdown = ({style} : {style?: string})=> {
        return  (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size={"icon"} className={`${style} bg-transparent items-center justify-center ${isDarkMode ? '' : 'hover:bg-[#121212f]/5'}`} >
                        {selectedLanguageIcon}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#121212]">
                    <DropdownMenuRadioGroup value={selectedFlag} onValueChange={setSelectedFlag} className="flex flex-col">
                        {Languages.map((e) => (
                            <DropdownMenuRadioItem value={e.code} key={e.id} className="flex justify-start items-center gap-3">
                                <span className="text-xs">{e.icon}</span> {e.name}
                            </DropdownMenuRadioItem>
                        ))}
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }

    return (
        <>
            <div className="border-b sticky top-0 border-dotted border-[#121212]/15 dark:border-white/15 z-10">
                <header className="container items-center mx-auto p-3 border-l border-dotted border-r  border-[#121212]/15 dark:border-white/15">
                    <nav className="relative flex justify-between items-center gap-3">
                        <Link href={"/"} className="flex items-center gap-4">
                            {NavbarLogo}
                            <div className="h-6 w-0.5 bg-[#121212]/50 rotate-12 dark:bg-white/50" />
                            <h2 className="font-bold uppercase text-xl text-pretty leading-relaxed text-[#121212] dark:text-zinc-200">
                                Lang.<span className="capitalize text-xs dark:text-white/75">Docs</span>
                            </h2>
                        </Link>
                        <div className="items-center gap-4 md:flex hidden">
                            {NavItems.map((e) => (
                                <Link key={e.id} href={e.href} className={`transition-colors duration-300 ease-in-out text-sm rounded-md font-semibold 
                            ${isActive(e.href)
                                        ? "text-[#121212] dark:text-[#fff] font-bold"
                                        : "text-[#666] dark:text-[#888] hover:text-[#121212] dark:hover:text-[#fff]"
                                    } relative`}>
                                    {e.title}
                                </Link>
                            ))}
                        </div>
                        <div className="flex items-center">
                            <Button variant="ghost" size="icon" onClick={toggleMenu} className={`flex md:hidden bg-transparent ${isDarkMode ? '' : 'hover:bg-[#121212f]/5'}`}>
                                {isOpen ? <X /> : <Menu />}
                            </Button>
                            <Button asChild variant="ghost" size="icon" className={`bg-transparent hidden md:flex  ${isDarkMode ? '' : 'hover:bg-[#121212]/5'}`}>
                                <Link href={"https://discord.gg/f85Eybah"}><Discord /></Link>
                            </Button>
                            <Button asChild variant="ghost" size="icon" className={`bg-transparent hidden md:flex ${isDarkMode ? '' : 'hover:bg-[#121212]/5'}`}>
                                <Link href={"https://github.com/Creation-of-Destruction-Cody/LangDocs"}><Github /></Link>
                            </Button>
                            <Button variant="ghost" size="icon" className={`bg-transparent hidden md:flex ${isDarkMode ? '' : 'hover:bg-[#121212]/5'}`} onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}>
                                <Icon />
                            </Button>
                            <NavbarDropdown style="md:flex hidden" />
                        </div>
                    </nav>

                </header>
            </div>
            <Drawer open={isOpen} onOpenChange={toggleMenu} >
                <DrawerContent className="flex md:hidden justify-start items-start text-[#121212] dark:bg-[#121212] dark:text-zinc-100">
                    <DrawerHeader>
                        <div className="flex items-center gap-4">
                            {NavbarLogo}
                            <div className="h-6 w-0.5 bg-[#121212]/50 rotate-12 dark:bg-white/50" />
                            <DrawerTitle>Lang.<span className="capitalize text-xs dark:text-white/75">Docs</span></DrawerTitle>
                        </div>
                    </DrawerHeader>
                    <div className="overflow-auto px-4">
                        <div className="flex flex-col space-y-3">
                            {[{ id: 0, title: "Home", href: "/" }, ...NavItems].map((e) => (
                                <Link key={e.id} href={e.href} className={`text-[#666] dark:text-[#888] transition-colors duration-300 ease-in-out text-sm rounded-md font-semibold`}>
                                    {e.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <DrawerFooter>
                        <div className="flex items-center">
                            <Button asChild variant="ghost" size="icon" className={`bg-transparent  ${isDarkMode ? '' : 'hover:bg-[#121212]/5'}`}>
                                <Link href={"https://discord.gg/f85Eybah"}><Discord /></Link>
                            </Button>
                            <Button asChild variant="ghost" size="icon" className={`bg-transparent ${isDarkMode ? '' : 'hover:bg-[#121212]/5'}`}>
                                <Link href={"https://github.com/Creation-of-Destruction-Cody/LangDocs"}><Github /></Link>
                            </Button>
                            <Button variant="ghost" size="icon" className={`bg-transparent ${isDarkMode ? '' : 'hover:bg-[#121212]/5'}`} onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}>
                                <Icon />
                            </Button>
                            <NavbarDropdown />
                        </div>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}