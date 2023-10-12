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
      className="w-full h-full flex items-center justify-center overflow-hidden scale-0 opacity-0 -translate-y-1/2 translate-x-48 duration-500"
    >
      <div className="flex flex-col justify-center items-center h-2/3 w-full md:w-1/2 px-4 overflow-hidden">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold pb-2">
          Did I pique your <i>interest?</i>
        </h1>
        <h2 className="text-lg md:text-2xl lg:text-3xl italic font-semibold pb-8">
          Feel free to reach out:
        </h2>
        <div className="h-full w-full px-4">
          <EmailForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
