import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_ym3lo8g",
        "template_56xoylw",
        {
          from_name: form.name,
          to_name: "Fernando",
          from_email: form.email,
          to_email: "contact@jssmastery.pro",
          message: form.message,
        },
        "aQ6vYj0jDyU7dLrx9"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for the message! We will get back to you soon.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);

          alert("Message did not send. Something went wrong.");
        }
      );
  };
  return (
    <div className="bg-[url('/images/texture2.png')] bg-cover h-full overflow-hidden relative">
      <div className="py-24 md:pt-96 pt-36 lg:px-24 px-12 flex flex-col-reverse xl:flex-row text-[#e2e2e2]">
        <motion.form
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, ease: "easeOut" }}
          ref={formRef}
          onSubmit={handleSubmit}
          className="xl:w-1/2 flex flex-col gap-5 xl:pr-12 before:z-0 relative before:bg-[#e2e2e2]/10 before:absolute before:h-[1200px] before:w-[1200px] before:rounded-full before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2"
        >
          <input
            placeholder="Name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="p-10 z-20 text-xl placeholder:text-xl text-[#2e2e2e] ring-0 outline-none placeholder:text-[#2e2e2e] w-full rounded-[36px] bg-[#e2e2e2]"
          ></input>
          <input
            placeholder="Email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="p-10 z-20 text-xl placeholder:text-xl text-[#2e2e2e] ring-0 outline-none placeholder:text-[#2e2e2e] w-full rounded-[36px] bg-[#e2e2e2]"
          ></input>
          <textarea
            placeholder="Message"
            rows={5}
            name="message"
            type="text"
            value={form.message}
            onChange={handleChange}
            required
            className="p-10 resize-none z-20 text-xl placeholder:text-xl text-[#2e2e2e] ring-0 outline-none placeholder:text-[#2e2e2e] w-full rounded-[36px] bg-[#e2e2e2]"
          ></textarea>
          <button
            type="submit"
            className="z-20 cursor-pointer border duration-300 before:z-[-1] before:absolute hover:text-[#2e2e2e] relative before:w-full before:h-full before:bg-[#e2e2e2] before:rounded-full before:scale-x-0 before:origin-right hover:before:origin-left before:transition-transform hover:before:scale-x-100 overflow-hidden before:duration-300 border-[#e2e2e2] text-[#e2e2e2] xl:px-48 md:px-24 sm:px-12 px-6 md:py-10 py-5 rounded-full flex justify-center items-center xl:text-5xl md:text-3xl text-xl"
          >
            Send
          </button>
        </motion.form>
        <div className="xl:text-right text-center xl:w-1/2 xl:pl-12 flex flex-col items-center xl:mb-0 mb-24 xl:items-end gap-5">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, ease: "easeOut" }}
            className="xl:text-8xl text-5xl"
          >
            Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, ease: "easeOut" }}
            className="text-xl max-w-lg"
          >
            Send us a message to express your interest in collaborating with our
            team.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
