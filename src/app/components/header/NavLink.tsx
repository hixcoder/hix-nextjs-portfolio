import Link from "next/link";

export default function NavLink(prompt: { title: string; href: string }) {
  return (
    <Link
      href={prompt.href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {prompt.title}
    </Link>
  );
}
