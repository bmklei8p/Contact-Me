"use client";
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
      console.log(data);
      const response = await axios.post(
        "https://portfolio-email-service.azurewebsites.net/submit-form",
        data
      );
      if (response.status === 200) {
        console.log("Email sent successfully");
        // Optionally, you can show a success message to the user
      } else {
        console.error("Failed to send email");
        // Optionally, you can show an error message to the user
      }
    } catch (error) {
      console.error("An error occurred while sending the email", error);
      // Optionally, you can show an error message to the user
    }
  };

  return (
    <div className="h-full w-full min-w-fit flex flex-col items-center justify-center">
      <div className="w-[90%] bg-gray-100 py-10 flex flex-wrap justify-center relative">
        <h1 className="text-3xl mb-3 absolute left-12">
          <strong>Contact</strong> me
        </h1>
        <div className="w-[90%] bg-white py-6 px-6 mt-12 shadow-2xl overflow-hidden ">
          <div className="w-full flex flex-col gap-y-8">
            <div>
              <input
                className="bg-white border-2 border-gray-400 px-4 py-1 "
                type="text"
                placeholder="reciever email"
              />
            </div>
            <div className="flex flex-col sm:gap-y-8 gap-x-8  md:flex-row ">
              <input
                className="bg-white border-2 border-gray-400 px-4 py-1 "
                type="text"
                placeholder="name"
              />
              <input
                className="bg-white border-2 border-gray-400 px-4 py-1 "
                type="text"
                placeholder="email"
              />
            </div>
            <div>
              <input
                className="bg-white border-2 border-gray-400 px-4 py-1 "
                type="text"
                placeholder="subject"
              />
            </div>
            <div className="">
              <input
                className="bg-contentBackground w-full h-24 border-2 border-gray-400 px-4"
                type="text"
                placeholder="message"
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
      {/* <div className="w-full bg-blue-100">
        <div className="">
          <h1>Contact Me</h1>
          <div className="w-[90%] bg-red-100 flex flex-col gap-y-4 my-8">
            <input type="text" placeholder="name" />
            <input type="text" placeholder="name" />
            <input type="text" placeholder="name" />
            <input type="text" placeholder="name" />
            <input type="text" placeholder="name" />
          </div>
        </div>
      </div> */}
    </div>
  );
};
//   return (
//     <>
//       {/* <form className="contct-form" onSubmit={handleSubmit(onSubmit)}> */}
//       <form className="w-full flex just-center" onSubmit={handleSubmit(onSubmit)}>
//         <div className="row">
//           <div className="col-md-6">
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Full name"
//                 {...register("name", { required: true })}
//               />
//               <label className="form-label">Name</label>
//               {errors.name && errors.name.type === "required" && (
//                 <span className="invalid-feedback">Name is required</span>
//               )}
//             </div>
//           </div>
//           {/* End .col-6 */}

//           <div className="col-md-6">
//             <div className="form-group">
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Email address"
//                 {...register(
//                   "email",
//                   {
//                     required: "Email is Required",
//                     pattern: {
//                       value: /\S+@\S+\.\S+/,
//                       message: "Entered value does not match email format",
//                     },
//                   },
//                   { required: true }
//                 )}
//               />
//               <label className="form-label">Email</label>
//               {errors.email && (
//                 <span className="invalid-feedback">{errors.email.message}</span>
//               )}
//             </div>
//           </div>
//           {/* End .col-6 */}

//           <div className="col-12">
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Subject"
//                 {...register("subject", { required: true })}
//               />
//               <label className="form-label">Subject</label>
//               {errors.subject && (
//                 <span className="invalid-feedback">Subject is required.</span>
//               )}
//             </div>
//           </div>
//           {/* End .col-12 */}

//           <div className="col-12">
//             <div className="form-group">
//               <textarea
//                 rows="4"
//                 className="form-control"
//                 placeholder="Type comment"
//                 {...register("comment", { required: true })}
//               ></textarea>
//               <label className="form-label">Comment</label>
//               {errors.comment && (
//                 <span className="invalid-feedback">Comment is required.</span>
//               )}
//             </div>
//           </div>
//           {/* End .col-12 */}

//           <div className="col-12">
//             <div className="btn-bar">
//               <button className="px-btn px-btn-theme">Send your message</button>
//             </div>
//           </div>
//           {/* End .col-12 */}
//         </div>
//       </form>
//     </>
//   );
// };

export default BannerContact;
