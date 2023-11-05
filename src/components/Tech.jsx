import React from "react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <h2 className={`${styles.sectionHeadText} text-center`}>
        Tech stack.
      </h2>
    </motion.div>
    <motion.div
        variants={fadeIn("", "", 0.2, 1.2)}
      >
        <div className='flex flex-row flex-wrap justify-center gap-10 mt-12 bg-black-100 rounded-[20px]'>
          <div className='flex flex-row flex-wrap justify-center gap-10 mt-10 mb-10 bg-black-100 rounded-[20px]'>
            {technologies.map((technology) => (
                <div className='w-28 h-28' key={technology.name}>
                  <img src={technology.icon} alt={technology.name} />
                </div>
            ))}
        </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "technologies");
