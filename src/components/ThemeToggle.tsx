import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
// import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isLightMode, setIsLightMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "light") {
            setIsLightMode(true)
            document.documentElement.classList.add("light");
        } else {
            localStorage.setItem("theme", "dark");
            setIsLightMode(false);
        }
    }, [])

    const toggleTheme = () => {
        if (isLightMode) {
            setIsLightMode(false);
            // This function changes the root properties of the entire website, effectively changing everything at once
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.remove("light");
        } else {
            document.documentElement.classList.add("light");
            localStorage.setItem("theme", "light");
            setIsLightMode(true);
        }
    }

    return (
        <button 
        onClick={toggleTheme} 
        className= "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:onlin-hidden"
        >
            {/* Below is a javascript react if statement that i think is used because its parsed with html? */}
            {isLightMode ? ( 
                <Moon className="h-6 w-6 text-blue-900" />  
            ) : ( 
                <Sun className="h-6 w-6 text-yellow-300" />
            )}
        </button>
    );
};