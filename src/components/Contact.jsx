import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import {github} from "../assets/index.js";

const Contact = () => {

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='mt-12 flex flex-col gap-8'>
          <span className='text-white font-medium mb-4'>Luis Felipe López Montes</span>
          <a href= "mailto:flopezmontes98@gmail.com?subject=Contact Request" className='text-white font-medium mb-4'>flopezmontes98@gmail.com</a>
          <a href="tel:+41766878697" className='text-white font-medium mb-4'>+41 76 687 86 97</a>
        </div>
        <div className="mt-8 flex">
          <a
              href='https://www.linkedin.com/in/luisfellopezmontes/'
              target='_blank'
              className="mr-4"
          >
            <img
                src='/img/linkedin.png'
                alt='LinkedIn'
                width='37'
            />
          </a>

          <a
              href='https://github.com/flopezmontes'
              target='_blank'
          >
            <img
                src={github}
                alt='source code'
                width='40'
                className='object-contain'
            />
          </a>
        </div>
        <button
            type='button'
            onClick={() => window.open("/documents/cv_felipe_lópez.pdf", "_blank")}
            className='mt-8 mb-5 bg-tertiary py-3 px-8 rounded-xl green-pink-gradient w-fit text-white font-bold shadow-md shadow-primary'
        >
          Download CV
        </button>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
