import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import InputField from "../Component/Inputfield";
import axios from "../config/axiosconfig";
import toast from "react-hot-toast";
import { isAxiosError } from "axios";
import { setToken, setUser } from "../Global/UserSlice"; // ✅ adjust this import path
import { setAdminToken } from "../Global/AdminSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userNameOrEmail, setuserNameOrEmail] = useState<string>(""); // renamed from detail
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const HandleLogin = async (e: FormEvent) => {
    e.preventDefault();

    if (!userNameOrEmail || !password) {
      toast.error("Email/Username and Password are required.");
      return;
    }

    setLoading(true);
    const toastLoadingId = toast.loading("Logging in...");

    try {
      const data = { userNameOrEmail: userNameOrEmail, password };
      const res = await axios.post("/user/login", data);

      setTimeout(() => {
        if (res.data.data.isAdmin) {
          dispatch(setAdminToken(res.data.data.token));
          navigate("/admin/adminhome");
        } else {
          dispatch(setUser(res.data.data));
          dispatch(setToken(res.data.token));
          //  localStorage.setItem("userId", userId);
          navigate("/user/overview");
        }
      }, 3000);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        const errorMsg =
          error.response?.data?.message || "An unexpected error occurred";
        toast.error(errorMsg);
        setError(errorMsg);
      } else {
        toast.error("Error occurred");
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
      toast.dismiss(toastLoadingId);
    }
  };

  return (
    <div className="w-full max-w-md px-6">
      <div className="bg-[#22A0B7] rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Sign In
        </h2>

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-100 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={HandleLogin}>
          <div className="mb-5">
            <InputField
              label="Email or Username"
              type="text"
              placeholder="Enter your email or username"
              value={userNameOrEmail}
              onChange={(value) => {
                setuserNameOrEmail(value);
                if (error) setError("");
              }}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-100 text-sm font-medium mb-2">
              Password
            </label>
            <InputField
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(value) => {
                setPassword(value);
                if (error) setError("");
              }}
              required
            />
          </div>

          <div className="flex justify-end mb-6">
            <button
              type="button"
              onClick={() => navigate("/auth/forget-pass")}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full h-12 rounded-md font-semibold text-[#22A0B7] bg-white hover:bg-gray-100 transition-all ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-100">
            Don’t have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/auth/register")}
              className="text-white font-semibold hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
