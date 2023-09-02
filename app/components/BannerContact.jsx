"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

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
    data.API_KEY = process.env.NEXT_PUBLIC_EMAIL_API_KEY;
    try {
      const response = await axios.post(
        "https://portfolio-email-service.azurewebsites.net/submit-form",
        data
      );
      if (response.status === 201) {
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
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-20 mb-8 md:mb-0 md:mt-0 md:h-[100vh] w-full min-w-fit flex flex-col items-center justify-center">
          <div className="w-[90%] bg-offset py-10 flex flex-wrap justify-center relative">
            {emailSentSuccessfully && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-background p-8 rounded-md">
                  <h1 className="text-2xl font-bold mb-4 text-center">
                    Email sent successfully
                  </h1>
                  <p className="text-lg mb-8">
                    Thank you for contacting me. I will get back to you as soon
                    as possible.
                  </p>
                  <button
                    className="px-4 py-2 mt-4 flex justify-center w-full text-lg font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => setEmailSentSuccessfully(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
            {emailSentFailed && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-background p-8 rounded-md">
                  <h1 className="text-2xl font-bold mb-4">
                    Email sending failed
                  </h1>
                  <p className="text-lg">
                    Please try again. If you continue to see this message,
                    please contact me via linkedin.
                  </p>
                  <button
                    className="px-4 py-2 mt-4 text-lg font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => setEmailSentSuccessfully(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
            <h1 className="text-3xl mb-4 absolute left-12">
              <div className="flex">
                {/* <strong><span className="border-b-2 border-black">C</span>ontact</strong> me */}
                <span>
                  <strong className="border-b-2 border-black">C</strong>
                  <strong>ontact</strong> me
                </span>
              </div>
            </h1>
            <div className="w-[90%] bg-contrast py-6 px-6 mt-12 shadow-2xl overflow-hidden ">
              <div className="flex flex-col gap-y-8">
                <div>
                  <input
                    type="text"
                    className="bg-contrast border-2 border-gray-400 px-4 py-1 "
                    placeholder="Reciever email"
                    {...register("recieverEmail", { required: true })}
                  />
                  {errors.name && errors.name.type === "required" && (
                    <span className="invalid-feedback">Name is required</span>
                  )}
                </div>
                <span className="flex flex-col gap-y-8 gap-x-8 xl:flex-row">
                  <input
                    className="bg-contrast border-2 border-gray-400 px-4 py-1 "
                    type="text"
                    placeholder="Name"
                    {...register("senderName", { required: true })}
                  />
                  <input
                    className="bg-contrast border-2 border-gray-400 px-4 py-1 "
                    type="text"
                    placeholder="Sender email"
                    {...register("senderEmail", { required: true })}
                  />
                </span>
                <div>
                  <input
                    className="bg-contrast border-2 border-gray-400 px-4 py-1 "
                    type="text"
                    placeholder="Subject"
                    {...register("subject", { required: true })}
                  />
                </div>
                <div className="">
                  <input
                    className="bg-contrast w-full h-24 border-2 border-gray-400 px-4"
                    type="text"
                    placeholder="Message"
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
    </>
  );
};
export default BannerContact;
