import { ReactNode } from "react";

export default function TabButton(prompt: {
  active: boolean;
  selectTab: () => {};
  children: ReactNode;
}) {
  const buttonClasses = prompt.active
    ? "text-white border-b border-purple-500"
    : "text-[#ADB7BE] ";
  return (
    <button
      onClick={prompt.selectTab}
      className={`flex flex-row mt-8 mr-4 hover:text-white ${buttonClasses}`}
    >
      {prompt.children}
    </button>
  );
}
