import { useEffect, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const initialStateDark = localStorage.getItem('theme') === 'dark'
const Header = () => {
        const [darkmode, setDarkmode] = useState(initialStateDark);
        useEffect(()=>{
          if(darkmode){
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
          }else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
          }
        },[darkmode])

        return (
                <header className="container mx-auto px-4 pt-8 md:max-w-xl">
                        <div className="flex justify-between">
                                <h1 className="text-2xl font-semibold uppercase tracking-[0.3em] text-white">
                                        TODO
                                </h1>
                                <button 
                                onClick={()=>setDarkmode(!darkmode)}
                                >
                                  {darkmode ? <IconSun/> : <IconMoon/>}
                                </button>
                        </div>
                </header>
        );
};

export default Header;
