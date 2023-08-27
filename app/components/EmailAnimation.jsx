"use client";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { useState, useEffect } from "react";

const EmailAnimation = () => {
  const [emailFlyingAnimationComplete, setEmailFlyingAnimationComplete] =
    useState(false);
  const [triggerExplosionAnimation, setTriggerExplosionAnimation] =
    useState(false);

  useEffect(() => {
    const delayForAnimation = (event) => {
      setTimeout(() => {
        setEmailFlyingAnimationComplete(true);
        setTriggerExplosionAnimation(true);
      }, 900);
    };
    delayForAnimation();
  }, []);

  return (
    <>
      {/* desktop */}
      <MdOutlineMarkEmailUnread
        className={
          emailFlyingAnimationComplete
            ? "absolute right-10 text-blue-500 hidden lg:block"
            : "hidden"
        }
        size={60}
      />{" "}
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
      <MdOutlineMarkEmailUnread
        className={
          emailFlyingAnimationComplete
            ? "absolute top-24 text-blue-500 lg:hidden"
            : "hidden"
        }
        size={60}
      />{" "}
      <div
        id="animate"
        className="w-16 h-16 absolute animate-email-flying-animation"
      >
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
