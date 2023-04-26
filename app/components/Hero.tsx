import Image from "next/image";
import { BiRightArrowAlt } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="lg:min-w-full min-w-fit w-screen items-center justify-center lg:p-24 lg:mt-0 mt-5">
      <div className="flex flex-col gap-5 items-center justify-center lg:min-w-full min-w-fit w-full">
        <div className="flex lg:flex-row flex-col items-center justify-center gap-5">
          <div className="lg:w-[640px] lg:h-[540px] w-[340px] h-[150px]">
            <h1 className="font-semibold lg:text-4xl text-sm">
              Work out at home for free.
            </h1>
            <p className="text-gray-500 lg:text-sm text-[10px] lg:mt-8 mt-5">
              We believe fitness should be accessible to everyone, everywhere,
              regardless of income or access to a gym. With hundreds of
              professional workouts, healthy recipes and informative articles,
              as well as one of the most positive communities on the web, you’ll
              have everything you need to reach your personal fitness goals –
              for free!
            </p>
            <div className="flex flex-row lg:mt-5 mt-2">
              <a
                href="#"
                className="text-blue-700 hover:text-blue-400 lg:text-base text-[10px]"
              >
                See More
              </a>
              <BiRightArrowAlt className="lg:w-5 lg:h-6 w-3 h-4 text-white ml-2" />
            </div>
          </div>
          <Image
            src="/images/Hero1.svg"
            width={640}
            height={540}
            alt="Working Out!"
            loading="lazy"
            className="lg:w-[640px] lg:h-[540px] w-[305px] h-[215px]"
          />
        </div>
        <div className="flex lg:flex-row flex-col items-center justify-center gap-5">
          <Image
            src="/images/Hero2.svg"
            width={640}
            height={540}
            alt="Working Out!"
            className="lg:w-[640px] lg:h-[540px] w-[280] h-[200px]"
          />
          <div className="lg:w-[640px] lg:h-[540px] w-[340px] h-[150px] lg:mt-40">
            <h1 className="font-semibold lg:text-4xl text-base">
              Get more with low-cost training programs and advanced features.
            </h1>
            <p className="text-gray-500 lg:text-sm text-[10px] mt-8">
              We believe fitness should be accessible to everyone, everywhere,
              regardless of income or access to a gym. With hundreds of
              professional workouts, healthy recipes and informative articles,
              as well as one of the most positive communities on the web, you’ll
              have everything you need to reach your personal fitness goals –
              for free!
            </p>
            <div className="flex flex-row mt-5">
              <a
                href="#"
                className="text-blue-700 lg:text-base text-[10px] hover:text-blue-400"
              >
                See More
              </a>
              <BiRightArrowAlt className="lg:w-5 lg:h-6 w-3 h-4 text-white ml-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
