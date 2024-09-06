import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { icon } from "../assets";

const Login = () => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email,password)
    };

    return (

        <div className="flex h-screen">
            <div className="w-1/2 flex items-center justify-center bg-white">
                <div className="w-full max-w-md p-8 space-y-6 bg-[#FAFAFA] border border-slate-800/20">
                    <h2 className="text-2xl font-semibold text-gray-800">Welcome Back!</h2>
                    <span className=" text-gray-600" >Enter your Credentials to access your account</span>
                    <form className="mt-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-gray-700">Email address</label>
                            <input
                                type="email"
                                className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mt-4 relative">
                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <i className="fas fa-eye absolute right-3 top-3 text-gray-500 cursor-pointer"></i>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            
                            <a href="#" className="text-blue-500">
                                Forgot Password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full mt-4 bg-black text-white py-2 rounded-lg"
                        >
                            Sign In
                        </button>
                    </form>
                    <div className="flex items-center justify-between mt-4">
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                        <span className="text-xs text-center text-gray-500 uppercase">or</span>
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div>
                    <div className="flex mt-4">
                        <button className="w-1/2 flex items-center justify-center py-2 border rounded-lg mr-2">
                            <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="Google logo" className="w-5 h-5 mr-2" />
                            Sign in with Google
                        </button>
                        <button className="w-1/2 flex items-center justify-center py-2 border rounded-lg ml-2">
                            <img src="https://img.icons8.com/?size=100&id=WWXOYwjdxZE8&format=png&color=000000" alt="Apple logo" className="w-5 h-5 mr-2" />
                            Sign in with Apple
                        </button>
                    </div>
                    <p className="mt-4 text-center text-gray-600">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-blue-500">
                            Signup
                        </Link>
                    </p>
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

export default Login;
