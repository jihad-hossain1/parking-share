"use client";

import { signIn } from "next-auth/react";
import UserForm from "@/components/userForm/UserForm";

const LoginPage = () => {
  return (
    <main className="max-w-screen-md p-4 pt-20">
      <h4>Login page</h4>
      <button onClick={() => signIn("google")} className="border px-3">
        Login by Google
      </button>
      <UserForm />
    </main>
  );
};

export default LoginPage;
