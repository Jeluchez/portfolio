
const menuOptions = ['About', 'Skills', 'Projects', 'Experience'];

export const NavBar = () => {
  return (
    <nav className="wrapper py-4 ml-4" aria-label="Main Navigation">
      <ul className="navbar flex justify-between items-center gap-6" role="menu">
        {menuOptions.map((item) => (
          <li key={item} role="menuitem">
            <a
              href={`#${item.toLowerCase()}`}
              className="relative block cursor-pointer text-gray-700 transition-colors duration-300 hover:text-purple-600 focus:text-purple-600 focus:outline-none after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full focus:after:w-full"
              tabIndex={0}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

