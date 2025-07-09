import { AiFillApple } from "react-icons/ai";
import { IoChevronForward } from "react-icons/io5";
import {
  FaGooglePlay,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaSnapchatGhost,
  FaFacebook,
  FaPinterest,
} from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <div className="footer-container mx-auto flex min-w-[330px] flex-col justify-between bg-black px-6 py-5 sm:pb-0 sm:pt-10 xl:px-[60px]">
        <div className="footer-top-container flex flex-col-reverse items-center justify-center md:flex-row md:items-start lg:flex-row lg:justify-between">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="footer-links mt-6 flex w-full max-w-[426px] flex-col md:mr-5 md:mt-0 lg:max-w-full lg:flex-row xl:mr-0">
              <div className="footer-app-links hidden min-w-[300px] pr-14 xl:block xl:min-w-[unset]">
                <h2 className="mb-3 whitespace-nowrap pl-[3px] text-xs font-bold text-neutral-100">
                  SHOP FASTER WITH THE APP
                </h2>
                <div className="flex flex-row justify-between">
                  <a
                    href=""
                    className=" footer-logo w-[9rem] mr-3 flex cursor-pointer px-2 gap-1 items-center text-neutral-500 border-neutral-500   hover:border-neutral-100  hover:text-neutral-100 border rounded-md"
                  >
                    <AiFillApple className="text-[1.8rem]" />
                    <div className="flex flex-col">
                      <h3 className="text-[.65rem] leading-[.65rem] font-semibold ">
                        Download on the
                      </h3>
                      <h2 className="text-[1rem] leading-[1rem] font-bold ">
                        App Store
                      </h2>
                    </div>
                  </a>
                  <div className="flex  w-[9rem] cursor-pointer p-2 gap-1 items-center text-neutral-500 border-neutral-500   hover:border-neutral-100  hover:text-neutral-100 border rounded-md">
                    <FaGooglePlay className="text-[1.5rem]" />
                    <div className="flex flex-col">
                      <h3 className="text-[.65rem] leading-[.65rem] font-semibold ">
                        GET IT ON
                      </h3>
                      <h2 className="text-[1rem] leading-[1rem] font-bold ">
                        Google Play
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col lg:flex-row lg:mr-[10.5rem]">
                <div className="footer-links-container-links hidden lg:flex lg:flex-row">
                  <div className="lg:mr-[30px] 2xl:mr-12">
                    <p className="pb-3 text-xs font-extrabold text-neutral-100">
                      Get Help
                    </p>
                    <ul className="max-h-[197px] overflow-hidden xl:max-h-[234px]">
                      <li className="footer-menu-item text-base">
                        <a
                          href=""
                          className="block py-1.5 text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                        >
                          Help Center
                        </a>
                      </li>
                      <li className="footer-menu-item text-base">
                        <a
                          href=""
                          className="block py-1.5 text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                        >
                          Track order
                        </a>
                      </li>
                      <li className="footer-menu-item text-base">
                        <a
                          href=""
                          className="block py-1.5 text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                        >
                          Shipping info
                        </a>
                      </li>
                      <li className="footer-menu-item text-base">
                        <a
                          href=""
                          className="block py-1.5 text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                        >
                          Returns
                        </a>
                      </li>
                      <li className="footer-menu-item text-base">
                        <a
                          href=""
                          className="block py-1.5 text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:mr-[30px] 2xl:mr-12">
                    <p className="pb-3 text-xs font-extrabold text-neutral-100">
                      Company
                    </p>
                    <ul className="max-h-[197px] overflow-hidden xl:max-h-[234px]">
                      <li className="footer-menu-item text-base">
                        <a
                          href=""
                          className="block py-1.5 text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                        >
                          Careers
                        </a>
                      </li>
                      <li className="footer-menu-item text-base">
                        <a
                          href=""
                          className="block py-1.5 text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                        >
                          About
                        </a>
                      </li>
                      <li className="footer-menu-item text-base">
                        <a
                          href=""
                          className="block py-1.5 text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                        >
                          Stores
                        </a>
                      </li>
                      <li className="footer-menu-item text-base">
                        <a
                          href=""
                          className="block py-1.5 text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                        >
                          Want to Collab?
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:mr-[30px] 2xl:mr-12">
                    <p className="pb-3 text-xs font-extrabold text-neutral-100">
                      Qick links
                    </p>
                    <ul className="max-h-[197px] overflow-hidden xl:max-h-[234px]">
                      <li className="footer-menu-item text-base">
                        <a
                          href=""
                          className="block py-1.5 text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                        >
                          Size Guild
                        </a>
                      </li>
                      <li className="footer-menu-item text-base">
                        <a
                          href=""
                          className="block py-1.5 text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                        >
                          Sitemap
                        </a>
                      </li>
                      <li className="footer-menu-item text-base">
                        <a
                          href=""
                          className="block py-1.5 text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                        >
                          Gift cards
                        </a>
                      </li>
                      <li className="footer-menu-item text-base">
                        <a
                          href=""
                          className="block py-1.5 text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                        >
                          Check Gift Card Balance
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-links-accordion block flex-col justify-between lg:hidden">
                  <div className="relative w-full">
                    <div className="flex cursor-pointer items-center justify-between w-full md:w-[330px] py-5 px-0.5">
                      <span className="text-xs font-extrabold uppercase text-neutral-100">
                        Get Help
                      </span>
                      <FiPlus className="text-white text-[1rem]" />
                    </div>
                    <div className="overflow-hidden transition-[max-height] w-full md:w-[330px] border-b border-neutral-700">
                      {/* <div>
                        <ul className="mb-6">
                          <li className="footer-menu-item my-[3px] py-2 text-base">
                            <a
                              href=""
                              className="block text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                            >
                              Help center
                            </a>
                          </li>
                          <li className="footer-menu-item my-[3px] py-2 text-base">
                            <a
                              href=""
                              className="block text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                            >
                              Track order
                            </a>
                          </li>
                          <li className="footer-menu-item my-[3px] py-2 text-base">
                            <a
                              href=""
                              className="block text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                            >
                              Shipping info
                            </a>
                          </li>
                          <li className="footer-menu-item my-[3px] py-2 text-base">
                            <a
                              href=""
                              className="block text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                            >
                              Returns
                            </a>
                          </li>
                          <li className="footer-menu-item my-[3px] py-2 text-base">
                            <a
                              href=""
                              className="block text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                            >
                              Contact us
                            </a>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="footer-links-accordion block flex-col justify-between lg:hidden">
                  <div className="relative w-full">
                    <div className="flex cursor-pointer items-center justify-between w-full md:w-[330px] py-5 px-0.5">
                      <span className="text-xs font-extrabold uppercase text-neutral-100">
                        Company
                      </span>
                      <FiPlus className="text-white text-[1rem]" />
                    </div>
                    <div className="overflow-hidden transition-[max-height] w-full md:w-[330px] border-b border-neutral-700">
                      {/* <div>
                        <ul className="mb-6">
                          <li className="footer-menu-item my-[3px] py-2 text-base">
                            <a
                              href=""
                              className="block text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                            >
                              Help center
                            </a>
                          </li>
                          <li className="footer-menu-item my-[3px] py-2 text-base">
                            <a
                              href=""
                              className="block text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                            >
                              Track order
                            </a>
                          </li>
                          <li className="footer-menu-item my-[3px] py-2 text-base">
                            <a
                              href=""
                              className="block text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                            >
                              Shipping info
                            </a>
                          </li>
                          <li className="footer-menu-item my-[3px] py-2 text-base">
                            <a
                              href=""
                              className="block text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                            >
                              Returns
                            </a>
                          </li>
                          <li className="footer-menu-item my-[3px] py-2 text-base">
                            <a
                              href=""
                              className="block text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                            >
                              Contact us
                            </a>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="footer-links-accordion block flex-col justify-between lg:hidden">
                  <div className="relative w-full">
                    <div className="flex cursor-pointer items-center justify-between w-full md:w-[330px] py-5 px-0.5">
                      <span className="text-xs font-extrabold uppercase text-neutral-100">
                        Quick links
                      </span>
                      <FiPlus className="text-white text-[1rem]" />
                    </div>
                    <div className="overflow-hidden transition-[max-height] w-full md:w-[330px] border-b border-neutral-700">
                      {/* <div>
                        <ul className="mb-6">
                          <li className="footer-menu-item my-[3px] py-2 text-base">
                            <a
                              href=""
                              className="block text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                            >
                              Help center
                            </a>
                          </li>
                          <li className="footer-menu-item my-[3px] py-2 text-base">
                            <a
                              href=""
                              className="block text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                            >
                              Track order
                            </a>
                          </li>
                          <li className="footer-menu-item my-[3px] py-2 text-base">
                            <a
                              href=""
                              className="block text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                            >
                              Shipping info
                            </a>
                          </li>
                          <li className="footer-menu-item my-[3px] py-2 text-base">
                            <a
                              href=""
                              className="block text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                            >
                              Returns
                            </a>
                          </li>
                          <li className="footer-menu-item my-[3px] py-2 text-base">
                            <a
                              href=""
                              className="block text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                            >
                              Contact us
                            </a>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="footer-links-accordion block flex-col justify-between lg:hidden">
                  <div className="relative w-full">
                    <div className="flex cursor-pointer items-center justify-between w-full md:w-[330px] py-5 px-0.5">
                      <span className="text-xs font-extrabold uppercase text-neutral-100">
                        Legals
                      </span>
                      <FiPlus className="text-white text-[1rem]" />
                    </div>
                    <div className="overflow-hidden transition-[max-height] w-full md:w-[330px] border-b border-neutral-700">
                      {/* <div>
                        <ul className="mb-6">
                          <li className="footer-menu-item my-[3px] py-2 text-base">
                            <a
                              href=""
                              className="block text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                            >
                              Help center
                            </a>
                          </li>
                          <li className="footer-menu-item my-[3px] py-2 text-base">
                            <a
                              href=""
                              className="block text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                            >
                              Track order
                            </a>
                          </li>
                          <li className="footer-menu-item my-[3px] py-2 text-base">
                            <a
                              href=""
                              className="block text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                            >
                              Shipping info
                            </a>
                          </li>
                          <li className="footer-menu-item my-[3px] py-2 text-base">
                            <a
                              href=""
                              className="block text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                            >
                              Returns
                            </a>
                          </li>
                          <li className="footer-menu-item my-[3px] py-2 text-base">
                            <a
                              href=""
                              className="block text-[13px] leading-[21px] text-neutral-600 ring-0 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none"
                            >
                              Contact us
                            </a>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-social-newsletter flex-start flex w-full max-w-[28rem] flex-col md:w-1/2 md:pl-5 lg:w-full lg:pl-0">
              <h2 className="mt-5 text-[12px] font-black leading-[120%] tracking-[0.1px] text-neutral-100 md:mt-0">
                SIGN UP FOR DISCOUNTS + UPDATES
              </h2>
              <form action="" className="mt-3">
                <div className="footer-social-newsletter flex-start flex w-full max-w-[426px] flex-col md:w-1/2 md:pl-5 lg:w-full lg:pl-0">
                  <div className="footer-newsletter order-2 min-w-full md:order-1 md:mb-8">
                    <div className="relative bg-white rounded-[6px] flex items-center h-[3.8rem]">
                      {" "}
                      {/* Add a fixed height, e.g., h-20 */}
                      <input
                        type="email"
                        id="hs-floating-input-email"
                        className="peer px-4 p-4.5 block w-full sm:text-sm placeholder:text-transparent focus:outline-none disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-4.5 autofill:pt-6 autofill:pb-4.5 pr-12"
                        placeholder="you@email.com"
                      />
                      <label
                        htmlFor="hs-floating-input-email"
                        className="absolute top-0 start-0 p-4 h-full sm:text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-not-placeholder-shown:scale-90 peer-not-placeholder-shown:translate-x-0.5 peer-not-placeholder-shown:-translate-y-1.5"
                      >
                        Phone Number or Email
                      </label>
                      <IoChevronForward className="cursor-pointer text-[2.5rem] bg-[#F1F0EC] p-2 rounded-full absolute right-3" />
                    </div>

                    <div className="mt-3 flex flex-col gap-y-3">
                      <p className="mt-2 text-[.8rem] text-neutral-600">
                        By signing up for email, you agree to Fashion Nova's{" "}
                        <span className="underline">Terms of Service</span> and{" "}
                        <span className="underline">Privacy Policy.</span>
                      </p>

                      <p className="mt-3 mb-4 text-[.8rem] text-neutral-600">
                        By submitting your phone number, you agree to receive
                        recurring automated promotional and personalized
                        marketing text messages (e.g. cart reminders) from
                        Fashion Nova at the cell number used when signing up.
                        Consent is not a condition of any purchase. Reply HELP
                        for help and STOP to cancel. Msg frequency varies. Msg &
                        data rates may apply. View{" "}
                        <span className="underline">Terms</span> &{" "}
                        <span className="underline">Privacy</span>.
                      </p>
                    </div>
                  </div>

                  <div className="footer-social-icons order-1 flex w-auto items-center justify-center md:order-2 md:mb-8 md:mr-5 md:justify-start">
                    <ul className="flex justify-start hover:fill-neutral-100 md:pb-3 xl:pb-0">
                      <li className="flex">
                        {" "}
                        <a
                          href=""
                          className="footer-logo mr-5 flex h-10 w-10 items-center justify-center xxs:mr-1 xs:mr-3 md:justify-start"
                        >
                          <FaInstagram className="text-neutral-600 text-[1.2rem]" />
                        </a>
                      </li>
                      <li className="flex">
                        {" "}
                        <a
                          href=""
                          className="footer-logo mr-5 flex h-10 w-10 items-center justify-center xxs:mr-1 xs:mr-3 md:justify-start"
                        >
                          {" "}
                          <FaTiktok className="text-neutral-600 text-[1.2rem]" />
                        </a>
                      </li>
                      <li className="flex">
                        {" "}
                        <a
                          href=""
                          className="footer-logo mr-5 flex h-10 w-10 items-center justify-center xxs:mr-1 xs:mr-3 md:justify-start"
                        >
                          {" "}
                          <FaYoutube className="text-neutral-600 text-[1.2rem]" />
                        </a>
                      </li>
                      <li className="flex">
                        {" "}
                        <a
                          href=""
                          className="footer-logo mr-5 flex h-10 w-10 items-center justify-center xxs:mr-1 xs:mr-3 md:justify-start"
                        >
                          {" "}
                          <FaSnapchatGhost className="text-neutral-600 text-[1.2rem]" />
                        </a>
                      </li>
                      <li className="flex">
                        {" "}
                        <a
                          href=""
                          className="footer-logo mr-5 flex h-10 w-10 items-center justify-center xxs:mr-1 xs:mr-3 md:justify-start"
                        >
                          {" "}
                          <FaFacebook className="text-neutral-600 text-[1.2rem]" />
                        </a>
                      </li>
                      <li className="flex">
                        {" "}
                        <a
                          href=""
                          className="footer-logo mr-5 flex h-10 w-10 items-center justify-center xxs:mr-1 xs:mr-3 md:justify-start"
                        >
                          {" "}
                          <FaPinterest className="text-neutral-600 text-[1.2rem]" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="flex justify-between md:border-t-[.04rem] border-neutral-500 pt-4 mb-6">
          <h4 className="text-xs text-neutral-500">
            © 2025 Fashion Nova, LLC All Rights Reserved
          </h4>
          <div className="hidden items-center lg:flex lg:h-auto lg:w-auto lg:overflow-auto">
            <h4 className="px-2 text-xs text-neutral-600 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none">
              Promo T&Cs
            </h4>
            <h4 className="px-2 text-xs text-neutral-600 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none">
              Privacy Policy
            </h4>

            <h4 className="px-2 text-xs text-neutral-600 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none">
              Terms of Service
            </h4>
            <h4 className="px-2 text-xs text-neutral-600 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none">
              CA Supply Chains Act
            </h4>
            <h4 className="px-2 text-xs text-neutral-600 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none">
              Your privacy choices
            </h4>
            <h4 className="px-2 text-xs text-neutral-600 hover:text-neutral-100 focus:text-neutral-100 focus:outline-none">
              Privacy Policy
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
