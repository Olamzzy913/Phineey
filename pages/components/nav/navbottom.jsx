const NavBottom = () => {
  const womans = [
    "new in",
    "clothing",
    "sale",
    "nova deals",
    "swim",
    "weeding suit",
    "dresses",
    "matching set",
    "tops",
    "jeans",
    "shoe",
    "bottons",
    "jumpsuit & rompers",
  ];

  return (
    <>
      <div className="w-full lg:mb-2.5 lg:mt-1.5">
        <nav className="flex max-w-full lg:py-0">
          <div className="no-scrollbar group flex w-full flex-row gap-x-2 overflow-x-hidden whitespace-nowrap lg:px-1">
            <div className="relative flex w-full">
              <div className="no-scrollbar relative inline-flex w-full flex-1 overflow-x-auto overflow-y-hidden">
                <div className="flex flex-row gap-4 lg:gap-0">
                  {womans.map((item) => (
                    <a
                      href=""
                      className="flex cursor-pointer items-center justify-center rounded lg:h-7 lg:px-3 lg:hover:bg-neutral-100 ml-4 lg:ml-0"
                    >
                      <span className="text-[.8rem] font-bold whitespace-nowrap uppercase leading-[44px] tracking-[0.25px]">
                        <span
                          className={`${
                            item === "sale"
                              ? "text-[#9D2226]"
                              : item === "swim"
                              ? "text-[#53a7d1]"
                              : ""
                          } text-[.8rem] font-bold whitespace-nowrap uppercase tracking-[0.25px]`}
                        >
                          {item}
                        </span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBottom;
