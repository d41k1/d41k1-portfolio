"use client";
import { Link as Scroll, animateScroll } from "react-scroll";

const options = {
  duration: 600,
  smooth: true,
};

const scrollToTop = () => {
  animateScroll.scrollToTop(options);
};

const Header = () => {
  return (
    <header className="bg-white shadow-md w-full py-4">
      <div className="container mx-auto flex justify-between items-center">
        <button
          onClick={scrollToTop}
          className="text-xl font-bold text-secondary"
        >
          d41k1<span className="text-accent">.</span>
        </button>
        <div className="flex items-center gap-3 md:gap-8 cursor-pointer text-sm sm:font-xs md:text-base font-semibold">
          <Scroll
            to="profile"
            smooth={true}
            className="hover:text-accent transition"
            duration={600}
            offset={-16}
          >
            <div>Profile</div>
          </Scroll>

          <Scroll
            to="skills"
            smooth={true}
            className="hover:text-accent transition"
            duration={600}
            offset={-16}
          >
            <div>Skills</div>
          </Scroll>

          <Scroll
            to="works"
            smooth={true}
            className="hover:text-accent transition"
            duration={600}
            offset={-16}
          >
            <div>Works</div>
          </Scroll>

          <Scroll
            to="contact"
            smooth={true}
            className="hover:text-accent transition"
            duration={600}
            offset={-16}
          >
            <div>Contact</div>
          </Scroll>
        </div>
      </div>
    </header>
  );
};

export default Header;
