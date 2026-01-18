import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
// import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            setIsDarkMode(false);
            // This function changes the root properties of the entire website, effectively changing everything at once
            localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }

    return (
        <button 
        onClick={toggleTheme} 
        className= "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:onlin-hidden"
        >
            {/* Below is a javascript react if statement that i think is used because its parsed with html? */}
            {isDarkMode ? ( 
                <Sun className="h-6 w-6 text-yellow-300" /> 
            ) : ( 
                <Moon className="h-6 w-6 text-blue-900" /> 
            )}
        </button>
    );
};