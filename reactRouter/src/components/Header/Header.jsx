import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";

export default function Header() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    if (dark) {
      let imageElement = document.getElementById("image1");

      // Replace the image source with another image
      if (imageElement) {
        // Assuming "newImageURL" is the URL of the new image
        imageElement.src =
          "https://raw.githubusercontent.com/kunal-tajne/learningphase/main/Code%20typing-cuate.png";
      }
    }
    else {
      let imageElement = document.getElementById("image1");

      // Replace the image source with another image
      if (imageElement) {
        // Assuming "newImageURL" is the URL of the new image
        imageElement.src =
          "https://raw.githubusercontent.com/kunal-tajne/learningphase/main/Programming-amico.png";
      }
    }
  }, [dark]);

 

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-green-700">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
          <Link to="/" className="flex items-center">
            <img
              src="https://raw.githubusercontent.com/kunal-tajne/learningphase/main/welcomeLogoNew.png"
              className="h-14 ml-5"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2 ">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none  dark:text-white dark:hover:bg-gray-800 dark:focus:ring-gray-300 dark:ring-gray-300 dark:bg-gray-800"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-green-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0  dark:text-white`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/weather"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0  dark:text-white `
                  }
                >
                  Weather
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0  dark:text-white `
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0  dark:text-white `
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0  dark:text-white `
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="order-4">
            <button onClick={() => darkModeHandler && darkModeHandler()}>
              {dark && <FaToggleOn className="text-white" />}
              {!dark && <FaToggleOff />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
