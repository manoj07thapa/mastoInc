import { useState, useEffect, Fragment } from 'react';
import { useTheme } from "next-themes";
import { ChevronDownIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { Transition, Switch } from "@headlessui/react";




const ThemeSwitcher = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [enabled, setEnabled] = useState(false)
    const currentTheme = theme === 'system' ? systemTheme : theme


    useEffect(() => {
        setMounted(true)
    }, [])

    // const renderThemeChanger = () => {
    //     if (!mounted) return null
    //     const currentTheme = theme === 'system' ? systemTheme : theme

    //     if (currentTheme === 'dark') {
    //         return (
    //             <SunIcon className="w-4 h-4 " role="button" onClick={() => setTheme('light')} />
    //         )
    //     } else {
    //         return (
    //             <MoonIcon className="w-4 h-4 " role="button" onClick={() => setTheme('dark')} />

    //         )
    //     }
    // }
    return (
        <Fragment>
            <div>
                {
                    (mounted && currentTheme === "dark") ?
                        <SunIcon className="w-6 h-6" role="button" onClick={() => setTheme('light')} /> :
                        <MoonIcon className="w-4 h-4 " role="button" onClick={() => setTheme('dark')} />
                }
            </div>
        </Fragment>
    );
}
export default ThemeSwitcher;