function FooterNavbar() {
  const navItems = [
    {
      name: "About Us",
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
    {
      name: "Support",
      url: "#",
    },
    {
      name: "Privacy Policy",
      url: "#",
    },
  ];

  return (
    <nav>
      <ul className="space-y-2 text-center text-white lg:grid lg:grid-cols-2 lg:gap-x-24 lg:gap-y-2 lg:space-y-0 lg:text-start">
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.url}
              className="text-[0.9375rem] leading-[1.625rem] tracking-[-0.015rem] transition-all duration-150 hover:text-lime-green"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default FooterNavbar;
