"use client";

import { useUserAuth } from "../contexts/AuthContext";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

      {!user ? (
        <>
          <h1 className="text-3xl font-bold mb-6">Welcome</h1>

          <button
            onClick={handleSignIn}
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Sign in with GitHub
          </button>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">
            Welcome, {user.displayName}
          </h1>

          <p className="mb-4">{user.email}</p>

          <Link
            href="/week-9/shopping-list"
            className="bg-green-500 text-white px-6 py-2 rounded-lg mb-3"
          >
            Go to Shopping List
          </Link>

          <button
            onClick={handleSignOut}
            className="bg-red-500 text-white px-6 py-2 rounded-lg"
          >
            Logout
          </button>
        </>
      )}
    </main>
  );
}