import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const AuthLayout = () => {
  // const location = useLocation();
  const [animateIn, setAnimateIn] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true);

  console.log(setImageLoaded);

  // const pageTitle = useMemo(() => {
  //   const path = location.pathname;
  //   if (path.includes("login")) return "Login";
  //   if (path.includes("register")) return "Register";
  //   if (path.includes("forgot-password")) return "Reset Password";
  //   if (path.includes("verify-email")) return "Verify Email";
  //   return "Authentication";
  // }, [location.pathname]);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateIn(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-[100dvh] bg-gradient-to-b from-[#22A0B7] to-[#0a3d46] flex flex-col justify-between items-center py-8 relative overflow-hidden">
      {/* Gradient Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#22A0B7] opacity-10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div
        className={`w-full max-w-md px-4 text-center transition-all duration-700 ease-out ${
          animateIn && imageLoaded
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-6"
        }`}
      >
        {/* <h1 className="text-white text-3xl font-bold tracking-wide">
          {pageTitle}
        </h1> */}
      </div>

      {/* Outlet */}
      <div
        className={`w-full max-w-md flex-grow flex items-center justify-center transition-all duration-700 ease-out delay-300 ${
          animateIn
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-95"
        }`}
      >
        <Outlet />
      </div>

      {/* Footer */}
      <footer
        className={`w-full max-w-md px-6 transition-all duration-700 ease-out delay-500 ${
          animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="border-t border-white/10 mt-8 pt-6">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white/60 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuthLayout;
