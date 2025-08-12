import Image from "next/image";
import Nav from "./Nav";

export default function Body() {
  return (
    <div className="h-fit w-full">
      <Nav />
      <div className="flex flex-col md:flex-row justify-center items-center md:items-center mt-20 gap-6 md:gap-0">
        <div className="flex justify-center md:-mt-16">
          <Image
            className="rounded-full border-4 border-orange-300 w-40 h-40 md:w-[400px] md:h-[400px]"
            src={"/photo.png"}
            width={400}
            height={400}
            quality={100}
            unoptimized={true}
            sizes="(min-width: 768px) 400px, 160px"
            priority={true}
            alt="Photo of me :)"
          />
        </div>
        <div className="bg-white w-full md:w-[500px] h-fit py-10 md:py-24 px-6 md:px-12 flex items-center flex-col md:-ml-16 md:mt-80 mt-6">
          <div className="text-4xl md:text-5xl font-bold pb-6 md:pb-10">Hey There!</div>
          <div className="text-lg md:text-2xl text-center">
            I’m Ahmed, a junior Software Engineering student. Check
            out my portfolio to see the cool stuff I'm working on.
          </div>
        </div>
      </div>
    </div>
  );
}
