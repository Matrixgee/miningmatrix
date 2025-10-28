/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import face from "../assets/blank-profile-picture.webp";
import { RiCoinsLine } from "react-icons/ri";
import Chartone from "../Component/chartone";
import { BsCashCoin } from "react-icons/bs";
import { FaCoins } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import { MdOutlineFileDownload, MdOutlineLogout } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { BsGear } from "react-icons/bs";
import { HiChartBar } from "react-icons/hi";
// import sol from "../assets/hero.jpg";
// import eth from "../assets/mainlogo.png";
// import btc from "../assets/three.jpg";
// import lock from "../assets/one.jpg";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../Global/UserSlice";
import { closeDropdown, toggleDropdown } from "../Global/Function";
import axios from "../config/axiosconfig";

const Overview = () => {
  const dropdown = useSelector((state: any) => state.dropdown.isOpen);
  const [profilePic, setProfilePic] = useState<string>(face);
  const [user, setuser] = useState<any>({});
  console.log(user);

  const Token = useSelector((state: any) => state.user.Token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const userId = localStorage.getItem("userId");

  const getUser = async () => {
    try {
      const response = await axios.get(`/user/userprofile/${userId}`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      setuser(response.data.data);
      setProfilePic(response.data.data.profilePic);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const formatNumber = (number: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
  };

  // // Display "$0.00" if the asset is empty
  // const getAssetAmount = (amount: number | null | undefined): string => {
  //   if (!amount || isNaN(amount)) {
  //     return "$0.00";
  //   }
  //   return formatNumber(amount);
  // };

  const AcctInfo = [
    {
      id: 1,
      title: "Total Withdraw",
      content: formatNumber(40000),
      icon: <BsCashCoin size={18} />,
    },
    {
      id: 2,
      title: "Total Deposit",
      content: formatNumber(80000),
      icon: <FaCoins size={18} />,
    },
  ];

  const RoutInfo = [
    {
      id: 1,
      title: "Withdraw",
      path: "/user/withdraw",
      icon: <LuSend size={20} />,
    },
    {
      id: 2,
      title: "Deposit",
      path: "/user/deposit",
      icon: <MdOutlineFileDownload size={20} />,
    },
    {
      id: 3,
      title: "Trade",
      path: "/user/my-plans",
      icon: <RiCoinsLine size={20} />,
    },
  ];

  // const Asset = [
  //   {
  //     image: btc,
  //     amount: getAssetAmount(user.btcBal),
  //     name: "Bitcoin",
  //     othername: "BTC",
  //     theOther: "btc",
  //   },
  //   {
  //     image: eth,
  //     amount: getAssetAmount(user.ethBal),
  //     name: "Ethereum",
  //     othername: "ETH",
  //     theOther: "eth",
  //   },
  //   {
  //     image: sol,
  //     amount: getAssetAmount(user.solBal),
  //     name: "Solana",
  //     othername: "SOL",
  //     theOther: "sol",
  //   },
  // ];

  const handleMenuClick = (path: string) => {
    navigate(path);
  };

  const handleMenDropdown = () => {
    dispatch(toggleDropdown());
  };

  // Handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        dispatch(closeDropdown());
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdown, dispatch]);

  const handleLogout = () => {
    dispatch(clearUser());
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div
      ref={dropdownRef}
      className="w-full h-full overflow-y-auto scrollbar-none bg-gray-50"
    >
      {/* Header with Portfolio Value */}
      <div className="w-full px-3 py-2 bg-white border-b border-gray-100 flex justify-between items-center shadow-sm">
        <div className="flex flex-col">
          <p className="text-xs text-gray-500">Total portfolio</p>
          <p className="font-bold text-lg text-gray-800">{formatNumber(0)}</p>
        </div>

        <div
          className="flex items-center bg-white cursor-pointer"
          onClick={handleMenDropdown}
        >
          <div className="w-7 h-7 rounded-full overflow-hidden">
            <img
              src={profilePic || face}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <FaCaretDown size={10} className="text-gray-600 ml-1" />

          {/* Profile Dropdown - Mobile Optimized */}
          <AnimatePresence>
            {dropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-3 top-36 w-44 bg-white rounded-md shadow-lg z-50 overflow-hidden"
              >
                <div className="bg-gradient-to-b from-[#0A0A0A] to-[#0c011a] py-2 px-3 text-center">
                  <div className="w-9 h-9 rounded-full mx-auto overflow-hidden mb-1 border-2 border-white">
                    <img
                      src={profilePic || face}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-medium text-xs text-white">Mike Jordan</p>
                  <p className="text-[#22A0B7]  text-xs">mike@mailinator</p>
                </div>

                <div className="py-1">
                  <div
                    className="px-3 py-2 flex items-center gap-2 text-xs hover:bg-gray-100 cursor-pointer"
                    onClick={() => navigate("/user/profile")}
                  >
                    <FiUsers className="text-gray-700" size={14} />
                    <p className="font-medium">Profile</p>
                  </div>
                  <div
                    className="px-3 py-2 flex items-center gap-2 text-xs hover:bg-gray-100 cursor-pointer"
                    onClick={() => navigate("/user/setting")}
                  >
                    <BsGear className="text-gray-700" size={14} />
                    <p className="font-medium">Settings</p>
                  </div>
                  <div
                    className="px-3 py-2 flex items-center gap-2 text-xs hover:bg-gray-100 cursor-pointer text-red-500"
                    onClick={handleLogout}
                  >
                    <MdOutlineLogout size={14} />
                    <p className="font-medium">Logout</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Welcome Banner */}
      <div className="mx-3 mt-3 mb-2">
        <div className="overview bg-gradient-to-b from-[#0A0A0A] to-[#0c011a] rounded-lg overflow-hidden">
          <div className="p-4 flex flex-col items-center text-center">
            <h2 className="text-white text-lg font-bold mb-1">
              Hello,{" "}
              <span>
                {/* {user.firstName} {user.lastName} */}
                Mike Jordan
              </span>
            </h2>
            <p className="text-[#22A0B7]  text-xs mb-3">
              Welcome to Mining Matrix
              <br />
              Crypto Investment Made Easy.
            </p>
            <button
              onClick={() => navigate("/user/deposit")}
              className="flex items-center gap-1 bg-white text-[#22A0B7]  hover:bg-[#0A0A0A] transition-colors px-4 py-2 text-xs rounded-lg font-semibold shadow-md"
            >
              <HiChartBar size={16} />
              Start Trading
            </button>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="px-3 pt-2">
        <div className="bg-white h-[26rem] rounded-lg shadow-sm mb-3">
          <Chartone />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-3 pb-3">
        <div className="flex justify-between gap-2 mb-3">
          {AcctInfo.map((item) => (
            <div
              key={item.id}
              className="flex-1 bg-white rounded-lg shadow-sm p-2"
            >
              <div className="text-[#22A0B7] mb-1">{item.icon}</div>
              <p className="text-gray-500 text-xs">{item.title}</p>
              <p className="font-semibold text-xs">{item.content}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mb-3 gap-2">
          {RoutInfo.map((nav) => (
            <div
              key={nav.id}
              onClick={() => handleMenuClick(nav.path)}
              className="flex-1 bg-white rounded-lg shadow-sm py-2   flex flex-col items-center border border-black  cursor-pointer hover:bg-gray-50 transition-all duration-200"
            >
              <div className="text-[#22A0B7] mb-1 ">{nav.icon}</div>
              <p className="text-xs font-medium max-md:font-semibold max-md:text-sm">
                {nav.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Assets List */}
      {/* <div className="px-3 pb-4">
        <h3 className="font-semibold text-sm mb-2">My Assets</h3>

        <div className="space-y-2">
          {Asset.map((asset, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-5 flex items-center hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-8 h-8 relative mr-2">
                <img
                  src={asset.image}
                  alt={asset.name}
                  className="w-full h-full object-contain"
                />
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                  <img
                    src={lock}
                    alt="Locked"
                    className="w-2 h-2 object-contain"
                  />
                </div>
              </div>

              <div className="flex-1">
                <p className="font-medium text-xs">{asset.name}</p>
                <p className="text-gray-500 text-xs">{asset.othername}</p>
              </div>

              <div className="text-right ">
                <p className="font-normal text-xs flex justify-start">
                  {asset.amount}
                </p>
                <p className="text-gray-500 text-xs">
                  Total {asset.theOther} Balance
                </p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Overview;
