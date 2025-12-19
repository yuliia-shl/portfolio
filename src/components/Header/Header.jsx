const Header = () => {
  return (
    <header>
      <div className="container mx-auto px-[5%] flex justify-between">
        <a
          href="/"
          aria-label="На головну"
          className="font-second text-[28px]/[100%] lg:text-[32px]/[150%] uppercase tracking-[-0.01em] py-6"
        >
          YULIIA SHLIAPTSEVA
        </a>
        <nav className="flex items-center justify-center">
          <button
            aria-label="Open menu"
            /* aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}> */
            aria-expanded="false"
            className="hidden "
          >
            <svg aria-hidden="true" className="w-11 h-11 stroke-silver-300">
              <use href="/icons.svg#icon-burger" />
            </svg>
          </button>

          <ul className="flex items-center gap-[3vw] font-third leading-[150%] font-medium tracking-[-0.03em] ">
            <li>
              <a
                href="#projects"
                className="relative inline-block py-3 underline-animation hover:text-yellow-green-300 transition duration-300 ease-in-out"
              >
                Projects
              </a>
            </li>
            {/* <li>
              <a href="#about" className="block py-6">
                About
              </a>
            </li>
            <li>
              <a href="#contacts" className="block py-6">
                Contact
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
