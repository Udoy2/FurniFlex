import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { icon } from "../assets";

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agreeToTerms) {
      signup({ firstName, lastName, email, password });
    } else {
      alert("Please agree to the terms.");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8 space-y-6 bg-[#FAFAFA]  ">
          <h2 className="text-center text-2xl font-bold">Welcome To</h2>
          <h1 className="text-center text-3xl font-bold text-black">
            Furni<span className="text-blue-500">Flex</span>
          </h1>
          <p className="text-center text-gray-600">
            Signup for purchase your desired products
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex space-x-4">
              <input
                className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="First name (optional)"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Last name (optional)"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="relative">
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i className="fas fa-eye absolute right-3 top-3 text-gray-500"></i>
            </div>
            <div className="flex items-center">
              <input
                className="mr-2"
                id="terms"
                type="checkbox"
                checked={agreeToTerms}
                onChange={() => setAgreeToTerms(!agreeToTerms)}
              />
              <label className="text-sm text-gray-600" htmlFor="terms">
                I agree to the{" "}
                <a href="#" className="text-blue-500">
                  Terms & Policy
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-black rounded-md"
            >
              Signup
            </button>
            <div className="flex items-center justify-center space-x-2">
              <hr className="w-full border-gray-300" />
              <span className="text-gray-500">or</span>
              <hr className="w-full border-gray-300" />
            </div>
            <div className="flex space-x-4">
              <button
                className="flex items-center justify-center w-full py-2 border rounded-md"
                type="button"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                  alt="Google logo"
                  className="w-5 h-5 mr-2"
                />
                Sign in with Google
              </button>
              <button
                className="flex items-center justify-center w-full py-2 border rounded-md"
                type="button"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=WWXOYwjdxZE8&format=png&color=000000"
                  alt="Apple logo"
                  className="w-5 h-5 mr-2"
                />
                Sign in with Apple
              </button>
            </div>
            <p className="text-center text-sm text-gray-600">
              Have an account?{" "}
              <Link to="/login" className="text-blue-500">
          Login
        </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center bg-black bg-cover bg-no-repeat bg-center bg-[url('/img/auth.png')]">
        <div className="text-center text-white">
          <div className="flex items-center justify-center mb-4">
            <img
              src={icon}
              alt="FurniFlex logo"
              className="w-12 h-12 bg-blue-500 rounded-full"
            />
          </div>
          <h1 className="text-3xl font-bold">
            Furni<span className="text-blue-500">Flex</span>
          </h1>
          <p className="mt-4 text-gray-400">
            Discover a seamless shopping experience with our curated collection
            of products. From fashion to electronics, we bring quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
