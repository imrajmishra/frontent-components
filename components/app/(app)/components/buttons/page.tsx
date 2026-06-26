"use client";

import React, { useState, useRef } from "react";
import { Gem } from "lucide-react";
import CodeBox from "@/components/CodeBox/CodeBox";
import { ArrowUpRight, Code2 } from "lucide-react";
import {
  codeBlocks1,
  codeBlocks2,
  codeBlocks3,
  codeBlocks4,
  codeBlocks5,
  codeBlocks6,
  codeBlocks7,
} from "@/components/CodeBox/codeBlocks";


export default function Button({
}) {
   
   const [selectedCode, setSelectedCode] = useState("");
   const [showCodeBox, setShowCodeBox] = useState(false);
   const [coords, setCoords] = useState({
     x: 0,
     y: 0,
   });

   const buttonRef = useRef<HTMLButtonElement>(null);

   const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
     const rect = buttonRef.current?.getBoundingClientRect();

     if (!rect) return;

     setCoords({
       x: e.clientX - rect.left,
       y: e.clientY - rect.top,
     });
   };

   const socials = [
     {
       name: "Google",
       icon: "https://images.shadcnspace.com/assets/svgs/icon-google.svg",
     },
     {
       name: "GitHub",
       icon: "https://images.shadcnspace.com/assets/svgs/icon-github-white.svg",
     },
     {
       name: "LinkedIn",
       icon: "https://images.shadcnspace.com/assets/svgs/icon-linkedin.svg",
     },
     {
       name: "Facebook",
       icon: "https://images.shadcnspace.com/assets/svgs/icon-facebook.svg",
     },
   ];

  return (
    <>
      <div className="max-w-full items-center justify-center bg-gray-50 dark:bg-neutral-950">
        {/* Buttom line 1 */}
        <div className="gap-2 flex flex-2/3 ml-20 mr-20 justify-between">
          {/* Buttom 1 */}
          <div className="rounded-xl w-100 h-100 mt-40 border border-solid border-white/30 bg-white p-1  shadow-input dark:bg-black md:rounded-2xl">
            <div className="rounded-xl justify-center mt-1 ml-88 items-end content-end w-8 h-8 border border-solid border-white/30 ">
              <div>
                <button
                  className="mt-1 ml-0.5 cursor-pointer"
                  onClick={() => {
                    setSelectedCode(codeBlocks1.button1);
                    setShowCodeBox(true);
                  }}
                >
                  <Code2 className="hover:scale-105" />
                </button>
                {showCodeBox && (
                  <CodeBox
                    code={selectedCode}
                    onClose={() => setShowCodeBox(false)}
                  />
                )}
              </div>
            </div>
            <div className="rounded-xl w-fit border border-solid border-white/30 bg-white p-1 mt-40 ml-38 shadow-input justify-center items-center dark:bg-black md:rounded-2xl">
              <button
                className="group cursor-pointer relative block h-10 w-20 rounded-full bg-linear-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] transition-all hover:opacity-90 dark:bg-zinc-800 dark:from-blue-600 dark:to-blue-800 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Login
              </button>
            </div>
          </div>

          {/* Button 2 */}
          <div className="rounded-xl w-100 h-100 mt-40 border border-solid border-white/30 shadow-input dark:bg-black">
            <div className="rounded-xl justify-center mt-2 ml-88 items-end content-end w-8 h-8 border border-solid border-white/30 ">
              <div>
                <button
                  className="mt-1 ml-0.5 cursor-pointer"
                  onClick={() => {
                    setSelectedCode(codeBlocks1.button2);
                    setShowCodeBox(true);
                  }}
                >
                  <Code2 className="hover:scale-105" />
                </button>

                {showCodeBox && (
                  <CodeBox
                    code={codeBlocks1.button2}
                    onClose={() => setShowCodeBox(false)}
                  />
                )}
              </div>
            </div>
            <div className="rounded-2xl tracking-wider text-xs mt-45 ml-40  justify-center items-center dark:bg-black ">
              <button
                className="relative w-15 h-8 z-10 rounded-xl  bg-blue-600 hover:bg-blue-800 shadow-none cursor-pointer"
                type="submit"
              >
                SignUp
              </button>
            </div>
          </div>

          {/* Buttom 3 */}
          <div className="rounded-xl w-100 h-100 mt-40 border border-solid border-white/30 bg-white p-1  shadow-input dark:bg-black md:rounded-2xl">
            <div className="rounded-xl justify-center mt-1 ml-88 items-end content-end w-8 h-8 border border-solid border-white/30 ">
              <div>
                <button
                  className="mt-1 ml-0.5 cursor-pointer"
                  onClick={() => {
                    setSelectedCode(codeBlocks1.button3);
                    setShowCodeBox(true);
                  }}
                >
                  <Code2 className="hover:scale-105" />
                </button>

                {showCodeBox && (
                  <CodeBox
                    code={selectedCode}
                    onClose={() => setShowCodeBox(false)}
                  />
                )}
              </div>
            </div>
            <div className="rounded-xl w-fit bg-white p-1 mt-40 ml-38 shadow-input justify-center items-center dark:bg-black md:rounded-2xl">
              <button
                className="h-10 w-24 rounded-xl bg-green-600 text-white font-medium shadow-md transition-all duration-300 hover:bg-green-700 hover:-translate-y-1 cursor-pointer"
                type="submit"
              >
                Success
              </button>
            </div>
          </div>
        </div>

        {/* Buttom line 2 */}
        <div className="gap-2 flex flex-2/3 ml-20 mr-20 justify-between">
          {/* Buttom 1 */}
          <div className="rounded-xl w-100 h-100 mt-40 border border-solid border-white/30 bg-white p-1  shadow-input dark:bg-black md:rounded-2xl">
            <div className="rounded-xl justify-center mt-1 ml-88 items-end content-end w-8 h-8 border border-solid border-white/30 ">
              <div>
                <button
                  className="mt-1 ml-0.5 cursor-pointer"
                  onClick={() => {
                    setSelectedCode(codeBlocks2.button1);
                    setShowCodeBox(true);
                  }}
                >
                  <Code2 className="hover:scale-105" />
                </button>

                {showCodeBox && (
                  <CodeBox
                    code={selectedCode}
                    onClose={() => setShowCodeBox(false)}
                  />
                )}
              </div>
            </div>
            <div className="rounded-xl  border-white/30 bg-white p-1 mt-40 ml-36 shadow-input justify-center items-center dark:bg-black md:rounded-2xl">
              <button className="rounded-xl border border-cyan-400 px-6 py-3 font-semibold text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,.6)] transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_rgba(34,211,238,1)] cursor-pointer">
                ⚡ Neon
              </button>
            </div>
          </div>

          {/* Button 2 */}
          <div className="rounded-xl w-100 h-100 mt-40 border border-solid border-white/30 bg-white p-1    shadow-input dark:bg-black md:rounded-2xl">
            <div className="rounded-xl justify-center mt-1 ml-88 items-end content-end w-8 h-8 border border-solid border-white/30 ">
              <div>
                <button
                  className="mt-1 ml-0.5 cursor-pointer"
                  onClick={() => {
                    setSelectedCode(codeBlocks2.button2);
                    setShowCodeBox(true);
                  }}
                >
                  <Code2 className="hover:scale-105" />
                </button>

                {showCodeBox && (
                  <CodeBox
                    code={selectedCode}
                    onClose={() => setShowCodeBox(false)}
                  />
                )}
              </div>
            </div>
            <div className="rounded-xl w-fit bg-white p-1 mt-40 ml-30 shadow-input justify-center items-center dark:bg-black md:rounded-2xl">
              <button className="rounded-xl border border-zinc-700 bg-linear-to-b from-zinc-800 to-black px-6 py-3 font-semibold text-white shadow-xl transition-all duration-300 cursor-pointer hover:border-zinc-500 hover:shadow-2xl">
                💎 Premium
              </button>
            </div>
          </div>

          {/* Buttom 3 */}
          <div className="rounded-xl w-100 h-100 mt-40 border border-solid border-white/30 bg-white p-1  shadow-input dark:bg-black md:rounded-2xl">
            <div className="rounded-xl justify-center mt-1 ml-88 items-end content-end w-8 h-8 border border-solid border-white/30 ">
              <div>
                <button
                  className="mt-1 ml-0.5 cursor-pointer"
                  onClick={() => {
                    setSelectedCode(codeBlocks2.button3);
                    setShowCodeBox(true);
                  }}
                >
                  <Code2 className="hover:scale-105" />
                </button>

                {showCodeBox && (
                  <CodeBox
                    code={selectedCode}
                    onClose={() => setShowCodeBox(false)}
                  />
                )}
              </div>
            </div>
            <div className="rounded-xl w-fit bg-white p-1 mt-40 ml-32 shadow-input justify-center items-center dark:bg-black md:rounded-2xl">
              <button className="group relative overflow-hidden rounded-xl border-2 border-blue-600 cursor-pointer px-6 py-3 font-semibold text-blue-600 transition-all duration-300">
                <span className="absolute inset-0 -translate-x-full bg-blue-600 transition-transform duration-300 group-hover:translate-x-0" />
                <span className="relative group-hover:text-white">
                  📄 Explore
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Buttom line 3 */}

        <div className="gap-2 flex flex-2/3 ml-20 mb-20 mr-20 justify-between">
          {/* Buttom 1 */}
          <div className="rounded-xl w-100 h-100 mt-40 border border-solid border-white/30 bg-white p-1  shadow-input dark:bg-black md:rounded-2xl">
            <div className="rounded-xl justify-center mt-1 ml-88 items-end content-end w-8 h-8 border border-solid border-white/30 ">
              <div>
                <button
                  className="mt-1 ml-0.5 cursor-pointer"
                  onClick={() => {
                    setSelectedCode(codeBlocks3.button1);
                    setShowCodeBox(true);
                  }}
                >
                  <Code2 className="hover:scale-105" />
                </button>

                {showCodeBox && (
                  <CodeBox
                    code={selectedCode}
                    onClose={() => setShowCodeBox(false)}
                  />
                )}
              </div>
            </div>
            <div className="rounded-xl w-fit bg-white p-1 mt-40 ml-35 shadow-input justify-center items-center dark:bg-black md:rounded-2xl">
              <button className="rounded-xl cursor-pointer border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20">
                ✨ Glass
              </button>
            </div>
          </div>

          {/* Button 2 */}
          <div className="rounded-xl w-100 h-100 mt-40 border border-solid border-white/30 bg-white p-1    shadow-input dark:bg-black md:rounded-2xl">
            <div className="rounded-xl justify-center mt-1 ml-88 items-end content-end w-8 h-8 border border-solid border-white/30 ">
              <div>
                <button
                  className="mt-1 ml-0.5 cursor-pointer"
                  onClick={() => {
                    setSelectedCode(codeBlocks3.button2);
                    setShowCodeBox(true);
                  }}
                >
                  <Code2 className="hover:scale-105" />
                </button>

                {showCodeBox && (
                  <CodeBox
                    code={selectedCode}
                    onClose={() => setShowCodeBox(false)}
                  />
                )}
              </div>
            </div>
            <div className="rounded-xl w-fit bg-white p-1 mt-40 ml-35 shadow-input justify-center items-center dark:bg-black md:rounded-2xl">
              <button className="rounded-xl bg-linear-to-r from-violet-600 via-purple-600 to-pink-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-purple-500/50">
                🚀 Launch
              </button>
            </div>
          </div>

          {/* Buttom 3 */}
          <div className="rounded-xl w-100 h-100 mt-40 border border-solid border-white/30 bg-white p-1  shadow-input dark:bg-black md:rounded-2xl">
            <div className="rounded-xl justify-center mt-1 ml-88 items-end content-end w-8 h-8 border border-solid border-white/30 ">
              <div>
                <button
                  className="mt-1 ml-0.5 cursor-pointer"
                  onClick={() => {
                    setSelectedCode(codeBlocks3.button3);
                    setShowCodeBox(true);
                  }}
                >
                  <Code2 className="hover:scale-105" />
                </button>

                {showCodeBox && (
                  <CodeBox
                    code={selectedCode}
                    onClose={() => setShowCodeBox(false)}
                  />
                )}
              </div>
            </div>
            <div className="rounded-xl w-fit  bg-white p-1 mt-40 ml-35 shadow-input justify-center items-center dark:bg-black md:rounded-2xl">
              <button
                className="h-10 w-24 rounded-xl border-2 border-blue-600 text-blue-600 font-medium transition-all duration-300 hover:bg-blue-600 cursor-pointer hover:text-white"
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </div>

        {/* Buttom line 4 */}
        <div className="gap-2 flex flex-2/3 ml-20 mb-20 mr-20 justify-between">
          {/* Buttom 1 */}
          <div className="rounded-xl w-100 h-100 mt-30 border border-solid border-white/30 bg-white p-1  shadow-input dark:bg-black md:rounded-2xl">
            <div className="rounded-xl justify-center mt-1 ml-88 items-end content-end w-8 h-8 border border-solid border-white/30 ">
              <div>
                <button
                  className="mt-1 ml-0.5 cursor-pointer"
                  onClick={() => {
                    setSelectedCode(codeBlocks4.button1);
                    setShowCodeBox(true);
                  }}
                >
                  <Code2 className="hover:scale-105" />
                </button>

                {showCodeBox && (
                  <CodeBox
                    code={selectedCode}
                    onClose={() => setShowCodeBox(false)}
                  />
                )}
              </div>
            </div>
            <div className="rounded-xl w-fit bg-white p-1 mt-40 ml-32 shadow-input justify-center items-center dark:bg-black md:rounded-2xl">
              <button className="rounded-xl cursor-pointer border border-purple-500 bg-purple-500/10 px-6 py-3 font-semibold text-purple-400 transition-all duration-300 hover:bg-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/40">
                Magnetic
              </button>
            </div>
          </div>

          {/* Button 2 */}
          <div className="rounded-xl w-100 h-100 mt-30 border border-solid border-white/30 bg-black p-1   shadow-input md:rounded-2xl">
            <div className="rounded-xl justify-center mt-1 ml-88 items-end content-end w-8 h-8 border border-solid border-white/30 ">
              <div>
                <button
                  className="mt-1 ml-0.5 cursor-pointer"
                  onClick={() => {
                    setSelectedCode(codeBlocks4.button2);
                    setShowCodeBox(true);
                  }}
                >
                  <Code2 className="hover:scale-105" />
                </button>

                {showCodeBox && (
                  <CodeBox
                    code={selectedCode}
                    onClose={() => setShowCodeBox(false)}
                  />
                )}
              </div>
            </div>
            <div className="rounded-xl w-fit mt-40 ml-35 shadow-input justify-center items-center dark:bg-black md:rounded-2xl">
              <button className="group bg-white relative inline-flex items-center gap-2 overflow-hidden rounded-xl hover:scale-105 p-[1.5px] cursor-pointer">
                {/* Animated Border */}
                <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,#3b82f6_0deg,#3b82f6_60deg,transparent_120deg)]" />

                {/* Content */}
                <span className="relative z-10 inline-flex items-center gap-2 rounded-[11px] bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 group-hover:bg-zinc-950">
                  <Gem className="h-4 w-4" />
                  Get Pro
                </span>
              </button>
            </div>
          </div>

          {/* Buttom 3 */}
          <div className="rounded-xl w-100 h-100 mt-30 border border-solid border-white/30 bg-white p-1  shadow-input dark:bg-black md:rounded-2xl">
            <div className="rounded-xl justify-center mt-1 ml-88 items-end content-end w-8 h-8 border border-solid border-white/30 ">
              <div>
                <button
                  className="mt-1 ml-0.5 cursor-pointer"
                  onClick={() => {
                    setSelectedCode(codeBlocks4.button3);
                    setShowCodeBox(true);
                  }}
                >
                  <Code2 className="hover:scale-105" />
                </button>

                {showCodeBox && (
                  <CodeBox
                    code={codeBlocks4.button3}
                    onClose={() => setShowCodeBox(false)}
                  />
                )}
              </div>
            </div>
            <div className="rounded-xl w-fit bg-white p-1 mt-40 ml-25 shadow-input justify-center items-center dark:bg-black md:rounded-2xl">
              <button className="group cursor-pointer relative flex h-14 items-center overflow-hidden rounded-full bg-linear-to-r from-blue-600 via-violet-600 to-purple-600 px-7 pr-16 text-sm font-semibold text-white transition-all duration-500 hover:pl-16 hover:pr-7">
                <span className="relative z-10 tracking-wide">
                  Let's Collaborate
                </span>

                <span className="absolute right-1 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg transition-all duration-500 group-hover:right-[calc(100%-52px)] group-hover:rotate-45">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Buttom line 5 */}
        <div className="gap-2 flex flex-2/3 ml-20 mb-20 mr-20 justify-between">
          {/* Buttom 1 */}
          <div className="rounded-xl w-100 h-100 mt-30 border border-solid border-white/30 bg-white p-1  shadow-input dark:bg-black md:rounded-2xl">
            <div className="rounded-xl justify-center mt-1 ml-88 items-end content-end w-8 h-8 border border-solid border-white/30 ">
              <div>
                <button
                  className="mt-1 ml-0.5 cursor-pointer"
                  onClick={() => {
                    setSelectedCode(codeBlocks5.button1);
                    setShowCodeBox(true);
                  }}
                >
                  <Code2 className="hover:scale-105" />
                </button>

                {showCodeBox && (
                  <CodeBox
                    code={selectedCode}
                    onClose={() => setShowCodeBox(false)}
                  />
                )}
              </div>
            </div>
            <div className="rounded-xl w-fit bg-white p-1 mt-40 ml-32 shadow-input justify-center items-center dark:bg-black md:rounded-2xl">
              <button
                ref={buttonRef}
                onMouseEnter={handleMouseEnter}
                className="group cursor-pointer relative overflow-hidden rounded-full border border-white/10 bg-zinc-950 px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
              >
                <span
                  className="absolute h-12 w-12 scale-0 rounded-full bg-linear-to-r from-blue-500 to-cyan-400 transition-transform duration-700 ease-out group-hover:scale-[18]"
                  style={{
                    left: coords.x - 24,
                    top: coords.y - 24,
                  }}
                />

                <span className="relative z-10">Get Started</span>
              </button>
            </div>
          </div>

          {/* Button 2 */}
          <div className="rounded-xl w-100 h-100 mt-30 border border-solid border-white/30 bg-black p-1   shadow-input md:rounded-2xl">
            <div className="rounded-xl justify-center mt-1 ml-88 items-end content-end w-8 h-8 border border-solid border-white/30 ">
              <div>
                <button
                  className="mt-1 ml-0.5 cursor-pointer"
                  onClick={() => {
                    setSelectedCode(codeBlocks5.button2);
                    setShowCodeBox(true);
                  }}
                >
                  <Code2 className="hover:scale-105" />
                </button>

                {showCodeBox && (
                  <CodeBox
                    code={selectedCode}
                    onClose={() => setShowCodeBox(false)}
                  />
                )}
              </div>
            </div>
            <div className="rounded-xl w-fit mt-40 ml-25 shadow-input justify-center items-center dark:bg-black md:rounded-2xl">
              <div className="flex flex-wrap items-center justify-center gap-4">
                {/* Google */}
                <button
                  type="button"
                  className="flex cursor-pointer items-center gap-3 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-700 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
                >
                  <img
                    src="https://images.shadcnspace.com/assets/svgs/icon-google.svg"
                    alt="Google"
                    className="h-5 w-5"
                  />
                  Sign in with Google
                </button>
              </div>
            </div>
          </div>

          {/* Buttom 3 */}
          <div className="rounded-xl w-100 h-100 mt-30 border border-solid border-white/30 bg-white p-1  shadow-input dark:bg-black md:rounded-2xl">
            <div className="rounded-xl justify-center mt-1 ml-88 items-end content-end w-8 h-8 border border-solid border-white/30 ">
              <div>
                <button
                  className="mt-1 ml-0.5 cursor-pointer"
                  onClick={() => {
                    setSelectedCode(codeBlocks5.button3);
                    setShowCodeBox(true);
                  }}
                >
                  <Code2 className="hover:scale-105" />
                </button>

                {showCodeBox && (
                  <CodeBox
                    code={selectedCode}
                    onClose={() => setShowCodeBox(false)}
                  />
                )}
              </div>
            </div>
            <div className="rounded-xl w-fit bg-white p-1 mt-40 ml-25 shadow-input justify-center items-center dark:bg-black md:rounded-2xl">
              <div className="flex flex-wrap items-center justify-center gap-4">
                {/* GitHub */}
                <button
                  type="button"
                  className="flex cursor-pointer items-center gap-3 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-700 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
                >
                  <img
                    src="https://images.shadcnspace.com/assets/svgs/icon-github.svg"
                    alt="GitHub"
                    className="h-5 w-5 dark:hidden"
                  />
                  <img
                    src="https://images.shadcnspace.com/assets/svgs/icon-github-white.svg"
                    alt="GitHub"
                    className="hidden h-5 w-5 dark:block"
                  />
                  Sign in with GitHub
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Buttom line 6 */}
        <div className="gap-2 flex flex-2/3 ml-20 mb-20 mr-20 justify-between">
          {/* Buttom 1 */}
          <div className="rounded-xl w-100 h-100 mt-30 border border-solid border-white/30 bg-white p-1  shadow-input dark:bg-black md:rounded-2xl">
            <div className="rounded-xl justify-center mt-1 ml-88 items-end content-end w-8 h-8 border border-solid border-white/30 ">
              <div>
                <button
                  className="mt-1 ml-0.5 cursor-pointer"
                  onClick={() => {
                    setSelectedCode(codeBlocks6.button1);
                    setShowCodeBox(true);
                  }}
                >
                  <Code2 className="hover:scale-105" />
                </button>

                {showCodeBox && (
                  <CodeBox
                    code={selectedCode}
                    onClose={() => setShowCodeBox(false)}
                  />
                )}
              </div>
            </div>
            <div className="rounded-xl w-fit bg-white p-1 mt-40 ml-22 shadow-input justify-center items-center dark:bg-black md:rounded-2xl">
              <div className="flex flex-wrap items-center justify-center gap-4">
                {/* LinkedIn */}
                <button
                  type="button"
                  className="flex items-center cursor-pointer gap-3 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-700 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
                >
                  <img
                    src="https://images.shadcnspace.com/assets/svgs/icon-linkedin.svg"
                    alt="LinkedIn"
                    className="h-5 w-5"
                  />
                  Continue with LinkedIn
                </button>
              </div>
            </div>
          </div>

          {/* Button 2 */}
          <div className="rounded-xl w-100 h-100 mt-30 border border-solid border-white/30 bg-black p-1   shadow-input md:rounded-2xl">
            <div className="rounded-xl justify-center mt-1 ml-88 items-end content-end w-8 h-8 border border-solid border-white/30 ">
              <div>
                <button
                  className="mt-1 ml-0.5 cursor-pointer"
                  onClick={() => {
                    setSelectedCode(codeBlocks6.button2);
                    setShowCodeBox(true);
                  }}
                >
                  <Code2 className="hover:scale-105" />
                </button>

                {showCodeBox && (
                  <CodeBox
                    code={selectedCode}
                    onClose={() => setShowCodeBox(false)}
                  />
                )}
              </div>
            </div>
            <div className="rounded-xl w-fit mt-40 ml-25 shadow-input justify-center items-center dark:bg-black md:rounded-2xl">
              <div className="flex flex-wrap gap-4">
                <button className="group cursor-pointer flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950 px-6 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_10px_30px_rgba(239,68,68,0.25)]">
                  <img
                    src="https://images.shadcnspace.com/assets/svgs/icon-google.svg"
                    alt=""
                    className="h-5 w-5"
                  />
                  <span>Google</span>
                </button>
              </div>
            </div>
          </div>

          {/* Buttom 3 */}
          <div className="rounded-xl w-100 h-100 mt-30 border border-solid border-white/30 bg-white p-1  shadow-input dark:bg-black md:rounded-2xl">
            <div className="rounded-xl justify-center mt-1 ml-88 items-end content-end w-8 h-8 border border-solid border-white/30 ">
              <div>
                <button
                  className="mt-1 ml-0.5 cursor-pointer"
                  onClick={() => {
                    setSelectedCode(codeBlocks6.button3);
                    setShowCodeBox(true);
                  }}
                >
                  <Code2 className="hover:scale-105" />
                </button>

                {showCodeBox && (
                  <CodeBox
                    code={selectedCode}
                    onClose={() => setShowCodeBox(false)}
                  />
                )}
              </div>
            </div>
            <div className="rounded-xl w-fit bg-white p-1 mt-40 ml-30 shadow-input justify-center items-center dark:bg-black md:rounded-2xl">
              <div className="flex flex-wrap items-center justify-center gap-4">
                {/* GitHub */}
                <button className="group cursor-pointer flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950 px-6 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_10px_30px_rgba(59,130,246,0.25)]">
                  <img
                    src="https://images.shadcnspace.com/assets/svgs/icon-linkedin.svg"
                    alt=""
                    className="h-5 w-5"
                  />
                  <span>LinkedIn</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Buttom line 7 */}
        <div className="gap-2 flex flex-2/3 ml-20 mb-20 mr-20 justify-between">
          {/* Buttom 1 */}
          <div className="rounded-xl w-100 h-100 mt-30 border border-solid border-white/30 bg-white p-1  shadow-input dark:bg-black md:rounded-2xl">
            <div className="rounded-xl justify-center mt-1 ml-88 items-end content-end w-8 h-8 border border-solid border-white/30 ">
              <div>
                <button
                  className="mt-1 ml-0.5 cursor-pointer"
                  onClick={() => {
                    (setSelectedCode(codeBlocks7.button1),
                      setShowCodeBox(true));
                  }}
                >
                  <Code2 className="hover:scale-105" />
                </button>

                {showCodeBox && (
                  <CodeBox
                    code={selectedCode}
                    onClose={() => setShowCodeBox(false)}
                  />
                )}
              </div>
            </div>
            <div className="rounded-xl w-fit bg-white p-1 mt-40 ml-32 shadow-input justify-center items-center dark:bg-black md:rounded-2xl">
              <div className="flex flex-wrap items-center justify-center gap-4">
                {/* LinkedIn */}
                <button className="group flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950 px-6 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)]">
                  <img
                    src="https://images.shadcnspace.com/assets/svgs/icon-github-white.svg"
                    alt=""
                    className="h-5 w-5"
                  />
                  <span>GitHub</span>
                </button>
              </div>
            </div>
          </div>

          {/* Button 2 */}
          <div className="rounded-xl w-100 h-100 mt-30 border border-solid border-white/30 bg-black p-1   shadow-input md:rounded-2xl">
            <div className="rounded-xl justify-center mt-1 ml-88 items-end content-end w-8 h-8 border border-solid border-white/30 ">
              <div>
                <button
                  className="mt-1 ml-0.5 cursor-pointer"
                  onClick={() => {
                    (setSelectedCode(codeBlocks7.button2),
                      setShowCodeBox(true));
                  }}
                >
                  <Code2 className="hover:scale-105" />
                </button>

                {showCodeBox && (
                  <CodeBox
                    code={selectedCode}
                    onClose={() => setShowCodeBox(false)}
                  />
                )}
              </div>
            </div>
            <div className="rounded-xl w-fit mt-40 ml-20 shadow-input justify-center items-center dark:bg-black md:rounded-2xl">
              <div className="flex flex-wrap items-center  justify-center gap-4">
                {/* Google */}
                <button
                  type="button"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <img
                    src="https://images.shadcnspace.com/assets/svgs/icon-google.svg"
                    alt="Google"
                    className="h-5 w-5"
                  />
                </button>

                {/* GitHub */}
                <button
                  type="button"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <img
                    src="https://images.shadcnspace.com/assets/svgs/icon-github.svg"
                    alt="GitHub"
                    className="h-5 w-5 dark:hidden"
                  />
                  <img
                    src="https://images.shadcnspace.com/assets/svgs/icon-github-white.svg"
                    alt="GitHub"
                    className="hidden h-5 w-5 dark:block"
                  />
                </button>

                {/* LinkedIn */}
                <button
                  type="button"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <img
                    src="https://images.shadcnspace.com/assets/svgs/icon-linkedin.svg"
                    alt="LinkedIn"
                    className="h-5 w-5"
                  />
                </button>

                {/* Facebook */}
                <button
                  type="button"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <img
                    src="https://images.shadcnspace.com/assets/svgs/icon-facebook.svg"
                    alt="Facebook"
                    className="h-5 w-5"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Buttom 3 */}
          <div className="rounded-xl w-100 h-100 mt-30 border border-solid border-white/30 bg-white p-1  shadow-input dark:bg-black md:rounded-2xl">
            <div className="rounded-xl justify-center mt-1 ml-88 items-end content-end w-8 h-8 border border-solid border-white/30 ">
              <div>
                <button
                  className="mt-1 ml-0.5 cursor-pointer"
                  onClick={() => {
                    setSelectedCode(codeBlocks7.button3);
                    setShowCodeBox(true);
                  }}
                >
                  <Code2 className="hover:scale-105" />
                </button>

                {showCodeBox && (
                  <CodeBox
                    code={selectedCode}
                    onClose={() => setShowCodeBox(false)}
                  />
                )}
              </div>
            </div>
            <div className="rounded-xl w-fit bg-white p-1 mt-40 ml-15 shadow-input justify-center items-center dark:bg-black md:rounded-2xl">
              <div className="flex flex-wrap gap-4">
                {socials.map((social) => (
                  <button
                    key={social.name}
                    className="group cursor-pointer relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
                  >
                    <span className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <img
                      src={social.icon}
                      alt={social.name}
                      className="relative z-10 h-5 w-5"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
