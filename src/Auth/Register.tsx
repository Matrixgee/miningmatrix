/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../Component/Inputfield";
// import axios from "../config/axiosconfig";
import toast from "react-hot-toast";
import axios from "axios";

interface Country {
  country: string;
  code: string;
}

interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  country: string;
}

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState<Country[]>([]);
  const [formData, setFormData] = useState<RegisterFormData>({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    country: "",
  });
  const [errors, setErrors] = useState<Partial<RegisterFormData>>({});

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries"
        );
        const data = await response.json();
        const sortedCountries = data.data.sort((a: Country, b: Country) =>
          a.country.localeCompare(b.country)
        );
        setCountries(sortedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setCountries([
          { country: "United States", code: "US" },
          { country: "United Kingdom", code: "GB" },
          { country: "Canada", code: "CA" },
          { country: "Australia", code: "AU" },
          { country: "Nigeria", code: "NG" },
          { country: "Ghana", code: "GH" },
          { country: "Kenya", code: "KE" },
        ]);
      }
    };
    fetchCountries();
  }, []);

  const handleChange = (field: keyof RegisterFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<RegisterFormData> = {};
    let valid = true;

    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        newErrors[key as keyof RegisterFormData] = "This field is required";
        valid = false;
      }
    });

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
      valid = false;
    }

    if (formData.password && formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      valid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const toastId = toast.loading("Please wait...");

    const {
      firstName,
      lastName,
      email,
      userName,
      password,
      confirmPassword,
      phoneNumber,
      country,
    } = formData;

    const payload = {
      fullName: `${firstName} ${lastName}`,
      email,
      userName,
      password,
      confirmPassword,
      phone: phoneNumber,
      country,
    };

    try {
      const res = await axios.post("/user/signup", payload);

      console.log(res);

      toast.success("Account created successfully!");
      navigate("/auth/login");
    } catch (err: any) {
      console.error("Registration Error:", err);
      toast.error(err.response?.data?.message || "Registration failed");
    } finally {
      toast.dismiss(toastId);
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl px-2">
      <div className="bg-[#22A0B7] rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="First Name"
              type="text"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={(v) => handleChange("firstName", v)}
              required
              error={errors.firstName}
            />

            <InputField
              label="Last Name"
              type="text"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={(v) => handleChange("lastName", v)}
              required
              error={errors.lastName}
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

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Country
              </label>
              <select
                className="w-full h-12 px-4 py-2 rounded-md bg-transparent border border-white/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                value={formData.country}
                onChange={(e) => handleChange("country", e.target.value)}
                required
              >
                <option value="">Select your country</option>
                {countries.map((country) => (
                  <option
                    key={country.code || country.country}
                    value={country.country}
                    className="text-black"
                  >
                    {country.country}
                  </option>
                ))}
              </select>
              {errors.country && (
                <p className="mt-1 text-sm text-red-100">{errors.country}</p>
              )}
            </div>
            <div className="md:col-span-2">
              <InputField
                label="Phone Number"
                type="phone"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={(v) => handleChange("phoneNumber", v)}
                required
                error={errors.phoneNumber}
              />
            </div>

            <div className="md:col-span-2">
              <InputField
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(v) => handleChange("password", v)}
                required
                error={errors.password}
              />
            </div>

            <div className="md:col-span-2">
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
            <a
              href="#"
              onClick={() => navigate("/auth/login")}
              className="text-white font-medium hover:underline"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
