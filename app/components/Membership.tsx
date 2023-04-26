"use client";

import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const Membership = () => {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-medium lg:text-5xl text-sm">Membership</h1>
      <hr className="w-3/4 border-1 border-gray-600 mt-2" />
      <div className="flex lg:flex-row flex-col gap-10">
        <div className="bg-gray-800 lg:w-[540px] lg:h-[640px] w-[350px] h-[350px] mt-16 flex flex-col justify-center p-10 gap-10">
          <h1 className="font-semibold lg:text-4xl text-xs">Join for Free</h1>
          <p className="lg:text-lg text-[10px] text-gray-500">
            Reach your fitness goals or maintain your healthy lifestyle with
            professional training and support from a positive and active online
            community.
          </p>
          <ol className="text-gray-500 lg:text-lg text-xs list-disc">
            <li>~600 Full-Length Workout Videos</li>
            <li>Customizable Calendar</li>
            <li>Healthy Recipes</li>
            <li>Health and Fitness Articles</li>
            <li>Positive and Supportive Online Community</li>
            <li>No Credit Card Needed</li>
          </ol>
          <div className="flex flex-row items-center">
            <a
              href="#"
              className="text-blue-700 hover:text-blue-400 lg:text-base text-[10px]"
            >
              See More
            </a>
            <BiRightArrowAlt className="lg:w-5 lg:h-6 w-3 h-4 text-white ml-2" />
          </div>
        </div>
        <div className="bg-gray-700 lg:w-[540px] lg:h-[640px] w-[350px] h-[380px] lg:mt-16 mt-5 flex flex-col justify-center p-10 gap-10">
          <h1 className="font-semibold lg:text-4xl text-xs">A+ Training!</h1>
          <p className="lg:text-lg text-[10px] text-gray-500">
            A Plus Training includes everything you get with a free membership
            and adds brand new convenience features, fitness tools, and unique
            content.
          </p>
          <ol className="text-gray-500 lg:text-lg text-[10px] list-disc">
            <li>Ads-Free Website and Videos</li>
            <li>Surprise Me Workout Selection Tool</li>
            <li>Statistics for Your Activities</li>
            <li>Enter and Track Custom Workouts</li>
            <li>FB Plus Exclusive Workouts</li>
            <li>Trackers to See Your Progress</li>
            <li>FB Plus Content and Challenges</li>
            <li>Video Tags</li>
            <li>FB Plus Routines</li>
            <li>Rest Day Complete</li>
          </ol>
          {/* <button className="font-semibold text-base bg-blue-500 rounded-xl mt-5 hover:bg-blue-600 relative">
            <span className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity">
              Changed text!
            </span>
            <span className="hover:content">Join Club Now!</span>
          </button> */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white lg:text-base text-[10px] font-semibold py-2 px-4 rounded transition duration-300"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <span
              className={`transition duration-300 ${hovering ? "hidden" : ""}`}
            >
              Join The Club
            </span>
            <span
              className={`transition duration-300 ${!hovering ? "hidden" : ""}`}
            >
              Become Your Alpha+ Self!
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Membership;
