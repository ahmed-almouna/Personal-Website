import Image from "next/image";
import Nav from "./Nav";

export default function Body() {
  return (
    <div className="h-fit w-full">
      <Nav />
      <div className="flex justify-center items-center mt-20">
        <div className="flex justify-center -mt-16">
          <Image
            className="rounded-full  border-4 border-orange-300"
            src={"/photo.png"}
            width={256}
            height={256}
            quality={100}
            unoptimized={true}
            sizes="256px"
            priority={true}
            alt="Photo of me :)"
          />
        </div>
        <div className="bg-white w-[500px] h-fit py-24 px-12 flex items-center flex-col -ml-16 mt-80">
          <div className="text-5xl font-bold pb-10">Hey There!</div>
          <div className="text-2xl text-center">
            I’m Ahmed, a junior Software Engineering student. Check
            out my portfolio to see the cool stuff I'm working on.
          </div>
        </div>
      </div>
    </div>
  );
}
