import { useState } from "react";
import Hamburger from "hamburger-react";
import { easeInOut, motion } from "framer-motion";
import { useClickAway } from "@uidotdev/usehooks";

function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  const ref = useClickAway(() => {
    setOpen(false);
  });

  return (
    <div ref={ref} className="">
      <div className="text-white overflow-hidden absolute top-0 right-0 flex z-20">
        <Hamburger
          rounded
          direction="left"
          size={28}
          toggled={open}
          toggle={setOpen}
        />
        {open && (
          <motion.header
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5, ease: easeInOut }}
            className="text-slate-950 text-3xl font-semibold  bg-gray-300 top-0 right-0 justify-end w-[20vw] h-[100vh]"
          >
            <div className="overflow-x-hidden grid-flow-row grid py-10">
              <a href="" className="flex justify-end py-4 px-4">
                Home
              </a>
              <a href="" className="flex justify-end py-4 px-4">
                About
              </a>
              <a href="" className="flex justify-end py-4 px-4">
                Projects
              </a>
            </div>
          </motion.header>
        )}
      </div>
    </div>
  );
}

export default HamburgerMenu;
