"use client";
import { SiMinutemailer } from "react-icons/si";
import { useState, useEffect } from "react";

const EmailAnimation = () => {
  const [emailFlyingAnimationComplete, setEmailFlyingAnimationComplete] =
    useState(false);


  useEffect(() => {
    const delayForAnimation = (event) => {
      setTimeout(() => {
        setEmailFlyingAnimationComplete(true);
      }, 900);
    };
    delayForAnimation();
  }, []);

  return (
    <>
      {/* desktop */}
      <div
        id="animate"
        className="w-16 h-16 absolute animate-email-flying-animation"
      >
        <SiMinutemailer
          className={
            emailFlyingAnimationComplete === true
              ? "hidden"
              : "absolute text-blue-500 hidden lg:block"
          }
          size={60}
        />
      </div>
      {/* mobile */}
      <div>
        <SiMinutemailer
          className={
            emailFlyingAnimationComplete === true
              ? "hidden"
              : "absolute text-blue-500 lg:hidden"
          }
          size={60}
        />
      </div>
    </>
  );
};

export default EmailAnimation;
