import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import {fadeIn, slideIn, textVariant} from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[210px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
  <div className="flex p-20 background-image">
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a software engineer with two years of experience in web development,
        both backend and frontend. Passionate about sport, nature and coding.
        With objectives, among others, to achieve stability within a company in
        which I can put my skills into practice, as well as being able to carry out
        different projects in which to focus my motivation.
      </motion.p>

      <div className='flex flex-wrap gap-5 mt-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
        <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className='w-2/4 mt-20 hidden phone-mobile'
        >
            <img
                src={"/img/felipe.PNG"}
                alt="ficture"
                className="w-full h-auto"
            />
        </motion.div>
    </div>


</div>


    </>
  );
};

export default SectionWrapper(About, "about");
