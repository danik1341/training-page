import { SiNike, SiAdidas } from "react-icons/si";
import { AiFillPlayCircle } from "react-icons/ai";
import { BiRun, BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex lg:min-h-screen min-h-fit lg:min-w-full min-w-fit flex-col items-center lg:justify-between lg:p-24 p-20">
      <div className="flex lg:flex-row flex-col lg:relative">
        <div className="max-w-[870px] lg:absolute lg:left-[-570px]">
          <h1 className="font-extrabold lg:text-9xl lg:w-[880px] lg:h-[340px] text-4xl w-[200px] h-[80px]">
            WORKOUT WITH ME
          </h1>
          <p className="lg:text-base text-xs text-gray-500 lg:w-[560px] lg:h-[50px] w-[310px] h-[70px] mt-5">
            A huge selection of health and fitness content, healthy recipes and
            transformation stories to help you get fit and stay fit!
          </p>
          <button className="font-semibold lg:text-lg text-sm text-center rounded-lg bg-orange-500 w-80 h-11 lg:h-[70px] lg:w-52 lg:mt-10 mt-1">
            Join Club Now!
          </button>
          <div className="mt-10">
            <h1 className="font-semibold lg:text-sm text-xs text-gray-500 opacity-[0.65]">
              AS FEATURED IN
            </h1>
            <div className="flex flex-row mt-3 gap-5">
              <SiNike className="lg:w-[60px] lg:h-[60px] w-[50px] h-[50px]" />
              <SiAdidas className="lg:w-[60px] lg:h-[60px] w-[50px] h-[50px]" />
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:left-[30px] lg:top-20 flex flex-row justify-center items-center min-h-fit min-w-fit max-w-[700px] gap-4 lg:gap-0 mt-4 lg:mt-0">
          <div className="rounded-xl lg:w-[200px] lg:h-24 w-24 h-12 bg-gray-800 flex flex-row items-center justify-center gap-2 lg:absolute lg:bottom-[200px] lg:right-[350px]">
            <AiFillPlayCircle className="lg:w-10 lg:h-10 w-5 h-5 bg-white rounded-full text-orange-300" />
            <div className="flex flex-col">
              <span className="font-semibold lg:text-2xl text-base">350+</span>
              <span className="lg:text-base text-[8px] text-gray-500">
                Video tutorial
              </span>
            </div>
          </div>
          <div className="lg:reletive lg:inline-flex hidden">
            <Image
              className="min-h-[685px] min-w-[410px] w-auto"
              src="/images/BigGuy.svg"
              alt="big guy"
              loading="lazy"
              width={410}
              height={685}
            />
          </div>
          <div className="rounded-xl lg:w-[180px] lg:h-[110px] w-24 h-12 bg-orange-400 flex flex-col justify-center items-center lg:absolute lg:bottom-[600px] lg:left-[300px]">
            <BiRun className="border rounded-full bg-orange-300 lg:w-6 lg:h-6 w-3 h-3 self-start box-content ml-4" />
            <span className="font-bold lg:text-5xl text-xl">
              4,95
              <span className="font-semibold lg:text-base text-sm text-gray-300">
                km
              </span>
            </span>
          </div>
          <div className="rounded-xl bg-purple-600 lg:w-48 lg:h-24 w-24 h-12 flex flex-col justify-center items-center lg:absolute lg:top-[450px] lg:left-[350px]">
            <span className="font-semibold lg:text-[40px] text-base">500+</span>
            <span className="lg:text-sm text-[8px] text-gray-300">
              Free Workout Videos
            </span>
          </div>
        </div>
      </div>
      <div className="lg:mt-10 mt-5">
        <h1 className="font-semibold lg:text-4xl text-sm">
          Not sure where to start?
        </h1>
        <p className="lg:text-base text-xs text-gray-500 mt-3">
          Programs offer day-to-day guidance on an interactive calendar to keep
          you on track.
        </p>
        <div className="mt-5 gap-3 lg:flex lg:flex-row grid grid-cols-2">
          <div>
            <button className="rounded-xl bg-gray-600 w-28 h-20 lg:w-[305px] lg:h-[190px] flex flex-row justify-center items-center p-2 hover:bg-gray-800">
              <div>
                <h1 className="lg:text-base text-xs font-semibold text-start">
                  Workout Videos
                </h1>
                <p className="lg:text-sm text-[8px] lg:w-48 text-gray-400 text-start lg:mt-3 mt-1">
                  Access to hundreds of free, full-length workout videos.
                </p>
              </div>
              <BiRightArrowAlt className="lg:w-[20px] w-4 lg:h-6 h-2" />
            </button>
          </div>
          <div>
            <button className="rounded-xl bg-gray-800 w-28 h-20 lg:w-[305px] lg:h-[190px] flex flex-row justify-center items-center p-2 hover:bg-gray-600">
              <div>
                <h1 className="lg:text-base text-xs font-semibold text-start">
                  Workout Programs
                </h1>
                <p className="lg:text-sm text-[8px] lg:w-48 text-gray-400 text-start mt-3">
                  Affordable and effective workout programs.
                </p>
              </div>
              <BiRightArrowAlt className="lg:w-[20px] lg:h-6 w-4 h-2" />
            </button>
          </div>
          <div>
            <button className="rounded-xl bg-gray-700 w-28 h-20 lg:w-[305px] lg:h-[190px] flex flex-row justify-center items-center p-2 hover:bg-gray-500">
              <div>
                <h1 className="lg:text-base text-xs font-semibold text-start">
                  Meal Plans
                </h1>
                <p className="lg:text-sm text-[8px] lg:w-48 text-gray-400 text-start mt-3">
                  Plans built with registered dietitians and nutritionists.
                </p>
              </div>
              <BiRightArrowAlt className="lg:w-[20px] lg:h-6 w-4 h-2" />
            </button>
          </div>
          <div>
            <button className="rounded-xl bg-gray-500 w-28 h-20 lg:w-[305px] lg:h-[190px] flex flex-row justify-center items-center p-2 hover:bg-gray-800">
              <div>
                <h1 className="lg:text-base text-xs font-semibold text-start">
                  WO Plus ALL ACCESS
                </h1>
                <p className="lg:text-sm text-[8px] lg:w-48 text-gray-400 text-start mt-3">
                  Add powerful features to your membership.
                </p>
              </div>
              <BiRightArrowAlt className="lg:w-[20px] lg:h-6 w-4 h-2" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
