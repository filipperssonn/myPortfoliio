import { useState } from "react"
import Hamburger from "hamburger-react";


function HamburgerMenu() {
const [open, setOpen] = useState(false);

    return(
        <div className="text-white justify-start items-center flex flex-row-reverse top-0 right-0 pt-4 pr-4">
            <Hamburger 
            size={24}
            toggled={open}
            toggle={setOpen}
            />
            {open &&
            <header className="text-white justify-start items-center flex flex-row-reverse top-0 right-0 pt-4 pr-4">
                <div className="w-screen h-screen overflow-x-hidden">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Projects</a>
                </div> 
            </header>}
        </div>
    )
}

export default HamburgerMenu