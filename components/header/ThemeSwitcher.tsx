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
    //             <SunIcon className="h-4 w-4 " role="button" onClick={() => setTheme('light')} />
    //         )
    //     } else {
    //         return (
    //             <MoonIcon className="h-4 w-4 " role="button" onClick={() => setTheme('dark')} />

    //         )
    //     }
    // }
    return (
        <Switch
            name='switch mode'
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? 'bg-blue-600' : 'bg-gray-200  dark:bg-slate-700'
                } relative inline-flex h-4 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`
            }
        >
            <span
                className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
            {
                (mounted && currentTheme === "dark") ? <SunIcon className="h-6 w-6 ml-2" role="button" onClick={() => setTheme('light')} /> : <MoonIcon className="h-6 w-6 pr-4 " role="button" onClick={() => setTheme('dark')} />
            }
        </Switch >


    );
}
export default ThemeSwitcher;