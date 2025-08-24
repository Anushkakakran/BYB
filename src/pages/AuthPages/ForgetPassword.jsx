import React, { useState } from "react";
import Button from "../../Components/Button";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleGetOtp = () => {
    alert("OTP sent to " + email);
  };

  const handleVerifyOtp = () => {
    alert("OTP verified: " + otp);
  };

  const handleChangePassword = () => {
    alert("Password changed successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-sans">
      <div className="w-full max-w-md p-8 bg-white border border-gray-200 shadow-xl rounded-xl">
        {/* Title */}
        <h2 className="text-center text-2xl font-semibold text-black mb-8">
          Update Your Password
        </h2>

        {/* Email + Get OTP */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-5">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 border border-gray px-4 py-3 text-sm rounded-lg transition"
          />
          <Button
            text="Get OTP"
            onclick={handleGetOtp}
            className="w-full sm:w-auto px-5 py-3 text-sm font-medium rounded-lg bg-black text-white hover:bg-gray transition focus:outline-none focus:ring-0"
          />
        </div>

        {/* OTP + Verify */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-5">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="flex-1 border border-gray px-4 py-3 text-sm rounded-lg transition"
          />
          <Button
            text="Verify OTP"
            onclick={handleVerifyOtp}
            className="w-full sm:w-auto px-5 py-3 text-sm font-medium rounded-lg bg-black text-white hover:bg-gray transition focus:outline-none focus:ring-0"
          />
        </div>

        {/* New Password */}
        <div className="mb-6">
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full border border-gray px-4 py-3 text-sm rounded-lg transition"
          />
        </div>

        {/* Change Password */}
        <div>
          <Button
            text="Change Password"
            onclick={handleChangePassword}
            className="w-full py-3 text-sm font-medium rounded-lg bg-black text-white hover:bg-gray transition focus:outline-none focus:ring-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
