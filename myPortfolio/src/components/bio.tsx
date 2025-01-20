import { motion } from "framer-motion"
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

function BioComponent() {
    return(
        <div className="flex flex-col gap-10 overflow-x-hidden">
            <motion.section
            variants={{
                hidden: {opacity: 0, transform: "translateY(100px)"},
                show: {
                    opacity: 1, transform: "translateY(0px)",
                    transition: {
                        staggerChildren: 0.5,
                    },
                },
            }}
            initial="hidden" 
            animate="show" 
            className="flex flex-col gap 10 overflow-x-hidden pl-10">
                <div>
                    <div>
                        <div className="inline-flex">
                        <motion.h1 variants={{hidden: {opacity:0}, show:{opacity: 1}}} className="text-white font-semibold text-5xl py-1">Filip Persson</motion.h1>
                        <motion.h1 variants={{hidden: {opacity:0}, show:{opacity: 1}}} className="text-white font-semibold text-5xl py-1">👋</motion.h1>
                        </div>
                        <motion.h2 variants={{hidden: {opacity:0}, show:{opacity: 1}}} className="text-gray-400 text-2xl py-1">Full-stack developer</motion.h2>
                        <motion.div variants={{hidden: {opacity:0}, show:{opacity: 1}}} className="inline-flex items-end py-1 w-50 space-x-2">
                            <FontAwesomeIcon icon={faLocationDot} className="text-gray-400 text-lg pb-1" />
                            <h1  className="text-gray-400 text-lg">Uppsala, Sweden</h1>
                        </motion.div>
                        {/* <div className="py-2 px-4">
                            <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-lime-600 rounded-lg px-4 py-2 text-white font-semibold text-lg">Hämta CV</motion.button>
                        </div> */}
                        <p>

                        </p>
                    </div>
                </div>
            </motion.section>



            {/* <motion.section 
              variants={{ 
                hidden: {opacity: 0}, 
                show: {
                    opacity: 1, 
                    transition: {
                        staggerChildren: 0.25,
                    },
                    },
              }}
              initial="hidden"
              animate="show" 
              className="grid grid-cols-3 p-10 gap-10">
                <motion.div variants={{ hidden: {opacity: 0}, show: {opacity: 1}}} className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"></motion.div>
                <motion.div variants={{ hidden: {opacity: 0}, show: {opacity: 1}}} className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"></motion.div>
                <motion.div variants={{ hidden: {opacity: 0}, show: {opacity: 1}}} className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"></motion.div>
                <motion.div variants={{ hidden: {opacity: 0}, show: {opacity: 1}}} className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"></motion.div>
                <motion.div variants={{ hidden: {opacity: 0}, show: {opacity: 1}}} className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"></motion.div>
                <motion.div variants={{ hidden: {opacity: 0}, show: {opacity: 1}}} className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"></motion.div>
            </motion.section> */}
        </div>
    )
}

export default BioComponent