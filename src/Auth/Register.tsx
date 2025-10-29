import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../Component/Inputfield";
import axios from "../config/axiosconfig";
import toast from "react-hot-toast";
import { isAxiosError } from "axios";

interface RegisterFormData {
  fullName: string;
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<RegisterFormData>({
    fullName: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Partial<RegisterFormData>>({});
  const [loading, setLoading] = useState<boolean>(false);

  // handle change for inputs
  const handleChange = (field: keyof RegisterFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();

    const { fullName, email, userName, password, confirmPassword } = formData;

    // Password validation
    const passwordRegex =
      /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/;
    const isValidPassword = passwordRegex.test(password);

    if (!fullName || !email || !userName || !password || !confirmPassword) {
      toast.error("Please fill all the fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!isValidPassword) {
      toast.error("Password must contain at least one special character");
      return;
    }

    const toastLoadingId = toast.loading("Please wait...");
    try {
      setLoading(true);
      const response = await axios.post("/user/signup", formData);
      toast.success(response.data.message || "Registration successful!");
      setFormData({
        fullName: "",
        email: "",
        userName: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/review");
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        const errorMsg =
          error.response?.data?.error ||
          error.response?.data?.message ||
          "An unexpected error occurred";
        toast.error(errorMsg, { duration: 3000 });
      } else {
        toast.error("Error occurred");
      }
    } finally {
      setLoading(false);
      toast.dismiss(toastLoadingId);
    }
  };

  return (
    <div className="w-full max-w-2xl px-2">
      <div className="bg-[#22A0B7] rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Create Your Account
        </h2>

        <form onSubmit={handleRegister}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(v) => handleChange("fullName", v)}
              required
              error={errors.fullName}
            />

            <InputField
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(v) => handleChange("email", v)}
              required
              error={errors.email}
            />

            <InputField
              label="Username"
              type="text"
              placeholder="Enter your username"
              value={formData.userName}
              onChange={(v) => handleChange("userName", v)}
              required
              error={errors.userName}
            />

            <InputField
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(v) => handleChange("password", v)}
              required
              error={errors.password}
            />

            <InputField
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(v) => handleChange("confirmPassword", v)}
              required
              error={errors.confirmPassword}
            />
          </div>

          <div className="mt-6">
            <label className="flex items-start">
              <input
                type="checkbox"
                className="mt-1 mr-2 h-4 w-4 rounded border-gray-300 text-[#0a3d46] focus:ring-[#0a3d46]"
                required
              />
              <span className="text-sm text-gray-200">
                By creating an account, you agree to our{" "}
                <a href="#" className="text-white font-medium hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-white font-medium hover:underline">
                  Privacy Policy
                </a>
                .
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full h-12 mt-8 rounded-md font-semibold text-white bg-[#0a3d46] hover:bg-[#22A0B7] transition-all ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-200">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/auth/login")}
              className="text-white font-medium hover:underline"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
