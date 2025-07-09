import { IoBagAddOutline, IoHeartOutline } from "react-icons/io5";

const Collection = (selectedFilter) => {
  const collections = [
    {
      id: 1,
      title: "Samantha Wide Leg Contrast Waistband",
      marketing: "Up to 80% Off Sitewide! Prices as Marked",
      price: 49400,
      discount: 20.04,
      url: "https://cdn.shopify.com/s/files/1/0293/9277/files/04-08-25_S2_34_M6712C_Creamcombo_ZSR_CXB_RL_16-25-21_60091_BH_BH.jpg?v=1744320365&width=400&height=599&crop=center",
    },
    {
      id: 2,
      title: "Samantha Wide Leg Contrast Waistband",
      marketing: "Up to 80% Off Sitewide! Prices as Marked",
      price: 49400,
      discount: 20.04,
      url: "https://cdn.shopify.com/s/files/1/0293/9277/files/03-26-25_S2_45_DV29272_Ivory_CXB_RL_15-43-53_59561_PXF.jpg?v=1743112214&width=400&height=599&crop=center",
    },
    {
      id: 3,
      title: "Samantha Wide Leg Contrast Waistband",
      marketing: "Up to 80% Off Sitewide! Prices as Marked",
      price: 49400,
      discount: 20.04,
      url: "https://cdn.shopify.com/s/files/1/0293/9277/files/04-09-25_S2_26_DV29272_Tan_CXB_RL_15-42-25_60139_PXF.jpg?v=1744314205&width=400&height=599&crop=center",
    },
    {
      id: 4,
      title: "Samantha Wide Leg Contrast Waistband",
      marketing: "Up to 80% Off Sitewide! Prices as Marked",
      price: 49400,
      discount: 20.04,
      url: "https://cdn.shopify.com/s/files/1/0293/9277/files/04-10-25_S1_35_DV29272_Navy_HY_JS_13-31-49_0485_PXF.jpg?v=1744650000&width=400&height=599&crop=center",
    },
    {
      id: 5,
      title: "Samantha Wide Leg Contrast Waistband",
      marketing: "Up to 80% Off Sitewide! Prices as Marked",
      price: 49400,
      discount: 20.04,
      url: "https://cdn.shopify.com/s/files/1/0293/9277/files/03-27-25_S2_26_FN9568WDSH_Ivory_CXB_RL_15-22-15_59661_PXF.jpg?v=1743195028&width=400&height=599&crop=center",
    },
    {
      id: 6,
      title: "Samantha Wide Leg Contrast Waistband",
      marketing: "Up to 80% Off Sitewide! Prices as Marked",
      price: 49400,
      discount: 20.04,
      url: "https://cdn.shopify.com/s/files/1/0293/9277/files/05-22-24_S2_41_CAP10095_White_CXB_RL_15-57-52_37021_BH.jpg?v=1717001452&width=400&height=599&crop=center",
    },
    {
      id: 7,
      title: "Samantha Wide Leg Contrast Waistband",
      marketing: "Up to 80% Off Sitewide! Prices as Marked",
      price: 49400,
      discount: 20.04,
      url: "https://cdn.shopify.com/s/files/1/0293/9277/files/04-23-25_S2_15_SP4000125FN_White_ZSR_AE_AA_15-05-16_60687_PXF.jpg?v=1745519992&width=400&height=599&crop=center",
    },
    {
      id: 8,
      title: "Samantha Wide Leg Contrast Waistband",
      marketing: "Up to 80% Off Sitewide! Prices as Marked",
      price: 49400,
      discount: 20.04,
      url: "https://cdn.shopify.com/s/files/1/0293/9277/files/03-26-25_S2_44_KT17015_OffWhite_CXB_RL_15-40-42_17405_PXF.jpg?v=1745282959&width=400&height=599&crop=center",
    },
    {
      id: 9,
      title: "Samantha Wide Leg Contrast Waistband",
      marketing: "Up to 80% Off Sitewide! Prices as Marked",
      price: 49400,
      discount: 20.04,
      url: "https://cdn.shopify.com/s/files/1/0293/9277/files/04-24-25_S2_13_HBP1689_Creamcombo_CXB_RL_14-57-43_60809_PXF.jpg?v=1745620780&width=400&height=599&crop=center",
    },
    {
      id: 10,
      title: "Samantha Wide Leg Contrast Waistband",
      marketing: "Up to 80% Off Sitewide! Prices as Marked",
      price: 49400,
      discount: 20.04,
      url: "https://cdn.shopify.com/s/files/1/0293/9277/files/09-26-24_S3_40_KSFB4071501_Navycombo_ZSR_TK_SS_13-41-12_72606_SG_MH.jpg?v=1727396499&width=400&height=599&crop=center",
    },
    {
      id: 3,
      title: "Samantha Wide Leg Contrast Waistband",
      marketing: "Up to 80% Off Sitewide! Prices as Marked",
      price: 49400,
      discount: 20.04,
      url: "https://cdn.shopify.com/s/files/1/0293/9277/files/04-25-25_S6_36_CAP120109_Taupe_KJ_MC_14-18-49_70631_PXF.jpg?v=1745876799&width=400&height=599&crop=center",
    },
    {
      id: 4,
      title: "Samantha Wide Leg Contrast Waistband",
      marketing: "Up to 80% Off Sitewide! Prices as Marked",
      price: 49400,
      discount: 20.04,
      url: "https://cdn.shopify.com/s/files/1/0293/9277/files/05-20-25_S2_38_V30803_Ivory_CXB_RL_15-29-16_62734_PXF.jpg?v=1747945836&width=400&height=599&crop=center",
    },
  ];

  return (
    <>
      <div className="mb-12 md:mb-[72px] grid grid-cols-2 gap-x-[1px] gap-y-6 md:gap-x-2 lg:grid-cols-3 xl:grid-cols-4">
        {collections.map((collection) => (
          <>
            <div key={collection.id}>
              <div className="relative">
                <div className="group">
                  <div className="relative">
                    <a href="" className="">
                      <div>
                        <div
                          className="relative  overflow-hidden py-[calc(var(--aspect-ratio-hack)/2)]
      after:pointer-events-none after:absolute after:inset-0 after:z-10 after:border-3
      after:border-transparent group-[.item-active]:after:border-black"
                        >
                          <img
                            src={collection.url}
                            alt=""
                            className="object-cover w-[20rem] h-[30rem] "
                          />
                        </div>
                      </div>
                    </a>
                    <div className="absolute bottom-2 flex w-full items-center justify-between px-2">
                      <button className="z-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full p-2 md:hidden bg-neutral-50">
                        <IoBagAddOutline />
                      </button>
                    </div>
                    <div className="md:group-hover:flex absolute bottom-0 hidden w-full px-6 pb-6">
                      <button className="hidden h-12 cursor-pointer w-full rounded-full py-4 text-xs font-semibold text-neutral-100 transition duration-300 md:block  bg-neutral-900 hover:bg-neutral-800">
                        Quick Add
                      </button>
                    </div>
                  </div>
                  <div className=" md:block">
                    <div className="mt-2 cursor-default space-y-1 px-4 lg:px-0 lg:pr-3">
                      <div className="flex flex-col">
                        <div className="flex justify-between">
                          <a
                            href=""
                            className="text-[.9rem] line-clamp-1 leading-[140%] hover:underline"
                          >
                            {collection.title}
                          </a>
                          <button className="ml-1 pl-1 md:pl-0">
                            <IoHeartOutline />
                          </button>
                        </div>
                        <div className="flex gap-x-2 items-center">
                          <div className="flex flex-wrap items-center gap-x-2">
                            <div>
                              <div className="font-bold !leading-[100%] text-[#9D2226]">
                                {new Intl.NumberFormat("en-US").format(
                                  collection.price -
                                    (collection.price * collection.discount) /
                                      100
                                )}
                              </div>
                            </div>
                            <div>
                              <div className="line-through leading-[100%]">
                                {new Intl.NumberFormat("en-US").format(
                                  collection.price
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-x-0.5 undefined">
                          <div className="text-[.85rem] font-semibold leading-[140%] text-[#9D2226]">
                            {collection.marketing}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Collection;
