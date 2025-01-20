import { motion } from "framer-motion";
import "../index.css";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

function ErfarenhetComponent() {
  return (
    <div className="flex w-full pt-16 pb-16 justify-center rounded-lg">
      <div>
        <Tabs defaultValue="account">
          <TabsList className="bg-slate-700 text-white flex space-x-1 md:max-w-120">
            <TabsTrigger
              value="arbete"
              className="bg-transparent md:w-60 w-40 hover:bg-slate-500"
            >
              Work
            </TabsTrigger>
            <TabsTrigger
              value="utbildning"
              className="bg-transparent md:w-60 w-40 hover:bg-slate-500"
            >
              Education
            </TabsTrigger>
          </TabsList>
          <TabsContent value="arbete" className="">
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              initial="hidden"
              animate="show"
              className="border-white rounded-lg text-white items-center justify-center"
            >
              <ul className="space-y-4 mt-4 flex-auto justify-start">
                <motion.ul
                  variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                  className="bg-slate-800 rounded-lg"
                >
                  <li className="text-white text-2xl px-4 py-1">
                    Foodora Market
                  </li>
                  <li className="text-gray-400 text-lg px-4 py-1">Picker</li>
                  <li className="text-gray-500 text-sm px-4 py-1">
                    November 2024 - Ongoing
                  </li>
                </motion.ul>
                <motion.ul
                  variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                  className="bg-slate-800 rounded-lg"
                >
                  <li className="text-white text-2xl px-4 py-1">Capriga</li>
                  <li className="text-gray-400 text-lg px-4 py-1">
                    Financial Assistant
                  </li>
                  <li className="text-gray-500 text-sm px-4 py-1">
                    May 2024 - Ongoing
                  </li>
                </motion.ul>
                <motion.ul
                  variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                  className="bg-slate-800 rounded-lg"
                >
                  <li className="text-white text-2xl px-4 py-1">Stuvbutiken</li>
                  <li className="text-gray-400 text-lg px-4 py-1">Salesman</li>
                  <li className="text-gray-500 text-sm px-4 py-1">
                    June 2022 - August 2023
                  </li>
                </motion.ul>
                <motion.ul
                  variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                  className="bg-slate-800 rounded-lg"
                >
                  <li className="text-white text-2xl px-4 py-1">Stuvbutiken</li>
                  <li className="text-gray-400 text-lg px-4 py-1">
                    Salesman (Part-time)
                  </li>
                  <li className="text-gray-500 text-sm px-4 py-1">
                    June 2018 - August 2020
                  </li>
                </motion.ul>
              </ul>
            </motion.div>
          </TabsContent>
          <TabsContent value="utbildning" className="">
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              initial="hidden"
              animate="show"
              className="border-white rounded-lg text-white items-center justify-center"
            >
              <ul className="space-y-4 mt-4 flex-auto justify-start">
                <motion.ul
                  variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                  className="bg-slate-800 rounded-lg"
                >
                  <li className="text-white text-2xl px-4 py-1">
                    Uppsala University
                  </li>
                  <li className="text-gray-400 text-lg px-4 py-1">
                    Courses - Business Economics
                  </li>
                  <li className="text-gray-500 text-sm px-4 py-1">
                    January 2021 - May 2024
                  </li>
                </motion.ul>
                <motion.ul
                  variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                  className="bg-slate-800 rounded-lg"
                >
                  <li className="text-white text-2xl px-4 py-1">
                    Stockholms University
                  </li>
                  <li className="text-gray-400 text-lg px-4 py-1">
                    Courses - National Economics
                  </li>
                  <li className="text-gray-500 text-sm px-4 py-1">
                    September 2020 - January 2021
                  </li>
                </motion.ul>
                <motion.ul
                  variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                  className="bg-slate-800 rounded-lg"
                >
                  <li className="text-white text-2xl px-4 py-1">
                    Tingvallagymnasiet
                  </li>
                  <li className="text-gray-400 text-lg px-4 py-1">
                    High-school diploma - Economics
                  </li>
                  <li className="text-gray-500 text-sm px-4 py-1">
                    August 2017 - June 2020
                  </li>
                </motion.ul>
              </ul>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default ErfarenhetComponent;
