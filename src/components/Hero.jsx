import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { github } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className={`z-10`}>
  <h1 className={`${styles.heroHeadText} text-white`}>
    Hi, I'm <span className='text-[#915EFF]'>Felipe</span>
  </h1>
  <p className={`${styles.heroSubText} mt-2 text-white-100`}>
    Full-stack web developer
  </p>
  <button
    type='button'
    onClick={() => window.open("/documents/cv-felipe-lopez-en.pdf", "_blank")}
    className='mt-5 mb-5 bg-tertiary py-3 px-8 rounded-xl green-pink-gradient w-fit text-white font-bold shadow-md shadow-primary'
  >
    Download CV
  </button>

  <div className="flex ml-7">
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
</div>


      </div>

      <ComputersCanvas/>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
