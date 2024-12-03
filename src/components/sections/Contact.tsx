import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

// Unique emojis for rating
const cosmicIcons = ["🌑", "🌓", "🌕", "🌟", "🧑🏽‍🚀"]; // Unique cosmic rating icons
const uniqueMessages = [
  "Not Great",
  "Needs Improvement",
  "Good Job",
  "Excellent",
  "Out of this World!",
];

const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0); // Rating state
  const [isRated, setIsRated] = useState(false); // Track if already rated

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_830l88b",
        "template_juhv3sl",
        {
          from_name: form.name,
          to_name: "Rosul.",
          from_email: form.email,
          to_email: "mehtabrosul10@gmail.com",
          message: form.message,
        },
        "6Ss5B0ct1y8AFzbMZ"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm(INITIAL_STATE);
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        {/* Rating System */}
        <div className="mb-8 flex flex-col items-center text-center">
          <h3 className="text-xl font-bold text-white mb-4">
            Rate this portfolio
          </h3>
          <div className="relative flex justify-center items-center">
            {uniqueIcons.map((icon, index) => (
              <motion.div
                key={index}
                className={`relative mx-2 cursor-pointer ${
                  isRated ? "pointer-events-none" : ""
                }`}
                onClick={() => {
                  setRating(index + 1);
                  setIsRated(true);
                }}
                whileHover={!isRated ? { scale: 1.3, rotate: 360 } : {}}
                animate={{
                  scale: rating === index + 1 ? 1.5 : 1,
                  filter: rating === index + 1 ? "brightness(1.2)" : "none",
                  transition: { type: "spring", stiffness: 200 },
                }}
              >
                <span
                  style={{
                    fontSize: "2.5rem",
                    color: rating === index + 1 ? "#FFD700" : "#aaa",
                  }}
                >
                  {icon}
                </span>
                {rating === index + 1 && (
                  <motion.div
                    className="absolute top-[-20px] left-[50%] translate-x-[-50%] text-xs bg-white text-black px-2 py-1 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {uniqueMessages[index]}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
          {rating > 0 && (
            <motion.div
              className="mt-4 text-lg text-cyan-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {uniqueIcons[rating - 1]} {uniqueMessages[rating - 1]}
            </motion.div>
          )}
        </div>

        {/* Contact Form */}
        <Header useMotion={false} {...config.contact} />
        <form
          // @ts-expect-error
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === "message" ? "textarea" : "input";

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-white">{span}</span>
                <Component
                  type={input === "email" ? "email" : "text"}
                  name={input}
                  value={form[`${input}`]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                  {...(input === "message" && { rows: 7 })}
                />
              </label>
            );
          })}
          <button
            type="submit"
            className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
