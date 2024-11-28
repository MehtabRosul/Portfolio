import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { testimonials } from "../../constants";
import { Header } from "../atoms/Header";
import { TTestimonial } from "../../types";
import { SectionWrapper } from "../../hoc";
import { config } from "../../constants/config";

const FeedbackCard: React.FC<{ index: number } & TTestimonial> = ({
  index,
  testimonial,
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
      <p className='text-white tracking-wider text-[20px]'>{testimonial}</p>

      <div className='mt-5 flex justify-between items-center gap-1'>
        <div className='flex-1 center flex-col'>
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
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <Header useMotion={true} {...config.sections.feedbacks} />
      </div>
      <div
        className={`-mt-10 pb-20 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");

