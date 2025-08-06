import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function OauthSuccess() {
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [search, navigate]);

  return (
    <div className="text-center mt-20">Signing you in, please wait...</div>
  );
}

export default OauthSuccess;
