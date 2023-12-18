export default function ProjectTag(prompt: {
  name: string;
  onClick: () => void;
  isSelected: boolean;
}) {
  const buttonStyles = prompt.isSelected
    ? "text-white border-color-main"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      onClick={prompt.onClick}
      className={`rounded-full border-2  px-6 py-3 text-xl cursor-pointer ${buttonStyles}`}
    >
      {prompt.name}
    </button>
  );
}
