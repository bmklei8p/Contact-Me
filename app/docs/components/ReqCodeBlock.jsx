"use client";
import { CodeBlock } from "react-code-blocks";

const ReqCodeBlock = ({ tabSelected, tabs }) => {
  const frameworks = [
    {
      name: "Next.js with axios and react-hook-form",
      code: `     "use client"
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
        <>
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
                    <div>
                      <button>
                        Send your message
                      </button>
          </form>
        </>
      );
    };
    export default ContactForm;
    `,
    },
    {
      name: "React",
      code: `import React, { useState } from 'react';

      function ContactForm() {
        const [formData, setFormData] = useState({
          recieverEmail: '',
          senderName: '',
          senderEmail: '',
          subject: '',
          comment: '',
        });
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
        };
      
        const handleSubmit = async (e) => {
          e.preventDefault();
      
          const API_KEY = process.env.NEXT_PUBLIC_EMAIL_API_KEY; // Replace with your API key
      
          const dataToSend = {
            ...formData,
            API_KEY,
          };
      
          try {
            const response = await fetch('https://portfolio-email-service.azurewebsites.net/submit-form', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(dataToSend),
            });
      
            if (response.ok) {
              console.log('Form submitted successfully:', response);
              // Clear the form
              setFormData({
                recieverEmail: '',
                senderName: '',
                senderEmail: '',
                subject: '',
                comment: '',
              });
            } else {
              console.error('Error submitting form:', response);
            }
          } catch (error) {
            console.error('Error submitting form:', error);
          }
        };
      
        return (
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="recieverEmail"
                  placeholder="Receiver email"
                  value={formData.recieverEmail}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="senderName"
                  placeholder="Name"
                  value={formData.senderName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="senderEmail"
                  placeholder="Sender email"
                  value={formData.senderEmail}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="comment"
                  placeholder="Message"
                  value={formData.comment}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <button type="submit">Send your message</button>
              </div>
            </form>
          </div>
        );
      }
      
      export default ContactForm;
      
      `,
    },
    {
      name: "Vue",
      code: `<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <input
          type="text"
          placeholder="Receiver email"
          v-model="formData.recieverEmail"
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Name"
          v-model="formData.senderName"
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Sender email"
          v-model="formData.senderEmail"
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Subject"
          v-model="formData.subject"
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Message"
          v-model="formData.comment"
          required
        />
      </div>
      <div>
        <button type="submit">Send your message</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        recieverEmail: "",
        senderName: "",
        senderEmail: "",
        subject: "",
        comment: "",
      },
    };
  },
  methods: {
    async submitForm() {
      this.formData.API_KEY = process.env.NEXT_PUBLIC_EMAIL_API_KEY;
      try {
        const response = await this.$http.post(
          "https://portfolio-email-service.azurewebsites.net/submit-form",
          this.formData
        );
        this.formData = {
          recieverEmail: "",
          senderName: "",
          senderEmail: "",
          subject: "",
          comment: "",
        };
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  },
};
</script>
      `,
    },
    {
      name: "Javascript",
      code: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Form</title>
      </head>
      <body>
          <div id="app">
              <form id="contactForm">
                  <div>
                      <input
                          type="text"
                          placeholder="Receiver email"
                          id="recieverEmail"
                          required
                      />
                  </div>
                  <div>
                      <input
                          type="text"
                          placeholder="Name"
                          id="senderName"
                          required
                      />
                  </div>
                  <div>
                      <input
                          type="text"
                          placeholder="Sender email"
                          id="senderEmail"
                          required
                      />
                  </div>
                  <div>
                      <input
                          type="text"
                          placeholder="Subject"
                          id="subject"
                          required
                      />
                  </div>
                  <div>
                      <input
                          type="text"
                          placeholder="Message"
                          id="comment"
                          required
                      />
                  </div>
                  <div>
                      <button type="button" id="submitButton">Send your message</button>
                  </div>
              </form>
          </div>
      
          <script>
              document.addEventListener("DOMContentLoaded", function () {
                  const contactForm = document.getElementById("contactForm");
                  const recieverEmailInput = document.getElementById("recieverEmail");
                  const senderNameInput = document.getElementById("senderName");
                  const senderEmailInput = document.getElementById("senderEmail");
                  const subjectInput = document.getElementById("subject");
                  const commentInput = document.getElementById("comment");
                  const submitButton = document.getElementById("submitButton");
      
                  submitButton.addEventListener("click", async function () {
                      const formData = {
                          recieverEmail: recieverEmailInput.value,
                          senderName: senderNameInput.value,
                          senderEmail: senderEmailInput.value,
                          subject: subjectInput.value,
                          comment: commentInput.value,
                          API_KEY: process.env.NEXT_PUBLIC_EMAIL_API_KEY, // Replace with your API key
                      };
      
                      try {
                          const response = await fetch(
                              "https://portfolio-email-service.azurewebsites.net/submit-form",
                              {
                                  method: "POST",
                                  headers: {
                                      "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify(formData),
                              }
                          );
      
                          if (response.ok) {
                              console.log("Form submitted successfully:", response);
                              // Clear the form
                              recieverEmailInput.value = "";
                              senderNameInput.value = "";
                              senderEmailInput.value = "";
                              subjectInput.value = "";
                              commentInput.value = "";
                          } else {
                              console.error("Error submitting form:", response);
                          }
                      } catch (error) {
                          console.error("Error submitting form:", error);
                      }
                  });
              });
          </script>
      </body>
      </html>
      `,
    }
  ];

  const themes = "dracula";
  const showLineNumbers = true;
  const wrapLongLines = false;
  const codeBlock = true;
  return (
    <div className="w-full px-4">
      <h1 className="text-4xl mt-8 font-bold mb-2">
        {frameworks[tabSelected].name}
      </h1>
      <CodeBlock
        className="mt-4 rounded-lg"
        text={frameworks[tabSelected].code}
        language={"javascript"}
        theme={themes}
        wrapLongLines={wrapLongLines}
        {...{ showLineNumbers, codeBlock }}
      />
    </div>
  );
};

export default ReqCodeBlock;
