'use client'
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const BannerContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.target.reset();

    try {
      // const response = await axios.post("http://localhost:8000/submit-form", data);
      // backend prod
      console.log(data)
      const response = await axios.post("https://portfolio-email-service.azurewebsites.net/submit-form", data);
      if (response.status === 200) {
        console.log('Email sent successfully');
        // Optionally, you can show a success message to the user
      } else {
        console.error('Failed to send email');
        // Optionally, you can show an error message to the user
      }
    } catch (error) {
      console.error('An error occurred while sending the email', error);
      // Optionally, you can show an error message to the user
    }
  };

  return (
    <>
      <form className="contct-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Full name"
                {...register("name", { required: true })}
              />
              <label className="form-label">Name</label>
              {errors.name && errors.name.type === "required" && (
                <span className="invalid-feedback">Name is required</span>
              )}
            </div>
          </div>
          {/* End .col-6 */}

          <div className="col-md-6">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email address"
                {...register(
                  "email",
                  {
                    required: "Email is Required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  },
                  { required: true }
                )}
              />
              <label className="form-label">Email</label>
              {errors.email && (
                <span className="invalid-feedback">{errors.email.message}</span>
              )}
            </div>
          </div>
          {/* End .col-6 */}

          <div className="col-12">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                {...register("subject", { required: true })}
              />
              <label className="form-label">Subject</label>
              {errors.subject && (
                <span className="invalid-feedback">Subject is required.</span>
              )}
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="form-group">
              <textarea
                rows="4"
                className="form-control"
                placeholder="Type comment"
                {...register("comment", { required: true })}
              ></textarea>
              <label className="form-label">Comment</label>
              {errors.comment && (
                <span className="invalid-feedback">Comment is required.</span>
              )}
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="btn-bar">
              <button className="px-btn px-btn-theme">Send your message</button>
            </div>
          </div>
          {/* End .col-12 */}
        </div>
      </form>
    </>
  );
};

export default BannerContact;