import React, { useEffect } from "react";
import EmailForm from "../components/EmailForm";

const Contact = () => {
  useEffect(() => {
    const contactContainer = document.getElementById("contactContainer");
    if (contactContainer) {
      setTimeout(() => {
        contactContainer.classList.remove("scale-0");
        contactContainer.classList.remove("opacity-0");
        contactContainer.classList.remove("-translate-y-1/2");
        contactContainer.classList.remove("translate-x-48");
      }, 100);
    }
  }, []);

  return (
    <div
      id="contactContainer"
      className="w-full h-full flex items-center justify-center scale-0 duration-1000 ease-in-out opacity-0 -translate-y-1/2 translate-x-48"
    >
      <div className="w-full h-3/5 flex flex-col items-center justify-center ">
        <h1 className="text-4xl font-bold mb-2">
          Did I pique your <i>interest?</i>
        </h1>
        <h2 className="text-2xl font-semibold italic mb-8">
          Feel free to reach out:
        </h2>
        <EmailForm />
      </div>
    </div>
  );
};

export default Contact;
