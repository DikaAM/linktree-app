"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function HeroForm() {
  async function handleSubmit(evnt) {
    evnt.preventDefault();
    const form = evnt.target;
    const input = form.querySelector("input");
    const username = input.value;
    console.log(username);
    if (username.length > 0) {
      window.localStorage.setItem("desiredUsername", username);
      await signIn("google");
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="inline-flex items-center shadow-lg shadow-gray-700/20"
    >
      <span className="bg-white py-4 pl-4">LinkList.to/</span>
      <input type="text" className="py-4" placeholder="Username" />
      <button type="submit" className="bg-blue-500 text-white py-4 px-6">
        Join for Free
      </button>
    </form>
  );
}
