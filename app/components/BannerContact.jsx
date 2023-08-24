"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { set } from "mongoose";

const BannerContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [emailSentSuccessfully, setEmailSentSuccessfully] = useState(false);
  const [emailSentFailed, setEmailSentFailed] = useState(false);


  const onSubmit = async (data, e) => {
    e.target.reset();
    data.API_KEY=process.env.NEXT_PUBLIC_EMAIL_API_KEY
    try {
      const response = await axios.post(
        "https://portfolio-email-service.azurewebsites.net/submit-form",
        data
      );
      if (response.status === 200) {
        console.log("Email sent successfully");
        setEmailSentSuccessfully(true);
      } else {
        console.error("Failed to send email");
        setEmailSentFailed(true);
      }
    } catch (error) {
      console.error("An error occurred while sending the email", error);
      setEmailSentFailed(true);
    }
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="h-[100vh] w-full min-w-fit flex flex-col items-center justify-center">
        <div className="w-[90%] bg-gray-100 py-10 flex flex-wrap justify-center relative">
          <h1 className="text-3xl mb-3 absolute left-12">
            <strong>Contact</strong> me
          </h1>
          <div className="w-[90%] bg-white py-6 px-6 mt-12 shadow-2xl overflow-hidden ">
            <div className="flex flex-col gap-y-8">
              <div>
                <input
                  type="text"
                  className="bg-white border-2 border-gray-400 px-4 py-1 "
                  placeholder="Reciever email"
                  {...register("recieverEmail", { required: true })}
                />
                {errors.name && errors.name.type === "required" && (
                  <span className="invalid-feedback">Name is required</span>
                )}
              </div>
              <span className="flex flex-col gap-y-8 gap-x-8 xl:flex-row">
                <input
                  className="bg-white border-2 border-gray-400 px-4 py-1 "
                  type="text"
                  placeholder="name"
                  {...register("senderName", { required: true })}
                />
                <input
                  className="bg-white border-2 border-gray-400 px-4 py-1 "
                  type="text"
                  placeholder="email"
                  {...register("senderEmail", { required: true })}
                />
              </span>
              <div>
                <input
                  className="bg-white border-2 border-gray-400 px-4 py-1 "
                  type="text"
                  placeholder="subject"
                  {...register("subject", { required: true })}
                />
              </div>
              <div className="">
                <input
                  className="bg-contentBackground w-full h-24 border-2 border-gray-400 px-4"
                  type="text"
                  placeholder="message"
                  {...register("comment", { required: true })}
                />
              </div>
              <div>
                <button className="min-w-fit px-4 py-2 text-lg font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                  Send your message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default BannerContact;
