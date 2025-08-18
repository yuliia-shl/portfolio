const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:py-20">
      <div className="container mx-auto px-[5%]">
        <div className="flex flex-col gap-10 lg:gap-[6vw] mb-16 lg:mb-20">
          <div>
            <h2 className="title">Let’s connect</h2>
            <p className="mb-2">
              Say hello at{" "}
              <a
                href="mailto:yu.expert@gmail.com"
                className="underline hover:decoration-yellow-green-300 transition-colors duration-300
              ease-in-out"
              >
                yu.expert@gmail.com
              </a>
            </p>
            <p>
              For more info, here’s my{" "}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:decoration-yellow-green-300 transition-colors duration-300 ease-in-out"
              >
                resume
              </a>
            </p>
          </div>
          <ul className="flex gap-7">
            <li>
              <a
                href="https://www.linkedin.com/in/yuliia-shliaptseva/"
                target="_blank"
                className=""
              >
                <svg className="w-8 h-8 lg:w-10 lg:h-10 fill-yellow-green-300 hover:fill-conifer-400 transition duration-300 hover:scale-115">
                  <use href="/icons.svg#icon-linkedin" />
                </svg>
              </a>
            </li>

            <li>
              <a href="https://github.com/yuliia-shl/" target="_blank">
                <svg className="w-8 h-8 lg:w-10 lg:h-10 fill-yellow-green-300 hover:fill-conifer-400 transition duration-300 hover:scale-115">
                  <use href="/icons.svg#icon-github" />
                </svg>
              </a>
            </li>

            <li>
              <a href="https://t.me/YuliiaShl" target="_blank">
                <svg className="w-8 h-8 lg:w-10 lg:h-10 fill-yellow-green-300 hover:fill-conifer-400 transition duration-300 hover:scale-115">
                  <use href="/icons.svg#icon-telegram" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <p>&copy; 2025 Yuliia Shliaptseva</p>
      </div>
    </section>
  );
};

export default Contact;
