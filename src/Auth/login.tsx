/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../Component/Inputfield";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const url = `${import.meta.env.VITE_DEVE_URL}`;
  console.log(url);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const toastId = toast.loading("Please wait...");
    setLoading(true);
    setError("");

    const payload: Record<string, string> = { password };
    if (identifier.includes("@")) payload.email = identifier;
    else payload.userName = identifier;

    try {
      const response = await axios.post("/user/login", payload);
      const { token, data } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(data));

      if (data?.isAdmin) {
        navigate("/admin/allusers");
        toast.success("Login successful, Welcome Admin");
      } else {
        navigate("/user/overview");
        toast.success(`Welcome ${data?.fullName}`);
      }
    } catch (error: any) {
      console.error("Login error:", error);
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      toast.dismiss(toastId);
      setLoading(false);
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

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <InputField
              label="Email or Username"
              type="text"
              placeholder="Enter your email or username"
              value={identifier}
              onChange={(value) => {
                setIdentifier(value);
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
