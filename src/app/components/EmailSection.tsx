import Link from "next/link";

export default function EmailSection() {
  return (
    <section className="grid md:grid-cols-2 my-12 md:mx-12 py-24 gap-4">
      <div>
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
    </section>
  );
}
