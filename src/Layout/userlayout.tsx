import { Outlet } from "react-router-dom";
import Header from "../Clients/header";
import Chartwidget from "../Component/tradingwidgetview";
import PhoneNav from "../Component/BottomNav";
import Desktop from "../Component/BottomNav/Desktop";

const Userlayout = () => {
  return (
    <div className="w-full h-[100dvh] flex flex-col bg-white">
      <div className="w-full h-[15%]  flex flex-col justify-around items-center max-md:hidden">
        <Header />
      </div>
      <div className="  w-full h-[85%]  flex max-md:h-[100%]">
        <div className="w-[65%] h-full max-md:hidden max-lg:hidden">
          <Chartwidget />
        </div>
        <div className="w-[50%] h-full  flex flex-col justify-between items-center max-md:w-full max-lg:w-full">
          <Outlet />
          <div className="w-full h-[13%]  flex justify-center items-center max-md:hidden">
            <Desktop />
          </div>
          <div className="w-full h-[10%]   max-md:flex justify-center items-center hidden">
            <PhoneNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userlayout;
