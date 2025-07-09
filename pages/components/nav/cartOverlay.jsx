import { useState } from "react";
import { IoBagOutline } from "react-icons/io5";

const CartOverlay = () => {
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
        <IoBagOutline className="text-[2.8rem] ml-2 cursor-pointer hover:bg-[#F1F0EC] p-3 rounded-full" />

        {/* Nav Panel - now only controlled by the parent div's hover state */}
        <div
          id="navPanel"
          className={`absolute right-0 top-full w-[26rem] shadow-2xl py-4 transition-all duration-500 flex justify-center items-center bg-white z-40 flex-col ${
            hoverOverlay ? "" : "opacity-0 translate-y-8 pointer-events-none"
          }`}
        >
          <h3 className="font-semibold text-[1rem]">Your bag is empty.</h3>
          <p className="text-[.85rem]">
            Have an account? Sign in to view your bag
          </p>
          <div className="grid grid-cols-2 gap-2 px-4 py-4 ">
            <button className="font-semibold bg-black hover:bg-[#252424] duration-300 text-[.8rem] cursor-pointer py-3 px-12 rounded-full text-white">
              Start shopping
            </button>{" "}
            <button className="font-semibold bg-white border border-[#E6E6E6] hover:border-[#757575] hover:bg-[#F1F0EC] duration-300 text-[.8rem] cursor-pointer py-3 px-12 rounded-full text-black">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartOverlay;
