"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Access form elements directly using FormData
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // Perform basic validation
    if (!email || !subject || !message) {
      // Handle validation errors, e.g., display an error message to the user
      console.error("Please fill in all the required fields");
      return;
    }

    const data = { email, subject, message };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);

      if (!response.ok) {
        // Handle non-OK responses (e.g., server errors)
        console.error("Failed to send message");
        return;
      }

      const resData = await response.json();
      console.log(resData);
      setEmailSubmitted(true);
      // Optionally, show a success message to the user
    } catch (error) {
      // Handle fetch errors (e.g., network issues)
      console.error("Error sending message:", error);
    }
  }

  return (
    <section className="grid md:grid-cols-2 my-12 md:mx-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-color-main to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"github.com"}>
            <img src="/images/github-icon.svg" alt="" />
          </Link>

          <Link href={"github.com"}>
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
              name="message"
              id="message"
              placeholder="Let's talk about..."
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <button
            type="submit"
            className="bg-color-main hover:bg-color-main text-white font-medium py-2.5 px-5 rounded-lg w-full"
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
