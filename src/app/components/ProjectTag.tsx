export default function ProjectTag(prompt: {
  name: string;
  onClick: () => void;
  isSelected: boolean;
}) {
  const buttonStyles = prompt.isSelected
    ? "text-white border-purple-500"
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
