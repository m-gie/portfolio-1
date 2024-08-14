import MagicButton from "./ui/MagicButton";
import { IoIosArrowForward } from "react-icons/io";
import { ModeToggle } from "./ui/ModeToggle";

const Hero = () => {
  return (
    <div className="pb-20 min-h-screen w-full" id="about">
      <div className="min-h-screen w-full relative bg-white dark:bg-black flex items-center justify-center overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
          <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left md:w-1/2 mt-10 md:mt-0">
            <ModeToggle />
            <p className="tracking-wider mb-4 text-3xl">
              Hi, I&apos;m Othmane &#128578;
            </p>
            <p className="tracking-widest text-base text-center md:text-left lg:text-left text-blue-100 max-w-auto mb-4">
              A Full-stack Engineer, who loves turning big ideas into smooth,
              functional websites/apps. Let&apos;s build something amazing
              together.
            </p>
            <a href="#projects">
              <MagicButton
                title="see my projects"
                icon={<IoIosArrowForward />}
                position="right"
              />
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/mPic-1.png"
              alt="my picture"
              className="rounded-[21%] w-[50vw] max-w-[150px] md:w-[25vw] md:max-w-[250px] lg:w-[15vw] lg:max-w-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
