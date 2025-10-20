/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../Component/Inputfield";
import axios from "axios";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading("Resetting password...");
    setLoading(true);

    if (password !== confirmPassword) {
      toast.dismiss(toastId);
      toast.error("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      // Example: change this to match your backend API
      const response = await axios.post("/user/reset-password", { password });

      toast.success(response.data?.message || "Password reset successful!");
      navigate("/auth/login");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Password reset failed.");
    } finally {
      toast.dismiss(toastId);
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md px-6">
      <div className="bg-[#22A0B7] rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Reset Password
        </h2>

        <p className="text-sm text-gray-100 text-center mb-6">
          Enter your new password below.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <InputField
              label="New Password"
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(v) => setPassword(v)}
              required
            />
          </div>

          <div className="mb-8">
            <InputField
              label="Confirm Password"
              type="password"
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(v) => setConfirmPassword(v)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full h-12 rounded-md font-medium text-white bg-[#0a3d46] hover:bg-[#22A0B7] transition-colors ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <a
            href="#"
            onClick={() => navigate("/auth/login")}
            className="text-sm text-purple-200 hover:text-white"
          >
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
