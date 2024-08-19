"use client";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactForm: React.FC = () => {
  const form = useRef<any>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm("beginnerfolio", "template_1nwrqv3", form.current, {
        publicKey: "8Cwvsof5QtYu4nIGq",
      })
      .then(
        () => {
          Swal.fire({
            title: "Successfully Sent",
            text: "Your Mail is Sent!",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
        },
        (error) => {
          Swal.fire({
            title: "Something went wrong",
            icon: "error",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      );

    e.currentTarget.reset();
  };

  return (
    <>
      <h1 className="text-4xl italic font-bold text-center md:text-start pl-7 xl:pl-16 max-w-screen-xl mx-auto text-white">
        <span className="text-[#4E9F3D]">Contact</span> Me
      </h1>

      <div className="flex flex-col md:flex-row w-[90%] max-w-screen-lg mx-auto pb-6">
        <div className="flex flex-col justify-center md:mr-4">
          <h1 className="hidden md:block md:text-6xl lg:text-8xl text-white font-bold mb-2">
            Let&#39;s Grab Coffee & Chat 🚀
          </h1>
          <p className="text-lg md:text-xl text-white md:w-[80%] mt-9 md:mt-0">
            Thank you for visiting! I hope you find everything you need for your
            website. Please fill out the form below to discuss your project.
          </p>
        </div>
        <div className="flex max-w-full md:w-[1100px] lg:max-w-[400px] mx-auto mt-4 md:mt-0">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="p-8 rounded-lg shadow-lg bg-cover"
            style={{ backgroundImage: "url(./bg-white.jpg)" }}
          >
            <label className="text-black font-semibold">Name:</label>
            <input
              type="text"
              name="user_name"
              placeholder="jhon"
              className="border text-black border-gray-400 text-sm p-3 w-full rounded-lg mb-4"
              required
            />
            <label className="text-black font-semibold">Your Email:</label>
            <input
              type="email"
              name="user_email"
              placeholder="jhon@gmail.com"
              className="border text-black border-gray-400 text-sm p-3 w-full rounded-lg mb-4"
              required
            />
            <label className="text-black font-semibold">Subject:</label>
            <input
              type="text"
              name="subject"
              placeholder="contact with you"
              className="border text-black border-gray-400 text-sm p-3 w-full rounded-lg mb-4"
              required
            />
            <label className="text-black font-semibold">Message:</label>
            <textarea
              name="message"
              placeholder="Leave a message"
              className="border text-black border-gray-400 text-sm resize-none p-3 w-full h-28 rounded-lg"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-gray-800 text-white font-semibold py-2 px-4 w-full rounded-lg mt-4 hover:bg-gray-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
