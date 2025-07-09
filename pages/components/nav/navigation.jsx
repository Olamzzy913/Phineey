import Link from "next/link";
import { useState } from "react";
import ProfileNav from "./profile";
import CountryCode from "./country";
import NavBottom from "./navbottom";
import SearchField from "./searchField";
import CartOverlay from "./cartOverlay";
import { LuHeart } from "react-icons/lu";
import { VscRefresh } from "react-icons/vsc";
import Search from "./search";

const Navigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("woman");
  const category = ["woman", "curve", "men", "kids", "beauty"];

  const handleFilterSelection = (link, index) => {
    setActiveIndex(index);
    setSelectedFilter(link);
  };

  return (
    <>
      <div className="mx-auto w-full max-w-[1920px] overflow-hidden">
        <div style={{ height: "auto" }}>
          <header className="header relative z-10 flex flex-col items-center bg-white pt-1 lgHeader:pt-[13px] md:pt-4 scroll-down">
            <div className="main-header-tabs flex w-full flex-row justify-between pl-4 pr-2 lgHeader:px-8">
              <div className="flex flex-row justify-between xs:mr-0.5 sm:mr-2 md:mr-6">
                <a href="" className="flex items-center active">
                  <div className="h-[17px] md:hidden block max-xs:max-w-[100px] md:h-[22px]">
                    <h2 className="font-bold text-3xl uppercase">Phineey</h2>
                  </div>
                  <div className="h-[17px] hidden md:block max-xs:max-w-[100px] md:h-[22px]">
                    {selectedFilter === "woman" ? (
                      <h2 className="font-bold text-3xl uppercase">
                        <span className="font-light ">Phineey</span>Clothing
                      </h2>
                    ) : (
                      <h2 className="font-bold text-3xl uppercase">
                        Phineey
                        <span className="font-light uppercase">
                          {selectedFilter}
                        </span>
                      </h2>
                    )}
                  </div>
                </a>
                <div className="ml-8 hidden items-center lg:flex">
                  <nav className="flex justify-between lg:gap-x-4">
                    {" "}
                    {category.map((item, index) => (
                      <a href="" className="cursor-pointer">
                        <div
                          key={index}
                          onClick={() => handleFilterSelection(item, index)}
                          className={`${
                            activeIndex === index
                              ? " border-b-3 border-neutral-900"
                              : "border-transparent"
                          } flex h-9 items-center uppercase pt-[3px] text-[12px] font-bold border-b-3 lg:h-6 lg:hover:border-neutral-900 `}
                        >
                          {item}
                        </div>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>

              <div className="flex w-full">
                <div className="ml-auto flex items-center space-x-1 md:w-full lg:ml-0 lg:justify-end">
                  <Search />
                  <CountryCode />
                  <VscRefresh className="cursor-pointer text-[2.6rem] hover:bg-[#F1F0EC] py-2 px-[.8rem] rounded-full" />
                  <ProfileNav />
                  <Link
                    href="/"
                    className="cursor-pointer hover:bg-[#F1F0EC] p-3 rounded-full"
                  >
                    <LuHeart className="text-[1.2rem]" />
                  </Link>
                  <CartOverlay />
                </div>
              </div>
            </div>{" "}
            <div className="box-border block w-full border-b px-4 lg:hidden lg:border-b-0">
              {" "}
              <nav className="flex justify-between lg:gap-x-4">
                {" "}
                {category.map((item, index) => (
                  <a href="" className="cursor-pointer">
                    <div
                      key={index}
                      onClick={() => handleFilterSelection(item, index)}
                      className={`${
                        activeIndex === index
                          ? " border-b-3 border-neutral-900"
                          : "border-transparent"
                      } flex h-9 items-center uppercase pt-[3px] text-[12px] font-bold border-b-3 lg:h-6 lg:hover:border-neutral-900 `}
                    >
                      {item}
                    </div>
                  </a>
                ))}
              </nav>
            </div>
            <NavBottom />
          </header>
        </div>
      </div>
    </>
  );
};

export default Navigation;

// import Link from "next/link";
// import { useState } from "react";
// import ProfileNav from "./profile";
// import CountryCode from "./country";
// import NavBottom from "./navbottom";
// import SearchField from "./searchField";
// import CartOverlay from "./cartOverlay";
// import { LuHeart } from "react-icons/lu";
// import { VscRefresh } from "react-icons/vsc";
// import Search from "./search";

// const Navigation = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [selectedFilter, setSelectedFilter] = useState("woman");
//   const category = ["woman", "curve", "men", "kids", "beauty"];

//   const handleFilterSelection = (link, index) => {
//     setActiveIndex(index);
//     setSelectedFilter(link);
//   };

//   return (
//     <>
//       <div className="flex flex-col">
//         <div className="flex justify-between items-center py-4 px-6">
//           <div className="flex items-center ">
//             {selectedFilter === "woman" ? (
//               <h2 className="font-bold text-3xl uppercase">
//                 <span className="font-light ">Phineey</span>Clothing
//               </h2>
//             ) : (
//               <h2 className="font-bold text-3xl uppercase">
//                 Phineey
//                 <span className="font-light uppercase">{selectedFilter}</span>
//               </h2>
//             )}
//             <div className="flex ml-4 gap-4 mt-0.5">
//               {category.map((item, index) => (
//                 <div
//                   key={index}
//                   onClick={() => handleFilterSelection(item, index)}
//                   className={`${
//                     activeIndex === index ? " border-b-3 border-b-black" : ""
//                   } cursor-pointer`}
//                 >
//                   <h4 className="text-[.8rem] uppercase font-bold">{item}</h4>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="flex  items-center">
//             <Search />
//             <CountryCode />
//             <VscRefresh className="cursor-pointer text-[2.6rem] hover:bg-[#F1F0EC] py-2 px-[.8rem] rounded-full" />
//             <ProfileNav />
//             <Link
//               href="/"
//               className="cursor-pointer hover:bg-[#F1F0EC] p-3 rounded-full"
//             >
//               <LuHeart className="text-[1.2rem]" />
//             </Link>
//             <CartOverlay />
//           </div>
//         </div>
//         <NavBottom />
//       </div>
//     </>
//   );
// };

// export default Navigation;
