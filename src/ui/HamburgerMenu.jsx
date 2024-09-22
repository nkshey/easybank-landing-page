function HamburgerMenu({ isOpen, toggleMenu }) {
  return (
    <button onClick={toggleMenu}>
      {isOpen ? (
        <img src="./images/icon-close.svg" alt="hamburger icon" />
      ) : (
        <img src="./images/icon-hamburger.svg" alt="hamburger icon" />
      )}
    </button>
  );
}

export default HamburgerMenu;
