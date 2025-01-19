import { useState } from "react"
import Hamburger from "hamburger-react";


function HamburgerMenu() {
const [open, setOpen] = useState(false);

    return(
        <div className="text-white justify-start items-center flex flex-row-reverse top-0 right-0">
            <Hamburger 
            size={24}
            toggled={open}
            toggle={setOpen}
            />
            {open &&
            <header className="">
                <Hamburger 
                size={24}
                toggled={open}
                toggle={setOpen}
                />
                <div className="h-screen w-[60vw] bg-stone-600 ease-in duration-200">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Projects</a>
                </div> 
            </header>}
        </div>
    )
}

export default HamburgerMenu