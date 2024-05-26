import Link from "next/link";
import Curser from "./components/Curser";

export default function NotFound() {
    return (
       
  <main class="h-screen w-full flex flex-col justify-center items-center bg-[#0F0D0D]">
    <Curser/>
      <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div class="bg-[#EDBFFF] px-2 text-sm rounded text-[#0F0D0D] rotate-12 absolute border-[#0F0D0D] border-2">
          Page Not Found
      </div>
      <button class="mt-5">
        <div
          class="relative inline-block text-sm font-medium text-[#EDBFFF] group active:text-[#EDBFFF] focus:outline-none focus:ring"
        >
          <span
            class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#EDBFFF] group-hover:translate-y-0 group-hover:translate-x-0"
          ></span>
  
          <span class="relative block px-8 py-3 bg-[#0F0D0D] border border-current">
            <Link href="/">Go Home</Link>
          </span>
          </div>
      </button>
  </main>
    )
  }