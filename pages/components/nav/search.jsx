import { useState, useRef, useEffect } from "react";
import { BsStars } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";

const Search = () => {
  const [selectedFilter, setSelectedFilter] = useState("woman");
  const [isActive, setIsActive] = useState(false);
  const searchRef = useRef(null);
  const category = ["woman", "men", "kids", "beauty"];

  const hots = [
    "date night",
    "4th of july",
    "white affairs",
    "swimsuit",
    "wedding suit",
    "vacation",
    "white short",
    "summer top",
  ];

  const handleFilterSelection = (link) => {
    setSelectedFilter(link);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="hidden md:mr-3 md:block md:w-full lg:max-w-96 lg:flex-1">
        {isActive && (
          <div className="absolute left-0 top-[60px] z-10 h-screen w-full bg-neutral-900 opacity-40"></div>
        )}
        <div className="relative h-full w-full cursor-text" ref={searchRef}>
          <div
            className={`${
              isActive
                ? "rounded-t-[20px] border-transparent shadow-[0_0_5px_0_rgba(0,0,0,0.2)]"
                : "rounded-[20px] border-neutral-300"
            }   flex h-9 w-full cursor-text flex-row items-center justify-between space-x-2 border px-4 transition-[border-radius,shadow] lg:hover:shadow-[0_0_5px_0_rgba(0,0,0,0.2)]`}
            onClick={() => setIsActive(true)}
          >
            <div className="relative flex w-full flex-row items-center gap-2">
              <div className="relative flex items-start pr-1.5">
                <button className="relative flex">
                  <RiSearchLine />
                  <BsStars />
                </button>
                <input
                  type="text"
                  placeholder="Search"
                  className="mr-2 block h-4 w-full overflow-hidden text-ellipsis whitespace-nowrap border-0 bg-white p-0 font-normal outline-none placeholder:text-[13px] placeholder:font-normal placeholder:leading-[140%] placeholder:tracking-[0.25px] placeholder:text-neutral-400 focus:ring-0"
                  onFocus={() => setIsActive(true)}
                />
              </div>
            </div>
            <div
              className={`${
                isActive ? "absolute" : "hidden"
              } left-0  top-[2rem] z-20 w-full overflow-hidden rounded-b-[20px] bg-white`}
            >
              <div className="relative flex h-9 flex-row gap-x-[40px] border-b border-neutral-400 lg:mx-4 lg:gap-x-[40px]">
                {category.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleFilterSelection(item)}
                    className="uppercase p-0 !text-[13px] !font-extrabold !leading-[100%]"
                  >
                    {item}
                  </button>
                ))}
                <div
                  className={`${
                    selectedFilter === "woman"
                      ? "w-[3.5rem] left-0"
                      : selectedFilter === "men"
                      ? "w-[2rem] left-[6rem]"
                      : selectedFilter === "kids"
                      ? "w-[2rem] left-[10.4rem]"
                      : selectedFilter === "beauty"
                      ? "w-[3.2rem] left-[15rem]"
                      : ""
                  } absolute top-[2rem]  h-1 bg-black transition-[left,width] duration-[250ms] ease-in`}
                ></div>
              </div>
              <div className="no-scrollbar flex flex-col gap-4 py-4 lg:max-h-[415px] lg:overflow-y-auto">
                <div className="lg:px-4">
                  <div className="mb-2.5 flex flex-row items-center">
                    <h5 className="text-[13px] font-semibold leading-[100%]">
                      Hot Searches
                    </h5>
                  </div>
                  <div className="flex flex-row flex-wrap items-center gap-x-2">
                    {hots.map((hot, index) => (
                      <a key={index}>
                        <div className="mb-2 mr-2 rounded-full border border-neutral-400 bg-white px-2 py-1 text-xs font-normal shadow-sm shadow-[#0003] transition duration-300 hover:border-neutral-600">
                          {hot}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full overflow-hidden -mx-4 md:mx-0 md:!w-full">
                  <div className="relative w-full">
                    <div
                      className="no-scrollbar flex w-full select-none flex-row items-start overflow-x-scroll px-4"
                      style={{ gap: 16, scrollPaddingLeft: 16 }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
