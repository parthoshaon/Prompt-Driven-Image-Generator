import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { pixelate } from "./assets";
import { Home, CreatePost } from "./page";

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img
          src={pixelate}
          alt="Pixelate Logo"
          className="w-28 object-contain"
        />
      </Link>

      <Link
        to="/create-post"
        className="bg-[#6469ff] text-white py-3 px-6 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300"
      >
        Generate Image
      </Link>
    </header>

    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
    <footer className="w-full bg-white py-4 sm:px-8 px-4 text-center text-gray-500 text-sm border-t border-t-[#e6ebf4]">
      Developed by Partho Shaon |{" "}
      <a
        href="https://github.com/parthoshaon/Prompt-Driven-Image-Generator"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#6469ff]"
      >
        View Source Code
      </a>
    </footer>
  </BrowserRouter>
);

export default App;
