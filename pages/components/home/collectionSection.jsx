import { useState } from "react";
import Collection from "./collection";
import { HiOutlineStar } from "react-icons/hi2";
import { BsStars } from "react-icons/bs";

const CollectionSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("for you");
  const filterCategory = [
    "for you",
    "new in",
    "sales",
    "dresses",
    "jean",
    "sets",
  ];

  const handleSelectFilter = (item) => {
    setSelectedFilter(item);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="py-8 md:px-24">
          <h1
            className="pb-4 text-[20px] font-extrabold uppercase leading-[100%] tracking-[-1px] md:text-[28px] md:leading-[90%] md:tracking-[-0.5px]
            "
          >
            Shop the Latest
          </h1>
          <div className="relative transition-[top] duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)]">
            <div className="py-2 no-scrollbar z-50 mx-auto flex w-full flex-row gap-x-2 overflow-auto px-4 md:px-0 md:py-4">
              {filterCategory.map((category, index) => (
                <div key={index}>
                  <button
                    onClick={() => handleSelectFilter(category)}
                    className={`${
                      selectedFilter === category
                        ? "text-neutral-100 bg-neutral-900"
                        : "bg-white text-neutral-900"
                    } flex items-center capitalize cursor-pointer h-8 whitespace-nowrap text-[.85rem] rounded-full border px-4 font-semibold leading-4 transition-colors duration-300 border-neutral-400 `}
                  >
                    {category === "for you" && (
                      <>
                        <HiOutlineStar
                          className={`${
                            selectedFilter === category ? "hidden" : "block"
                          } mr-1 text-[1rem]`}
                        />
                        <BsStars
                          className={`${
                            selectedFilter === category ? "block" : "hidden"
                          } mr-1 text-[1rem] bg-neutral-900`}
                        />
                      </>
                    )}{" "}
                    {category}
                  </button>
                </div>
              ))}
            </div>
            <Collection selectedFilter={selectedFilter} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionSection;
