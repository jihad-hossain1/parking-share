"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

const UserForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setusername] = useState("");

  const router = useRouter();

  const objData = {
    email,
    password,
    username,
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email == "") {
      return toast("email are required");
    } else if (password == "") {
      return toast("password must be needed");
    } else if (password?.length < 6) {
      return toast("password must be 6 character");
    }

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (!res?.ok) {
      // console.log(res);
      toast(res?.error);
    }
    if (res?.ok) {
      toast("LOGIN SUCCESSFULL");
      router.push("/");
    }
  };
  return (
    <>
      <div className=" items-center px-5 py-12 lg:px-20 shadow-md ">
        <div className="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0 border border-inherit">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">
              Sign in.
            </h2>
          </div>
          <div className="mt-8">
            <div className="mt-6">
              <form onSubmit={handleLogin} className="space-y-6">
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                      Create an Account?{" "}
                    </label>
                  </div>

                  <div className="text-sm ml-1">
                    <Link
                      href="/login/register"
                      className="font-medium text-blue-600 hover:text-blue-500"
                    >
                      {" "}
                      Sign up{" "}
                    </Link>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserForm;
