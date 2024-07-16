"use client";
import { signIn } from "next-auth/react";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function LoginWithGoogle() {
  return (
    <button
      onClick={() => signIn("google")}
      className="bg-white shadow text-center w-full py-4 flex gap-3 items-center justify-center"
    >
      <FontAwesomeIcon icon={faGoogle} className="" />
      <span>Sign In with Google</span>
    </button>
  );
}
