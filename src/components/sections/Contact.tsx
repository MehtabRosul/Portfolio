import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const cosmicIcons = ["🌑", "🌓", "🌕", "🌟", "🧑🏽‍🚀"]; // Unique cosmic rating icons
const tooltipText = [
  "Not Great",
  "Needs Improvement",
  "Good Job",
  "Excellent",
  "Out of this World!",
];

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0); // Rating state
  const [hasRated, setHasRated] = useState(false); // Track if rated

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleRatingClick = (index: number) => {
    if (hasRated) return; // Prevent further rating

    setRating(index + 1);
    setHasRated(true);

    // Trigger a custom toast notification
    toast(
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-lg">Thank You!</h3>
        <p>Your rating: {tooltipText[index]}</p>
        <div style={{ fontSize: "2rem" }}>{cosmicIcons[index]}</div>
      </div>,
      {
        className: "bg-cyan-600 text-white",
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeButton: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        icon: <span style={{ fontSize: "2rem" }}>{cosmicIcons[index]}</span>,
      }
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
        (emailError: unknown) => {
          setLoading(false);
          console.error(emailError);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
        style={{ minWidth: "350px" }}
      >
        {/* Unique Cosmic Rating System */}
        <div className="mb-8 flex flex-col items-center text-center">
          <h3 className="text-xl font-bold text-white mb-4">
            Rate this portfolio
          </h3>
          <div className="relative flex justify-center items-center">
            {cosmicIcons.map((icon, index) => (
              <motion.div
                key={index}
                className={`relative mx-2 ${
                  hasRated ? "cursor-default" : "cursor-pointer"
                }`}
                onClick={() => handleRatingClick(index)}
                whileHover={
                  !hasRated
                    ? {
                        scale: 1.4,
                        rotate: 360,
                        transition: { duration: 0.5 },
                      }
                    : {}
                }
                animate={
                  hasRated
                    ? {}
                    : {
                        scale: rating === index + 1 ? 1.5 : 1,
                        filter: rating === index + 1 ? "brightness(1.2)" : "none",
                        transition: { type: "spring", stiffness: 200 },
                      }
                }
              >
                <span
                  style={{
                    fontSize: "2.5rem",
                    color: rating === index + 1 ? "#FFD700" : "#aaa",
                  }}
                >
                  {icon}
                </span>
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
              {cosmicIcons[rating - 1]} {tooltipText[rating - 1]}
            </motion.div>
          )}
        </div>

        {/* Contact Form */}
        <Header useMotion={false} {...config.contact} />
        <form
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
            className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white outline-none hover:bg-gray-700"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex flex-1 items-center justify-center"
      >
        <EarthCanvas />
      </motion.div>
      <ToastContainer />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
