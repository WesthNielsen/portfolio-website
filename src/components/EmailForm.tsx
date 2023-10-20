import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "");
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        from_name: nameRef.current?.value,
        from_email: emailRef.current?.value,
        message: textRef.current?.value,
      });
      alert("email successfully sent check inbox");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="flex h-full w-full flex-col items-center justify-start"
      onSubmit={handleSubmit}
    >
      <input
        className=" w-full rounded-xl border border-text bg-background/50 p-2 focus:border-accent focus:outline-none focus:ring-0"
        ref={nameRef}
        type="text"
        placeholder="Your name"
        required={true}
      />
      <input
        className=" my-8 w-full rounded-xl border border-text bg-background/50 p-2 focus:border-accent focus:outline-none focus:ring-0"
        ref={emailRef}
        type="email"
        placeholder="Your email"
        required={true}
      />
      <textarea
        className=" h-full w-full rounded-xl border border-text bg-background/50 p-2 focus:border-accent focus:outline-none focus:ring-0"
        ref={textRef}
        placeholder="Your message"
      />
      <button
        className="my-4 flex w-1/3 cursor-pointer justify-center"
        disabled={loading}
      >
        <div className="group relative w-full">
          <div className="w-full rounded-xl border-2 p-2 text-sm font-bold md:text-base lg:text-xl">
            Let's connect
          </div>
          <div className="absolute left-0 top-0 h-full w-full rounded-xl duration-200 group-hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,inset_0_0_5px_#972bc5,inset_0_0_15px_#972bc5,inset_0_0_30px_#972bc5]" />
          <div className="absolute left-0 top-0 h-full w-full rounded-xl duration-200 group-hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#972bc5,0_0_15px_#972bc5,0_0_30px_#972bc5]" />
        </div>
      </button>
    </form>
  );
};

export default EmailForm;
