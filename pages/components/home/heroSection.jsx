import { IoIosArrowForward } from "react-icons/io";

const HeroSection = () => {
  const trends = [
    {
      image:
        "https://cdn.sanity.io/images/0v989dzu/production/11ce4c71f799e00a42c2b65e0c5455d7ed390d66-585x780.jpg?w=800&h=1067&q=100&crop=center&auto=format",
      text: "City Girl",
    },
    {
      image:
        "https://cdn.sanity.io/images/0v989dzu/production/50a6ad30e115c43db2ff00d540b53f5c2345047e-585x780.jpg?w=800&h=1067&q=100&crop=center&auto=format",
      text: "Sweat like summer",
    },
    {
      image:
        "https://cdn.sanity.io/images/0v989dzu/production/deddfff7978440cb4e4a3023ecb0f0a9cea92cc2-585x780.jpg?w=800&h=1067&q=100&crop=center&auto=format",
      text: "Crochet comeback",
    },
    {
      image:
        "https://cdn.sanity.io/images/0v989dzu/production/20d2977b4e6250a31c5e11ce6705a54986b331ed-585x780.jpg?w=800&h=1067&q=100&crop=center&auto=format",
      text: "Seaside sportif",
    },
  ];

  const brands = [
    "https://cdn.sanity.io/images/0v989dzu/production/40dd1b48d83a678fc9345880b732c01abdad7a6a-403x505.jpg?w=300&h=375&q=100&crop=center&auto=format",
    "https://cdn.sanity.io/images/0v989dzu/production/3159f97b5857d3246d6f97808c6ca85dd5a89b24-403x505.jpg?w=300&h=375&q=100&crop=center&auto=format",
    "https://cdn.sanity.io/images/0v989dzu/production/00595c669efd845e800d7299d663d63e18752141-404x505.jpg?w=300&h=375&q=100&crop=center&auto=format",
    "https://cdn.sanity.io/images/0v989dzu/production/6083fc87c3e441b0097a703988e00b6477de89aa-403x505.jpg?w=300&h=375&q=100&crop=center&auto=format",
    "https://cdn.sanity.io/images/0v989dzu/production/b593a718ccee534d5f5afa7cea262f3a5cf4f193-403x505.jpg?w=300&h=375&q=100&crop=center&auto=format",
    "https://cdn.sanity.io/images/0v989dzu/production/1627424ed48df223cb59caa0ee7b9fca31475e66-404x505.jpg?w=300&h=375&q=100&crop=center&auto=format",
  ];

  return (
    <>
      <div className="flex flex-col">
        <div className="w-full">
          <a href="" className="">
            <img
              src="https://cdn.sanity.io/images/0v989dzu/production/f65366d739003056c09c46f59e57d7589e625a73-2880x1134.jpg?w=2000&q=100&crop=center&auto=format"
              alt=""
              className="h-svh w-full object-cover hidden md:block"
            />
            <img
              src="https://cdn.sanity.io/images/0v989dzu/production/89ccf310f6a7243b65df436ea5556edc32c502ae-1290x1611.jpg?w=600&q=100&crop=center&auto=format"
              alt=""
              className="h-svh w-full object-cover md:hidden"
            />
          </a>
        </div>
        <h1 className="mb-[16px] mt-5 flex w-full flex-1 items-center gap-6 self-stretch px-[16px] text-[20px] font-extrabold uppercase leading-[100%] tracking-[-1px] text-black md:mt-[40px] md:pl-[96px] md:text-left md:text-[28px] md:font-extrabold md:leading-[90%] md:tracking-[-0.5px]">
          THE TREND REPORT
        </h1>
        <div className="flex flex-col items-start self-stretch pt-0 px-[2rem] pb-[1rem] md:px-[6rem] md:pb-[4rem]">
          <div className="grid w-full grid-cols-2 gap-2 md:flex md:flex-nowrap md:gap-2">
            {trends.map((trend, index) => (
              <div className="relative" key={index}>
                {" "}
                <a
                  href=""
                  className="group relative flex w-full flex-grow flex-col"
                >
                  <img src={trend.image} alt={trend.text} className="" />{" "}
                  <div className="flex flex-col items-center justify-center self-stretch px-2 pb-2 pt-2 md:justify-end md:gap-4 md:px-1 md:pb-4 md:pt-2 lg:px-4">
                    <div className="flex items-center gap-1">
                      <span className="text-[13px] font-semibold leading-[120%] tracking-[0.25px] text-black md:group-hover:underline lg:text-[17px]">
                        {trend.text}
                      </span>
                      <div className="inline-flex h-[8px] w-[8px] translate-y-[-1px] items-center justify-center lg:h-[12px] lg:w-[12px] lg:translate-y-0">
                        <IoIosArrowForward className="text-[1.4rem]" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full">
          <a href="">
            <img
              src="https://cdn.sanity.io/images/0v989dzu/production/01a767c8f269fc7bbd3be23cea38b4475f968d47-2880x1134.jpg?w=2000&q=100&crop=center&auto=format"
              alt=""
              className="h-[40rem] w-full object-cover hidden md:block"
            />
            <img
              src="https://cdn.sanity.io/images/0v989dzu/production/1aa94c77081169d6e75f3a3e909b87b9b9724132-1290x1611.jpg?w=600&q=100&crop=center&auto=format"
              alt=""
              className="h-[40rem] w-full object-cover md:hidden"
            />
          </a>
        </div>

        <div className="flex flex-col pb-5 pt-4 md:pb-10 md:pt-8">
          <div className="x-auto flex flex-col gap-y-3 px-3 lg:px-24">
            <h1 className="pl-1 text-[20px] font-extrabold uppercase leading-[100%] tracking-[-1px] md:pl-0 md:text-[28px] md:leading-[90%]">
              Shop By Brand
            </h1>
            <div className="flex flex-row flex-wrap justify-start md:flex-nowrap">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="relative basis-1/3 p-1 md:basis-auto"
                >
                  <a href="#" className="w-[19rem] h-[21rem]">
                    <img
                      src={brand}
                      alt={`Brand image ${index + 1}`}
                      style={{ aspectRatio: "4 / 5" }}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full relative px-[1rem] md:px-6">
          <a href="">
            <img
              src="https://cdn.sanity.io/images/0v989dzu/production/427b1a713b83584c69b4ebb26d9bf46271fccbc1-2880x1134.jpg?w=1400&q=100&crop=center&auto=format"
              alt=""
              className="h-[40rem] w-full object-cover hidden md:block"
            />
            <img
              src="https://cdn.sanity.io/images/0v989dzu/production/a090f72ed77f0cc146ddbe67a9d615f7b8a46577-1290x1611.jpg?w=1000&q=100&crop=center&auto=format"
              alt=""
              className="h-[40rem] w-full object-cover md:hidden"
            />
          </a>
        </div>

        <div className="w-full">
          <a href="">
            <img
              src="https://cdn.sanity.io/images/0v989dzu/production/e09172cd0caf057dbdd119927962a680fd0ea4be-2880x1134.jpg?w=1400&q=100&crop=center&auto=format"
              alt=""
              className="h-[40rem] w-full object-cover hidden md:block"
            />
            <img
              src="https://cdn.sanity.io/images/0v989dzu/production/d02f6b953f8061022c32774cddd729b705f770a1-1290x1611.jpg?w=1000&q=100&crop=center&auto=format"
              alt=""
              className="h-[40rem] w-full object-cover md:hidden"
            />
          </a>
        </div>
        <div className="p-4 md:p-24">
          <h1
            className="pb-4 text-[20px] font-extrabold uppercase leading-[100%] tracking-[-1px] md:text-[28px] md:leading-[90%] md:tracking-[-0.5px]
            "
          >
            Shop By Category
          </h1>
          <div
            className="grid gap-2 h-[300px] md:h-[600px] 
             grid-cols-1 md:grid-cols-[0.6fr_0.5fr_0.3fr_0.3fr]
             md:grid-rows-[1fr_1fr]
             md:[grid-template-areas:'card1_card2_card3_card4'_'card1_card5_card6_card7']"
          >
            {/* Card 1: Spans the first column across two rows */}
            <div className="relative [grid-area:card1]">
              <a href="#" className="block h-[300px] md:h-[600px]">
                <img
                  src="https://cdn.sanity.io/images/0v989dzu/production/c266ef4110a90fe264d3aaeba793ff34d68cd25c-585x879.jpg?w=400&q=100&crop=center&auto=format"
                  alt=""
                  className="h-full w-full object-cover" /* Image fills its container */
                />
                <p className="absolute bottom-0 w-full pb-3 text-center text-[13px] font-semibold leading-[140%] tracking-[0.25px] text-neutral-100 md:pb-6 md:text-[21px]">
                  Dresses
                </p>
              </a>
            </div>

            {/* Card 2: Top-right of Card 1, first column of right group */}
            <div className="relative [grid-area:card2]">
              <a href="#" className="block h-[150px] md:h-[300px]">
                <img
                  src="https://cdn.sanity.io/images/0v989dzu/production/c30d2951308bf857eec4e6255ff45bc0ac01db6b-585x427.jpg?q=100&auto=format"
                  alt=""
                  className="h-full w-full object-cover"
                />
                <p className="absolute bottom-0 w-full pb-3 text-center text-[13px] font-semibold leading-[140%] tracking-[0.25px] text-neutral-100 md:pb-6 md:text-[21px]">
                  Matching sets
                </p>
              </a>
            </div>

            {/* Card 3: Below Card 2, first column of right group (as per grid-template-areas) */}
            <div className="relative [grid-area:card3]">
              <a href="#" className="block h-[150px] md:h-[300px]">
                <img
                  src="https://cdn.sanity.io/images/0v989dzu/production/fd10e05ef99ddcd80d711832f0ffa6531db7443e-585x427.jpg?q=100&auto=format"
                  alt=""
                  className="h-full w-full object-cover"
                />
                <p className="absolute bottom-0 w-full pb-3 text-center text-[13px] font-semibold leading-[140%] tracking-[0.25px] text-neutral-100 md:pb-6 md:text-[21px]">
                  Jumpsuits & Rompers
                </p>
              </a>
            </div>

            {/* Card 4: Top-right of Card 2/3, second column of right group (as per grid-template-areas) */}
            <div className="relative [grid-area:card4]">
              <a href="#" className="block h-[150px] md:h-[300px]">
                <img
                  src="https://cdn.sanity.io/images/0v989dzu/production/333de2b623670980ea58bace6e77a15171d93d35-281x420.jpg?q=100&auto=format"
                  alt=""
                  className="h-full w-full object-cover"
                />
                <p className="absolute bottom-0 w-full pb-3 text-center text-[13px] font-semibold leading-[140%] tracking-[0.25px] text-neutral-100 md:pb-6 md:text-[21px]">
                  Tops
                </p>
              </a>
            </div>

            {/* Card 5: Below Card 4, second column of right group (as per grid-template-areas) */}
            <div className="relative [grid-area:card5]">
              <a href="#" className="block h-[150px] md:h-[300px]">
                <img
                  src="https://cdn.sanity.io/images/0v989dzu/production/08cdd515ea0f753870f2a8a53436ea43ecd656c8-281x420.jpg?q=100&amp;auto=format"
                  alt=""
                  className="h-full w-full object-cover"
                />
                <p className="absolute bottom-0 w-full pb-3 text-center text-[13px] font-semibold leading-[140%] tracking-[0.25px] text-neutral-100 md:pb-6 md:text-[21px]">
                  Accessories
                </p>
              </a>
            </div>

            {/* Card 6: Middle column, second row (as per grid-template-areas) */}
            <div className="relative [grid-area:card6]">
              <a href="#" className="block h-[150px] md:h-[300px]">
                <img
                  src="https://cdn.sanity.io/images/0v989dzu/production/f65055e280bd362c2d0fe9152df1303b2961919f-281x420.jpg?q=100&auto=format"
                  alt=""
                  className="h-full w-full object-cover"
                />
                <p className="absolute bottom-0 w-full pb-3 text-center text-[13px] font-semibold leading-[140%] tracking-[0.25px] text-neutral-100 md:pb-6 md:text-[21px]">
                  Shorts
                </p>
              </a>
            </div>

            {/* Card 7: Rightmost column, second row (as per grid-template-areas) */}
            <div className="relative [grid-area:card7]">
              <a href="#" className="block h-[150px] md:h-[300px]">
                <img
                  src="https://cdn.sanity.io/images/0v989dzu/production/669eab5c43eed48137ad49cba788d7514b45f125-281x420.jpg?q=100&auto=format"
                  alt=""
                  className="h-full w-full object-cover"
                />
                <p className="absolute bottom-0 w-full pb-3 text-center text-[13px] font-semibold leading-[140%] tracking-[0.25px] text-neutral-100 md:pb-6 md:text-[21px]">
                  Shoes
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full">
          <a href="" className="">
            <img
              src="https://cdn.sanity.io/images/0v989dzu/production/733c347204115ddcd90878b851e239a461b2ad0c-2880x500.jpg?w=1600&q=100&crop=center&auto=format"
              alt=""
              className="h-[16rem] w-full object-cover "
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
