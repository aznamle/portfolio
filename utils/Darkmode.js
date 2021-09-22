import { useEffect, useState } from "react";
import Link from 'next/link'
import { useTheme } from "next-themes";

import {
  FiMoon,
  FiSun
} from 'react-icons/fi'

const Darkmode = () => {

    const [isMounted, setIsMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() => {
      setIsMounted(true);
    }, []);

    const toggleDarkMode = () => {
      if (!isMounted) return null;

      const currentTheme = theme === 'system' ? systemTheme : theme;

      if(currentTheme === 'dark') {
        return (
          <FiSun fontSize='20px' onClick={()=>setTheme('light')} />
        )
      } else {
        return (
          <FiMoon fontSize='20px' onClick={()=>setTheme('dark')} />
        )
      }
    }

    return toggleDarkMode();
}

export default Darkmode
