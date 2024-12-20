import { Link, NavLink } from "react-router";

function Header() {
  return (
    <header className="px-5 md:px-20 py-3 flex justify-between items-center">
      <section>
        <Link className="hover:scale-105 font-bold text-xl" to="/">
          Steller Seller
        </Link>
      </section>
      <nav>
        <ul className="flex gap-4 items-center">
          <li>
            <NavLink
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "pending" : "",
                  isActive && "text-blue-500",
                  isTransitioning ? "transitioning" : "",
                ].join(" ")
              }
              to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "pending" : "",
                  isActive && "text-blue-500",
                  isTransitioning ? "transitioning" : "",
                ].join(" ")
              }
              to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
