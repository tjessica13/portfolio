"use client"

import * as React from "react"
import { CiCloudMoon } from "react-icons/ci";
import { CiCloudSun } from "react-icons/ci";
import {useState} from 'react';
import { useTheme } from "next-themes";

export function ThemeButton() {
  const { setTheme } = useTheme()
  const [theme, setThemeState] = useState("light");

  const handleClick = () => {
    if(theme === "dark")
    {
        setThemeState("light");
        setTheme("light");
    }
    else
    {
        setThemeState("dark")
        setTheme("dark")
    }
  }

  return (
    <div className="justify-center">
        <button onClick={handleClick}>
          {(theme==="light") && <CiCloudMoon size={30}/>}
          {(theme==="dark") && <CiCloudSun size={30}/>}
        </button>
    </div>
  )
}
