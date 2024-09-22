import { useEffect, useState } from "react";
import HamburgerMenu from "../../ui/HamburgerMenu";
import Logo from "../../ui/Logo";
import MobileNavbar from "../navbar/MobileNavbar";
import DesktopNavbar from "../navbar/DesktopNavbar";
import InviteButton from "../../ui/InviteButton";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      const headerBottom = header.getBoundingClientRect().bottom;
      setIsHeaderHidden(headerBottom <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="relative z-[9999] grid place-items-center bg-white px-6 py-[1.375rem] md:overflow-hidden lg:px-10">
      <div className="flex w-full max-w-[69.375rem] items-center justify-between">
        <Logo type="dark" />
        {isDesktop ? (
          <>
            <DesktopNavbar />
            <InviteButton />
          </>
        ) : (
          <>
            <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
            {isOpen && (
              <MobileNavbar
                isHeaderHidden={isHeaderHidden}
                toggleMenu={toggleMenu}
              />
            )}
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
