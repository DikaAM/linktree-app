"use client";

import { useState } from "react";

export default function HeroForm() {
  function handleSubmit(evnt) {
    evnt.preventDefault();
    const form = evnt.target;
    const input = form.querySelector("input");
    const username = input.value;
    console.log(username);
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
