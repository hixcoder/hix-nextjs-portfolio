import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function ProjectCard(prompt: {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}) {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${prompt.imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center rounded-t-xl absolute top-0 left-0 right-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={prompt.gitUrl}
            target="_blank"
            className="h-14 w-14 mr-2 border-2 flex justify-center items-center rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover/link:text-white " />
          </Link>
          {prompt.previewUrl != "" ? (
            <Link
              target="_blank"
              href={prompt.previewUrl}
              className="h-14 w-14 border-2 flex justify-center items-center rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover/link:text-white " />
            </Link>
          ) : null}
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="font-xl font-semibold mb-2">{prompt.title}</h5>
        <p className=" text-[#ADB7BE]">{prompt.description}</p>
      </div>
    </div>
  );
}
