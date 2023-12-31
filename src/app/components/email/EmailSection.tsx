"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [data, setData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  function onHandleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Access form elements directly using FormData
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    formData.set("email", "");

    // Perform basic validation
    if (!email || !subject || !message) {
      // Handle validation errors, e.g., display an error message to the user
      console.error("Please fill in all the required fields");
      return;
    }

    const data = {
      email: email,
      subject: subject,
      message: message,
    };
    const JSONdata = JSON.stringify(data);
    try {
      const endpoint = "/api/send";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      });
      setData({
        email: "",
        subject: "",
        message: "",
      });
      if (!response.ok) {
        // Handle non-OK responses (e.g., server errors)
        console.error("Failed to send message");
        return;
      }

      setEmailSubmitted(true);
      setTimeout(() => {
        setEmailSubmitted(false);
      }, 6000);
    } catch (error) {
      // Handle fetch errors (e.g., network issues)
      console.error("Error sending message:", error);
    }
  }

  return (
    <section
      className="grid md:grid-cols-2 my-12 md:mx-12 py-24 gap-4 relative"
      id="contact"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          We&apos;re excited to hear from you! Whether you have questions, want
          to collaborate, or simply want to say hello, feel free to reach out.
          Your feedback and inquiries are valuable to us. Drop us a message, and
          we&apos;ll get back to you as soon as possible.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link target="_blank" href={"https://github.com/hixcoder"}>
            <img src="/images/github-icon.svg" alt="" />
          </Link>

          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/hamza-boumahdi"}
          >
            <img src="/images/linkedin-icon.svg" alt="" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col " onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              onChange={onHandleChange}
              value={data.email}
              name="email"
              type="email"
              id="email"
              required
              placeholder="email@example.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              onChange={onHandleChange}
              value={data.subject}
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="Just Say Hi!"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              onChange={onHandleChange}
              value={data.message}
              name="message"
              id="message"
              placeholder="Let's talk about..."
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <button
            type="submit"
            className="bg-color-main hover:bg-orange-700 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfuly
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
