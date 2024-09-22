function DesktopNavbar() {
  const navbarItem = [
    {
      name: "Home",
      url: "#",
    },
    {
      name: "About",
      url: "#",
    },
    {
      name: "Contact",
      url: "#",
    },
    {
      name: "Blog",
      url: "#",
    },
    {
      name: "Careers",
      url: "#",
    },
  ];

  return (
    <nav
      className="z-[9999] rounded-[0.25rem]"
      onClick={(e) => e.stopPropagation()}
    >
      <ul className="flex gap-[1.875rem] text-center text-[0.875rem] leading-[1.3125rem] tracking-[-0.0088rem] text-grayish-blue">
        {navbarItem.map((item, index) => (
          <li key={index}>
            <a
              href={item.url}
              className="group relative transition-all duration-150 hover:text-dark-blue"
            >
              {item.name}
              <span className="absolute left-0 top-[3.3rem] h-1 w-full bg-gradient-to-r from-lime-green to-bright-cyan transition-all duration-150 group-hover:top-[3rem]"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DesktopNavbar;
