import { useState } from "react";
import { SlNote } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import { BsSpeedometer2 } from "react-icons/bs";
import { MdOutlineStars } from "react-icons/md";
import { PiPackage, PiBellRingingLight } from "react-icons/pi";
import { HiOutlineUserCircle, HiOutlineGiftTop } from "react-icons/hi2";

const ProfileNav = () => {
  const [isActive, setIsActive] = useState(false);
  const [hoverOverlay, setHoverOverlay] = useState(false);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <>
      <div
        className="relative"
        onMouseEnter={() => setHoverOverlay(true)}
        onMouseLeave={() => setHoverOverlay(false)}
      >
        <HiOutlineUserCircle
          onClick={() => handleClick()}
          className="text-[2.8rem] ml-2 cursor-pointer hover:bg-[#F1F0EC] p-3 rounded-full"
        />

        {/* Nav Panel - now only controlled by the parent div's hover state */}
        <div
          id="navPanel"
          className={`absolute -right-24 top-full w-[16rem] shadow transition-all duration-500 bg-white z-40 flex-col ${
            hoverOverlay ? "" : "opacity-0 translate-y-8 pointer-events-none"
          }`}
        >
          <div className="flex gap-2 px-4 py-4 bg-[#E6E6E6]">
            <button className="font-semibold bg-white border border-[#E6E6E6] hover:border-[#757575] hover:bg-[#F1F0EC] duration-300 text-[.8rem] cursor-pointer py-2 px-8 rounded-full text-black">
              Sign In
            </button>
            <button className="font-semibold bg-black hover:bg-[#252424] duration-300 text-[.8rem] cursor-pointer py-2 px-8 rounded-full text-white">
              Sign Up
            </button>
          </div>
          <div className="flex flex-col  px-6 py-4 ">
            <div
              onClick={() => handleClick()}
              className="flex items-center gap-4 py-[.7rem] px-3 rounded-sm cursor-pointer duration-300 hover:bg-[#E6E6E6]"
            >
              <BsSpeedometer2 className="text-[1.4rem]" />
              <span className="text-[.8rem] font-medium">Dashboard</span>
            </div>
            <div className="flex items-center gap-4 py-[.7rem] px-3 rounded-sm cursor-pointer duration-300 hover:bg-[#E6E6E6]">
              <PiPackage className="text-[1.4rem]" />
              <span className="text-[.8rem] font-medium">My orders</span>
            </div>
            <div className="flex items-center gap-4 py-[.7rem] px-3 rounded-sm cursor-pointer duration-300 hover:bg-[#E6E6E6]">
              <SlNote className="text-[1.4rem]" />
              <span className="text-[.8rem] font-medium">My info</span>
            </div>
            <div className="flex items-center gap-4 py-[.7rem] px-3 rounded-sm cursor-pointer duration-300 hover:bg-[#E6E6E6]">
              <PiBellRingingLight className="text-[1.4rem]" />
              <span className="text-[.8rem] font-medium">Notificaion</span>
            </div>
            <div className="flex items-center gap-4 py-[.7rem] px-3 rounded-sm cursor-pointer duration-300 hover:bg-[#E6E6E6]">
              <MdOutlineStars className="text-[1.4rem]" />
              <span className="text-[.8rem] font-medium">Notify my list</span>
            </div>
            <div className="flex items-center gap-4 py-[.7rem] px-3 rounded-sm cursor-pointer duration-300 hover:bg-[#E6E6E6]">
              <HiOutlineGiftTop className="text-[1.4rem]" />
              <span className="text-[.8rem] font-medium">Gift cards</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay background */}
      <div
        className={`${
          isActive
            ? "fixed z-40 inset-0 bg-[#46444493] overflow-y-auto backdrop-blur"
            : ""
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            handleClick();
          }
        }}
      >
        {/* Actual sign up Panel */}
        <div
          className={`${
            isActive ? "flex right-0" : "-right-[29.8rem]"
          } absolute top-0 w-[29.8rem] pr-20 transition-all duration-300 overflow-hidden bg-white h-svh z-50 flex-col pl-[2.8rem] pt-7`}
        >
          <div className="relative">
            <IoClose
              onClick={() => handleClick()}
              className="absolute top-2 right-2 cursor-pointer text-[1.4rem]"
            />
          </div>
          <h3 className="font-black uppercase tracking-tight leading-[1.5rem] mt-14 text-[1.65rem]">
            Sign in or create account
          </h3>

          <div className="relative mt-6">
            <input
              type="email"
              id="hs-floating-input-email"
              className="peer p-4 block w-full border border-[#F1F0EC] rounded-lg sm:text-sm placeholder:text-transparent focus:border-black focus:ring-black disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-2 autofill:pt-6 autofill:pb-2"
              placeholder="you@email.com"
            />
            <label
              htmlFor="hs-floating-input-email"
              className="absolute top-0 start-0 p-4 h-full sm:text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:scale-90
      peer-focus:translate-x-0.5
      peer-focus:-translate-y-1.5
      peer-focus:text-gray-500
      peer-not-placeholder-shown:scale-90
      peer-not-placeholder-shown:translate-x-0.5
      peer-not-placeholder-shown:-translate-y-1.5
      peer-not-placeholder-shown:text-gray-500"
            >
              Email
            </label>
          </div>

          <button className="bg-black hover:bg-[#252424] duration-300 text-[.8rem] cursor-pointer py-5 mt-6 px-10 rounded-full text-white">
            Continue
          </button>

          <p className="mt-8 text-[.7rem] text-[#545454b3]">
            By signing up for email, you agree to Fashion Nova's{" "}
            <span className="underline">Terms of Service</span> and{" "}
            <span className="underline">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileNav;
