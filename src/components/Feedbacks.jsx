import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certificates } from "../constants";

const FeedbackCard = ({
  index,
  certificates,
  name,
  designation,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[20px] pb-4'>🧷</p>
    
    <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-200 h-200  object-cover'
        />
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[20px]'>{certificates}</p>

      <div className='mt-5 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[20px]'>
            <span className='blue-text-gradient'>#</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[15px]'>
            {designation} 
          </p>
        </div>

        
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-5  bg-black-100 rounded-[5px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[100px]`}
      >
        <motion.div variants={textVariant()}>
          <h1 className={styles.sectionHeadText}>Certificates & Awards.</h1>
        </motion.div>
      </div>
      <div className={`-mt-10 pb-5 pb-55 ${styles.paddingX} flex flex-wrap gap-7`}>
        {certificates.map((certificates, index) => (
          <FeedbackCard key={certificates.name} index={index} {...certificates} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
