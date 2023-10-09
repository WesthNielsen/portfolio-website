import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("gehQ92_jzf9VbR5a9");
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const serviceId = "service_q310puo";
    const templateId = "template_jimorlt";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        from_name: nameRef.current?.value,
        from_email: emailRef.current?.value,
        message: textRef.current?.value,
      });
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="flex items-center justify-start flex-col h-full w-full"
      onSubmit={handleSubmit}
    >
      <input
        className=" bg-background/50 rounded-xl border border-text focus:border-accent focus:outline-none focus:ring-0 p-2 w-full md:w-2/5"
        ref={nameRef}
        type="text"
        placeholder="Your name"
        required={true}
      />
      <input
        className=" bg-background/50 rounded-xl border border-text focus:border-accent focus:outline-none focus:ring-0 p-2 w-full md:w-2/5 my-8"
        ref={emailRef}
        type="email"
        placeholder="Your email"
        required={true}
      />
      <textarea
        className=" bg-background/50 rounded-xl border border-text focus:border-accent focus:outline-none focus:ring-0 p-2 w-full md:w-2/5 h-full"
        ref={textRef}
        placeholder="Your message"
      />
      <button
        className="w-full md:w-2/5 my-4 group flex justify-center cursor-pointer"
        disabled={loading}
      >
        <div className="w-3/4 md:w-1/4 relative">
          <div className="border-2 p-2 rounded-xl w-full text-xl font-bold">Let's connect</div>
          <div className="duration-200 w-full h-full rounded-xl absolute top-0 left-0 group-hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,inset_0_0_5px_#972bc5,inset_0_0_15px_#972bc5,inset_0_0_30px_#972bc5]" />
          <div className="duration-200 w-full h-full rounded-xl absolute top-0 left-0 group-hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#972bc5,0_0_15px_#972bc5,0_0_30px_#972bc5]" />
        </div>
      </button>
    </form>
  );
};

export default EmailForm;
