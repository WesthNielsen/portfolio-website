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
      className="flex h-full w-full -translate-y-1/2 translate-x-48 scale-0 items-center justify-center overflow-hidden opacity-0 duration-500"
    >
      <div className="flex h-2/3 w-full flex-col items-center justify-center overflow-hidden px-4 md:w-1/2">
        <h1 className="pb-2 text-2xl font-bold md:text-3xl lg:text-4xl">
          Did I pique your <i>interest?</i>
        </h1>
        <h2 className="pb-8 text-lg font-semibold italic md:text-2xl lg:text-3xl">
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
