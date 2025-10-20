import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/Miningmatrixlogo-removebg-preview.png";
import { MdClose, MdMenu } from "react-icons/md";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [Toggle, setToggle] = useState(false);
  const nav = useNavigate();

  const HandleToggle = () => setToggle(!Toggle);
  const handleClose = () => setToggle(false);

  return (
    <div className="w-full h-[12vh] bg-gradient-to-b from-[#0A0A0A] to-[#0c011a] flex justify-around items-center">
      {/* Logo */}
      <div className="w-[30%] mt-5 h-full md:w-[25%] flex justify-center items-center">
        <img src={logo} alt="Logo" className=" w-full h-full object-cover" />
      </div>

      {/* Desktop Navigation */}
      <div className="w-[60%] h-full flex justify-around items-center max-md:hidden max-lg:hidden">
        <div className="w-[40%] h-full text-white font-semibold flex justify-around items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#22A0B7] border-[#22A0B7]"
                : "text-white hover:text-[#22A0B7]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-[#22A0B7] border-[#22A0B7]"
                : "text-white hover:text-[#22A0B7]"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-[#22A0B7] border-[#22A0B7]"
                : "text-white hover:text-[#22A0B7]"
            }
          >
            Contact
          </NavLink>
        </div>

        <div className="w-[40%] h-full flex justify-around items-center">
          <button
            className="px-9 py-2 bg-transparent border border-[#22A0B7] rounded font-semibold text-[#22A0B7] hover:bg-[#22A0B7] hover:text-white transition-all duration-300"
            onClick={() => nav("/auth/register")}
          >
            Register
          </button>
          <button
            className="px-9 py-2 bg-[#22A0B7] border border-[#22A0B7] rounded font-semibold text-white hover:bg-transparent hover:text-[#22A0B7] transition-all duration-300"
            onClick={() => nav("/auth/login")}
          >
            Login
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="w-[20%] h-full hidden max-md:flex max-lg:flex justify-center relative items-center">
        {Toggle ? (
          <MdClose size={28} className="text-white" onClick={HandleToggle} />
        ) : (
          <MdMenu size={28} className="text-white" onClick={HandleToggle} />
        )}

        <AnimatePresence>
          {Toggle && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "14rem", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-[20rem] h-[14rem]  absolute top-20 max-sm:left-[-15rem] z-10 rounded-md shadow-md"
            >
              <div className="w-full h-full px-4 text-white font-semibold flex-col flex justify-around items-start">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#22A0B7]"
                      : "text-white hover:text-[#22A0B7]"
                  }
                  onClick={handleClose}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#22A0B7]"
                      : "text-white hover:text-[#22A0B7]"
                  }
                  onClick={handleClose}
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#22A0B7]"
                      : "text-white hover:text-[#22A0B7]"
                  }
                  onClick={handleClose}
                >
                  Contact
                </NavLink>
                <div className="w-full h-[20%] flex justify-start items-center">
                  <button
                    className="px-9 py-2 bg-[#22A0B7] border border-[#22A0B7] rounded font-semibold text-white hover:bg-transparent hover:text-[#22A0B7] transition-all duration-300"
                    onClick={() => nav("/auth/register")}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
