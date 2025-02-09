import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 md:px-36 text-left w-full mt-10">
        <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">
          <div className="flex flex-col md:items-start items-center w-full ">
            <img src={assets.logo_dark} alt="logo" />
            <p className="text-white/30 mt-6 text-center md:text-left text-sm">
              Lorem Ispum is simply dummy text of the printing and typestting
              industry. Lorem Ispum has been the industry's standard dummy text.
            </p>
          </div>

          <div className="flex flex-col md:items-start items-center w-full">
            <h2 className="font-semibold text-white/80 md:space-y-2 justify-between text-sm">
              Company
            </h2>
            <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Abour us</a>
              </li>
              <li>
                <a href="">Contract us </a>
              </li>
              <li>
                <a href="">Privacy policy</a>
              </li>
              <li>
                <a href="/">Send home page </a>
              </li>
            </ul>{" "}
          </div>
          <div className="hidden md:flex flex-col items-start w-full ">
            <h2 className="font-semibold text-white md-5">
              Subscribe to our newsletter
            </h2>
            <p className="text-sm text-white/80">
              The latest news , articals, and resources, and your inbox weekly{" "}
            </p>
            <div className="flex items-center gap-2 mb-5 ">
              <input
                type="email"
                placeholder="Enter your Email"
                className="border border-gray-500/30 bg-gray-500 placeholder-white-500 outline-none w-64 rounded px-2 h-9 text-sm"
              />
              <button className="bg-blue-600 w-24 h-9 rounded text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <p className="text-white/30 py-6 text-center md:text-left text-sm">
          Copyright 2025 @ GreateStack. All Right Registered
        </p>
      </footer>
    </>
  );
};

export default Footer;
