"use client";
import { useForm } from "react-hook-form";
import axios from "axios";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.target.reset();
    data.API_KEY = process.env.NEXT_PUBLIC_EMAIL_API_KEY;
    const response = await axios.post(
      "https://portfolio-email-service.azurewebsites.net/submit-form",
      data
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          placeholder="Reciever email"
          {...register("recieverEmail", { required: true })}
        />
        <input
          type="text"
          placeholder="Name"
          {...register("senderName", { required: true })}
        />
        <input
          type="text"
          placeholder="Sender email"
          {...register("senderEmail", { required: true })}
        />
        <input
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        <input
          type="text"
          placeholder="Message"
          {...register("comment", { required: true })}
        />
      </div>
      <div>
        <button>Send your message</button>
      </div>
    </form>
  );
};

export default ContactForm;
