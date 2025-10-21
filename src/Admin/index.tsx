import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import { useState } from "react";
import UserHeader from "./Header";

const Admin = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="h-screen w-screen max-w-[100vw] max-h-[100vh] overflow-hidden flex">
        <Sidebar setActive={setActive} active={active} />

        <div className="w-full h-[100%] bg-slate-100 flex  flex-col">
          <UserHeader setActive={setActive} active={active} />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Admin;
