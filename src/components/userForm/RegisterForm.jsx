"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import axios from "axios";
import { signIn } from "next-auth/react";

const RegisterForm = () => {
  const [fullname, setfullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setusername] = useState("");

  const myObj = {
    fullname,
    email,
    password,
    username,
  };
  const handleRegister = async () => {
    try {
      await axios.post(`/api/v1/users`, { ...myObj });

      toast("Your Account has created Successfull", {
        description:
          "Go to Login page and login your account with email or username & password",
        action: {
          label: "Login",
          onClick: () => console.log("login"),
        },
      });

      setEmail("");
      setPassword("");
      setusername("");
      setfullname("");
    } catch (error) {
      console.log(error?.response?.data?.message);
      return toast(
        error?.response?.data?.message || error?.response?.data?.error
      );
    }
  };
  return (
    <section className="">
      <div className=" items-center px-5 py-12 lg:px-20 shadow-md ">
        <div className="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0 border border-inherit">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">
              Sign up.
            </h2>
          </div>
          <div className="mt-8">
            <div className="mt-6">
              <form onSubmit={handleRegister} className="space-y-6">
                <div>
                  <label
                    htmlFor="Name"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Your Name{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      value={fullname}
                      id=""
                      name=""
                      type="text"
                      required=""
                      placeholder="Your Name"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      onChange={(e) => setfullname(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="Name"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    User Name{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id=""
                      name=""
                      type="text"
                      onChange={(e) => setusername(e.target.value)}
                      required=""
                      value={username}
                      placeholder="Your User Name"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      name=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id=""
                      autoComplete="email"
                      required=""
                      placeholder="Your Email"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Password{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      name=""
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id=""
                      type="password"
                      autoComplete="current-password"
                      required=""
                      placeholder="Your Password"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-start">
                  <div className="flex items-center">
                    <label
                      htmlFor="remember-me"
                      className="block ml-2 text-sm text-neutral-600"
                    >
                      {" "}
                      Already have an account?{" "}
                    </label>
                  </div>

                  <div className="text-sm ml-1">
                    <Link
                      href="/login"
                      className="font-medium text-blue-600 hover:text-blue-500"
                    >
                      {" "}
                      Sign in{" "}
                    </Link>
                  </div>
                </div>
                {/* <p className="text-red-500">{error}</p> */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 text-neutral-600 bg-white">
                    {" "}
                    Or continue with{" "}
                  </span>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  onClick={() => signIn("google")}
                  className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <div className="flex items-center justify-center">
                    <span className="ml-4"> Log in with Google</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
