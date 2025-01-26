import { easeIn, easeInOut, motion } from "framer-motion";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faReact,
  faJs,
  faNode,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import profilbild from "@/assets/profilbild.jpg";
import cv from "@/assets/filip-persson-cv.pdf";

function BioComponent() {
  return (
    <div className="">
      <div className="flex-col overflow-y-hidden max-w-screen-sm">
        <motion.section
          variants={{
            hidden: { opacity: 0, transform: "translateY(100px)" },
            show: {
              opacity: 1,
              transform: "translateY(0px)",
              transition: {
                staggerChildren: 0.5,
              },
            },
          }}
          initial="hidden"
          animate="show"
          className="flex flex-col gap 10 overflow-hidden"
        >
          <div>
            <div className="flex justify-start">
              <motion.img
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                alt="Profilbild"
                src={profilbild}
                width="100"
                height="100"
                className="rounded-full size-20 mx-4 my-2"
              ></motion.img>
              <div className="">
                <div className="inline-flex items-center space-x-2">
                  <motion.h1
                    variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                    className="text-white font-semibold text-5xl py-1"
                  >
                    Filip Persson
                  </motion.h1>
                  <motion.h1
                    variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                    className="text-white font-semibold text-5xl py-1"
                  >
                    👋
                  </motion.h1>
                </div>
                <motion.h2
                  variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                  className="text-gray-400 text-2xl py-1"
                >
                  Front-end Developer
                </motion.h2>
                <motion.div
                  variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                  className="inline-flex items-end py-1 w-50 space-x-2"
                >
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-gray-400 text-lg pb-1"
                  />
                  <h1 className="text-gray-400 text-lg">Uppsala, Sweden</h1>
                </motion.div>
                <motion.div
                  variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                  className="space-x-3 items-center justify-start flex pb-4 pt-4"
                >
                  <a href={cv} download={cv} target="_blank">
                    <motion.button
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.25 },
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ ease: easeIn }}
                      type="button"
                      className="rounded text-sm text-gray-200 px-4 py-2 border border-gray-400"
                    >
                      Ladda ned CV
                    </motion.button>
                  </a>
                  <motion.a
                    whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ ease: easeIn }}
                    href="https://github.com/filipperssonn"
                    target="__blank"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-gray-400 aspect-square size-10 items-center inline-flex border-b border-gray-400"
                    />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ ease: easeIn }}
                    href="https://www.linkedin.com/in/filip-persson-66b49719a/"
                    target="__blank"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-gray-400 aspect-square size-10 items-center inline-flex border-b border-gray-400"
                    />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
      <div className=" text-gray-500 justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ ease: easeInOut }}
          className="flex mt-16 scroller"
        >
          <span className="scroller-inner">
            <FontAwesomeIcon icon={faReact} />
            <p className="">React</p>
          </span>
          <span className="scroller-inner">
            <FontAwesomeIcon icon={faGithub} />
            <p className="">Github</p>
          </span>
          <span className="scroller-inner">
            <FontAwesomeIcon icon={faJs} />
            <p className="">Javascript</p>
          </span>
          <span className="scroller-inner">
            <FontAwesomeIcon icon={faHtml5} />
            <p className="">HTML</p>
          </span>
          <div className="scroller-inner">
            <FontAwesomeIcon icon={faNode} />
            <p className="">Node.js</p>
          </div>
          <span className="scroller-inner">
            <FontAwesomeIcon icon={faCss3Alt} />
            <p className="">CSS</p>
          </span>
        </motion.div>
      </div>
    </div>
  );
}

export default BioComponent;
