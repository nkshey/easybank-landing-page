function MobileNavbar({ isHeaderHidden, toggleMenu }) {
  return (
    <div
      className={`pointer-events-auto ${isHeaderHidden ? "fixed top-0" : "absolute top-16 h-dvh"} inset-0 z-[9999] flex items-start justify-center bg-gradient-to-b from-dark-blue to-dark-blue/0 p-6`}
      onClick={toggleMenu}
    >
      <nav
        className="z-[9999] w-full rounded-[0.25rem] bg-white p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="mid:space-y-8 space-y-6 text-center text-[1.125rem] leading-[1.3125rem] tracking-[-0.0088rem] text-dark-blue">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileNavbar;
