import IconMoon from "./icons/IconMoon"

const Header = () => {
    return(
        <header className="container mx-auto px-4 pt-8" >
        <div className="flex justify-between">
          <h1 className="uppercase font-semibold text-white text-2xl tracking-[0.3em]">TODO</h1>
          <button><IconMoon /></button>
        </div>
      </header>  
    )
}

export default Header