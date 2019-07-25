import React, { useEffect } from "react";
import UseLocalStorage from './useLocalStorage'

const useDarkMode = () => {
    const [darkMode, setDarkMode] = UseLocalStorage('darkModeKey')

    useEffect(() => {
        darkMode 
        ? document.body.classList.add('dark-mode') 
        : document.body.classList.remove('dark-mode')
    }, [darkMode])

    return [darkMode, setDarkMode];
};

export default useDarkMode;