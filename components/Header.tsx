import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 bg-[#10366D] text-white p-3 shadow-xl z-10">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <img src="images/IDC_LOGO.svg" alt="idc" className="h-6 md:h-8" />

        <a href="https://github.com/mrtnprzk" target="_blank" rel="noreferrer">
          <img src="images/github_logo.png" alt="github" className="h-8 md:h-10" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
