const Hero = () => {
  return (
    <section className="pt-10 pb-16 lg:pb-20 border-b border-abbey-800 ">
      <div className="container mx-auto px-[5%] flex flex-col gap-[5vw] items-center md:flex-row">
        <div className="w-full">
          <h1 className="font-second text-[56px]/[100%] text-white mb-3 md:mb-[2vw] lg:text-[100px]/[90%] ">
            Hi, I'm Yuliia Shliaptseva
          </h1>
          <p className="mb-8 md:mb-[4vw]">
            Full-stack developer from Ukraine, building fast, accessible, and
            user-friendly web apps and landing pages.
          </p>
          <div className="flex gap-5">
            <a
              href="#contact"
              className="inline-flex p-1 pl-4 bg-yellow-green-300 rounded-full gap-3 items-center lg:p-1.5 lg:pl-6"
            >
              <span className="text-cod-gray-950 text-sm/[100%] lg:text-base/[100%] font-bold uppercase">
                Contact me
              </span>
              <span className="p-2.5 lg:p-2.25 bg-cod-gray-950 rounded-full">
                <svg className="w-5 h-5 fill-white lg:w-6 lg:h-6">
                  <use href="/icons.svg#icon-arrow-up" />
                </svg>
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/yuliia-shliaptseva/"
              target="_blank"
              className="flex p-3 lg:p-3.5 bg-shark-950 items-center rounded-full"
            >
              <svg className="w-6 h-6 lg:w-6.5 lg:h-6.5 fill-yellow-green-300">
                <use href="/icons.svg#icon-linkedin" />
              </svg>
            </a>

            <a
              href="https://github.com/yuliia-shl/"
              target="_blank"
              className="flex p-3 lg:p-3.5 bg-shark-950 items-center rounded-full"
            >
              <svg className="w-6 h-6 lg:w-6.5 lg:h-6.5 fill-yellow-green-300">
                <use href="/icons.svg#icon-github" />
              </svg>
            </a>
          </div>
        </div>
        <div className="w-full max-w-[600px] aspect-[342/400] lg:aspect[600/700] mx-auto ">
          <img
            src="/yuliia-1.jpg"
            alt="Yuliia's photo"
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
