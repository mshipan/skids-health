import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#30A2FF] px-5 py-7 flex items-center justify-between">
      <div>
        <Link to="/">
          <h2 className="text-2xl font-serif text-[#FFE7A0]">SKIDS Health</h2>
        </Link>
      </div>
      <ul className="flex gap-10">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#FFF5B8] navClass" : "md:text-white "
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add-user"
            className={({ isActive }) =>
              isActive ? "text-[#FFF5B8] navClass" : "md:text-white "
            }
          >
            Add User
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
