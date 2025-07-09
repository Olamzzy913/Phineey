import { useState, useRef, useEffect } from "react";
import { FiSearch, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const SearchField = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("woman");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  const category = ["woman", "men", "kids", "beauty"];
  const hot = [
    "date night",
    "4th of july",
    "white affairs",
    "swimsuit",
    "wedding suit",
    "vacation",
    "white short",
    "summer top",
  ];

  const categorySearch = {
    top: [
      {
        id: 1,
        img: "https://cdn.sanity.io/images/0v989dzu/production/ac25a45d4e83cbabe806d6cd43a982b6aca51ca9-128x193.png?w=200&q=100&crop=center&auto=format",
        name: "summer dress",
      },
      {
        id: 2,
        img: "https://cdn.sanity.io/images/0v989dzu/production/20ffe4a46dbe866c7f372f690ed7e186386b4c5e-129x193.png?w=200&q=100&crop=center&auto=format",
        name: "pride",
      },
      {
        id: 3,
        img: "https://cdn.sanity.io/images/0v989dzu/production/c9f66c8b5dcd2f8e716e04857729ebe832c494f4-129x193.png?w=200&q=100&crop=center&auto=format",
        name: "birthday dress",
      },
    ],
    trending: [
      {
        id: 1,
        img: "https://cdn.sanity.io/images/0v989dzu/production/ac25a45d4e83cbabe806d6cd43a982b6aca51ca9-128x193.png?w=200&q=100&crop=center&auto=format",
        name: "wedding suite",
      },
      {
        id: 2,
        img: "https://cdn.sanity.io/images/0v989dzu/production/20ffe4a46dbe866c7f372f690ed7e186386b4c5e-129x193.png?w=200&q=100&crop=center&auto=format",
        name: "florals",
      },
      {
        id: 3,
        img: "https://cdn.sanity.io/images/0v989dzu/production/c9f66c8b5dcd2f8e716e04857729ebe832c494f4-129x193.png?w=200&q=100&crop=center&auto=format",
        name: "white affair",
      },
    ],
    occasions: [
      {
        id: 1,
        img: "https://cdn.sanity.io/images/0v989dzu/production/ac25a45d4e83cbabe806d6cd43a982b6aca51ca9-128x193.png?w=200&q=100&crop=center&auto=format",
        name: "vacation",
      },
      {
        id: 2,
        img: "https://cdn.sanity.io/images/0v989dzu/production/20ffe4a46dbe866c7f372f690ed7e186386b4c5e-129x193.png?w=200&q=100&crop=center&auto=format",
        name: "goings out",
      },
      {
        id: 3,
        img: "https://cdn.sanity.io/images/0v989dzu/production/c9f66c8b5dcd2f8e716e04857729ebe832c494f4-129x193.png?w=200&q=100&crop=center&auto=format",
        name: "date night",
      },
    ],
  };

  const handleFilterSelection = (link, index) => {
    setActiveIndex(index);
    setSelectedFilter(link);
  };

  const handlePrevClick = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = 374.4; // 23.4rem in pixels
      const itemWidth = 240; // Width of each category
      const visiblePeek = 60; // Amount of adjacent items to show

      // Calculate the transform position to center the current slide
      const transformValue =
        -(currentSlide * itemWidth) + (containerWidth - itemWidth) / 2;

      containerRef.current.style.transform = `translateX(${transformValue}px)`;
      containerRef.current.style.transition = "transform 300ms ease-in-out";
    }
  }, [currentSlide]);

  return (
    <div
      className={`${
        isInputFocused ? "rounded-3xl h-[33.2rem] " : "rounded-full"
      } group relative flex flex-col border px-5 py-[6px] border-[#E6E6E6] hover:shadow shadow-[#E6E6E6]`}
    >
      <div className="flex gap-2 items-center">
        <FiSearch
          onClick={() => setIsInputFocused(true)}
          className="text-[1rem] cursor-pointer"
        />
        <input
          placeholder="Search"
          className="outline-none text-[1rem] w-[22rem] placeholder:text-[.85rem]"
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
        />
      </div>

      {isInputFocused && (
        <div className="flex flex-col mt-4 mb-2 w-[23.4rem]">
          <div className="flex gap-8 mt-0.5 border-b border-[#E6E6E6]">
            {category.map((item, index) => (
              <div
                key={index}
                onClick={() => handleFilterSelection(item, index)}
                className={`${
                  activeIndex === index ? "border-b-4 border-b-black" : ""
                } cursor-pointer transition-all duration-400 pb-1.5`}
              >
                <h4 className="text-[.85rem] uppercase font-bold">{item}</h4>
              </div>
            ))}
          </div>

          <h4 className="text-[.8rem] font-bold text-[#101010] my-2.5">
            Hot searches
          </h4>
          <div className="flex flex-wrap gap-4 w-full">
            {hot.map((item, index) => (
              <h4
                key={index}
                className="text-[.8rem] font-medium cursor-pointer capitalize py-[.2rem] px-2 rounded-[.8rem] shadow shadow-[#E6E6E6] border border-[#E6E6E6] hover:border-black"
              >
                {item}
              </h4>
            ))}
          </div>

          {/* Categories carousel */}
          <div className="relative mt-4 h-[12rem] overflow-hidden">
            <div
              ref={containerRef}
              className="flex"
              style={{ width: "680px" }} // 3 categories * 240px
            >
              {/* Top Category */}
              <div className="w-[240px] px-2">
                <h4 className="text-[.8rem] font-bold text-[#101010] mb-2 capitalize">
                  Top
                </h4>
                <div className="flex flex-col gap-4">
                  {categorySearch.top.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 pb-2.5 border-b border-[#E6E6E6] items-center cursor-pointer"
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-12 h-[4rem] object-cover rounded"
                      />
                      <span className="text-[.8rem] capitalize font-medium mt-1 text-center">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trending Category */}
              <div className="w-[240px] px-2">
                <h4 className="text-[.8rem] font-bold text-[#101010] mb-2 capitalize">
                  Trending
                </h4>
                <div className="flex flex-col gap-4">
                  {categorySearch.trending.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 pb-2.5 border-b border-[#E6E6E6] items-center cursor-pointer"
                    >
                      <span className="text-[.82rem] font-medium mt-1 text-center">
                        {item.id}
                      </span>
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-12 h-[4rem] object-cover rounded"
                      />
                      <span className="text-[.8rem] capitalize font-medium mt-1 text-center">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Occasions Category */}
              <div className="w-[240px] px-2">
                <h4 className="text-[.8rem] font-bold text-[#101010] mb-2 capitalize">
                  Occasions
                </h4>
                <div className="flex flex-col gap-4">
                  {categorySearch.occasions.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 pb-2.5 border-b border-[#E6E6E6] items-center cursor-pointer"
                    >
                      <span className="text-[.82rem] font-medium mt-1 text-center">
                        {item.id}
                      </span>
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-12 h-[4rem] object-cover rounded"
                      />
                      <span className="text-[.8rem] capitalize font-medium mt-1 text-center">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-1 w-full bg-white flex flex-col items-center justify-center">
            <div className="flex gap-6 border-t border-[#E6E6E6] py-1.5 w-[20rem] items-center justify-center">
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={handlePrevClick}
              >
                <FiChevronLeft />
                <span className="text-[.8rem] text-gray-400">Prev</span>
              </div>
              <span className="text-[.8rem] font-medium">
                {["Top", "Trending", "Occasions"][currentSlide]}
              </span>
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={handleNextClick}
              >
                <span className="text-[.8rem] text-gray-400">Next</span>
                <FiChevronRight />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchField;
