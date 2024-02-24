import { NavLink, Link } from "react-router-dom";
import { HEADER_LOGO_URL } from "../utils/contant";
import Container from "./Container";

const Header = () => {
  return (
    <div className="w-full border shadow">
      <Container>
        <div className="w-full flex justify-between items-center">
          <Link to="/">
            {
              <img
                src={HEADER_LOGO_URL}
                alt="Logo"
                className="w-[132px] h-[100px]"
              />
            }
          </Link>
          <nav>
            <ul className="flex gap-5 font-semibold">
              <li>
                <NavLink to="/" className="active:text-blue-500">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Header;
