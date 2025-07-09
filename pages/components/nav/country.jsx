import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";

const CountryCode = () => {
  const countries = [
    {
      code: "ng",
      symbol: "₦",
      name: "Nigeria",
      countryCode: "NGN",
    },
    {
      code: "us",
      symbol: "$",
      name: "United States",
      countryCode: "USD",
    },
    {
      code: "gb",
      symbol: "£",
      name: "United Kingdom",
      countryCode: "GBP",
    },
    {
      code: "eu",
      symbol: "€",
      name: "Eurozone",
      countryCode: "EUR",
    },
    {
      code: "jp",
      symbol: "¥",
      name: "Japan",
      countryCode: "JPY",
    },
    {
      code: "ca",
      symbol: "$",
      name: "Canada",
      countryCode: "CAD",
    },
    {
      code: "au",
      symbol: "$",
      name: "Australia",
      countryCode: "AUD",
    },
    {
      code: "cn",
      symbol: "¥",
      name: "China",
      countryCode: "CNY",
    },
    {
      code: "in",
      symbol: "₹",
      name: "India",
      countryCode: "INR",
    },
    {
      code: "br",
      symbol: "R$",
      name: "Brazil",
      countryCode: "BRL",
    },
  ];

  const [isActive, setIsActive] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    code: "ng",
    symbol: "₦",
    name: "Nigeria",
    countryCode: "NGN",
  });

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  const handleSelectedCountry = (item) => {
    setSelectedCountry(item);
    handleClick();
  };

  return (
    <>
      <h4
        onClick={() => handleClick()}
        className="uppercase text-[.8rem] ml-2 cursor-pointer hover:bg-[#F1F0EC] py-3 px-[.8rem] rounded-full"
      >
        {selectedCountry.code}
      </h4>

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
        id="country-modal-overlay"
      >
        {/* Actual Country Code Panel */}
        <div
          className={`${
            isActive ? "flex right-0" : "-right-[34rem]"
          } absolute top-0 w-[34rem] transition-all duration-300 overflow-hidden bg-white h-svh z-50 flex-col px-8 pt-8`}
        >
          <div className="flex items-center justify-between mr-6 border-b pb-6 border-[#E6E6E6]">
            <h3 className="font-bold text-[1.2rem]">
              YOUR CURRENCY AND REGION
            </h3>{" "}
            <IoClose
              onClick={() => handleClick()}
              className="cursor-pointer text-[1.4rem]"
            />
          </div>
          <div className="flex overflow-y-scroll h-svh pr-6 flex-col">
            <h4 className="uppercase text-[.86rem] font-semibold">
              Select Region/currency
            </h4>

            <div className="flex gap-2 items-center px-4 py-2 rounded-full mt-2 bg-[#EFEFEF]">
              <FiSearch className="text-[1rem] cursor-pointer" />
              <input
                placeholder="Search for currency or region"
                className="outline-none text-[1rem] w-[22rem] placeholder:text-[.85rem]"
              />
            </div>

            <div className="flex flex-col">
              <div className="py-6 border-b border-[#E6E6E6]">
                <div className="flex flex-col">
                  <div className="flex justify-between ">
                    <div className="flex gap-4 py-3 ">
                      <h4 className="uppercase font-semibold text-[.8rem] mt-1">
                        {selectedCountry.code}
                      </h4>{" "}
                      <h4 className="text-[.9rem] font-semibold">
                        {selectedCountry.name}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2 py-2 ">
                      <h4 className="uppercase font-medium text-[.85rem] text-[#484848]">
                        {selectedCountry.countryCode}
                      </h4>
                      <h4 className="text-[.85rem] text-[#484848]">
                        {selectedCountry.symbol}
                      </h4>
                      <FaCircleCheck />
                    </div>
                  </div>
                  <h4 className="text-[#484848] text-[.8rem]">
                    Your order will be billed in {selectedCountry.countryCode}
                  </h4>
                </div>
              </div>
              {countries.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectedCountry(item)}
                  className="flex justify-between cursor-pointer hover:bg-[#EFEFEF] transition-all duration-300 border-b border-[#E6E6E6]"
                >
                  <div className="flex gap-4 py-3 ">
                    <h4 className="uppercase font-semibold text-[.8rem] mt-1">
                      {item.code}
                    </h4>{" "}
                    <h4 className="text-[.9rem] font-semibold">{item.name}</h4>
                  </div>

                  <div className="flex items-center gap-2 py-2 ">
                    <h4 className="uppercase text-[.85rem] font-medium text-[#484848]">
                      {item.countryCode}
                    </h4>
                    <h4 className="text-[.85rem] text-[#484848] pr-5">
                      {item.symbol}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryCode;

// import { useState, useEffect } from "react";
// import { FiSearch } from "react-icons/fi";
// import { IoClose } from "react-icons/io5";
// import { FaCircleCheck } from "react-icons/fa6";

// const CountryCode = () => {
//   const countries = [
//     {
//       code: "ng",
//       symbol: "₦",
//       name: "Nigeria",
//       countryCode: "NGN",
//     },
//     {
//       code: "us",
//       symbol: "$",
//       name: "United States",
//       countryCode: "USD",
//     },
//     {
//       code: "gb",
//       symbol: "£",
//       name: "United Kingdom",
//       countryCode: "GBP",
//     },
//     {
//       code: "eu",
//       symbol: "€",
//       name: "Eurozone",
//       countryCode: "EUR",
//     },
//     {
//       code: "jp",
//       symbol: "¥",
//       name: "Japan",
//       countryCode: "JPY",
//     },
//     {
//       code: "ca",
//       symbol: "$",
//       name: "Canada",
//       countryCode: "CAD",
//     },
//     {
//       code: "au",
//       symbol: "$",
//       name: "Australia",
//       countryCode: "AUD",
//     },
//     {
//       code: "cn",
//       symbol: "¥",
//       name: "China",
//       countryCode: "CNY",
//     },
//     {
//       code: "in",
//       symbol: "₹",
//       name: "India",
//       countryCode: "INR",
//     },
//     {
//       code: "br",
//       symbol: "R$",
//       name: "Brazil",
//       countryCode: "BRL",
//     },
//   ];

//   const [isActive, setIsActive] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState({
//     code: "ng",
//     symbol: "₦",
//     name: "Nigeria",
//     countryCode: "NGN",
//   });

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
//     };

//     // Set initial value
//     handleResize();

//     // Add event listener
//     window.addEventListener("resize", handleResize);

//     // Clean up
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleClick = () => {
//     setIsActive((prev) => !prev);
//   };

//   const handleSelectedCountry = (item) => {
//     setSelectedCountry(item);
//     handleClick();
//   };

//   return (
//     <>
//       <h4
//         onClick={() => handleClick()}
//         className="uppercase text-[.8rem] ml-2 cursor-pointer hover:bg-[#F1F0EC] py-3 px-[.8rem] rounded-full"
//       >
//         {selectedCountry.code}
//       </h4>

//       {/* Overlay background */}
//       <div
//         className={`${
//           isActive
//             ? "fixed z-40 inset-0 bg-[#46444493] overflow-y-auto backdrop-blur"
//             : ""
//         }`}
//         onClick={(e) => {
//           if (e.target === e.currentTarget) {
//             handleClick();
//           }
//         }}
//         id="country-modal-overlay"
//       >
//         {/* Actual Country Code Panel */}
//         <div
//           className={`${
//             isActive ? "flex" : isMobile ? "-right-full" : "-right-[34rem]"
//           } absolute ${
//             isMobile ? "bottom-0 rounded-t-[1rem]" : "top-0"
//           } w-full ${
//             isMobile ? "max-w-full" : "max-w-[34rem]"
//           } transition-all duration-300 overflow-hidden bg-white ${
//             isMobile ? "h-[80vh]" : "h-svh"
//           } z-50 flex-col px-8 pt-8`}
//         >
//           <div className="flex items-center justify-between mr-6 border-b pb-6 border-[#E6E6E6]">
//             <h3 className="font-bold text-[1.2rem]">
//               YOUR CURRENCY AND REGION
//             </h3>{" "}
//             <IoClose
//               onClick={() => handleClick()}
//               className="cursor-pointer text-[1.4rem]"
//             />
//           </div>
//           <div className="flex overflow-y-scroll h-full pr-6 flex-col">
//             <h4 className="uppercase text-[.86rem] font-semibold">
//               Select Region/currency
//             </h4>

//             <div className="flex gap-2 items-center px-4 py-2 rounded-full mt-2 bg-[#EFEFEF]">
//               <FiSearch className="text-[1rem] cursor-pointer" />
//               <input
//                 placeholder="Search for currency or region"
//                 className="outline-none text-[1rem] w-[22rem] placeholder:text-[.85rem]"
//               />
//             </div>

//             <div className="flex flex-col">
//               <div className="py-6 border-b border-[#E6E6E6]">
//                 <div className="flex flex-col">
//                   <div className="flex justify-between ">
//                     <div className="flex gap-4 py-3 ">
//                       <h4 className="uppercase font-semibold text-[.8rem] mt-1">
//                         {selectedCountry.code}
//                       </h4>{" "}
//                       <h4 className="text-[.9rem] font-semibold">
//                         {selectedCountry.name}
//                       </h4>
//                     </div>

//                     <div className="flex items-center gap-2 py-2 ">
//                       <h4 className="uppercase font-medium text-[.85rem] text-[#484848]">
//                         {selectedCountry.countryCode}
//                       </h4>
//                       <h4 className="text-[.85rem] text-[#484848]">
//                         {selectedCountry.symbol}
//                       </h4>
//                       <FaCircleCheck />
//                     </div>
//                   </div>
//                   <h4 className="text-[#484848] text-[.8rem]">
//                     Your order will be billed in {selectedCountry.countryCode}
//                   </h4>
//                 </div>
//               </div>
//               {countries.map((item, index) => (
//                 <div
//                   key={index}
//                   onClick={() => handleSelectedCountry(item)}
//                   className="flex justify-between cursor-pointer hover:bg-[#EFEFEF] transition-all duration-300 border-b border-[#E6E6E6]"
//                 >
//                   <div className="flex gap-4 py-3 ">
//                     <h4 className="uppercase font-semibold text-[.8rem] mt-1">
//                       {item.code}
//                     </h4>{" "}
//                     <h4 className="text-[.9rem] font-semibold">{item.name}</h4>
//                   </div>

//                   <div className="flex items-center gap-2 py-2 ">
//                     <h4 className="uppercase text-[.85rem] font-medium text-[#484848]">
//                       {item.countryCode}
//                     </h4>
//                     <h4 className="text-[.85rem] text-[#484848] pr-5">
//                       {item.symbol}
//                     </h4>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CountryCode;
