'use client'

import { sentient, telma } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { Profile } from "./profile";
import { Input } from "./ui/input";
import { usePathname, useRouter } from "next/navigation";

export function Navbar() {
    const pathname = usePathname();
    const router = useRouter();

  return (
    <nav className=" flex  items-center justify-between py-2 px-6 md:gap-x-12 border-b-2 sticky top-0 bg-background z-50 max-md:space-x-4">
      <p onClick={()=>router.push('/')} className={cn(sentient.className, "cursor-pointer  text-3xl md:text-6xl font-bold text-primary w-fit")}>Propel</p>
      {pathname !== '/start' && <div className=" flex items-center h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-lg transition-colors placeholder:text-muted-foreground focus-within:ring-1 focus-within:ring-ring max-sm:hidden w-[30%] ">
      <Search />
        <Input
          id="search"
          placeholder="Search projects, creators and categories"
          className=" outline-none border-0 focus-visible:ring-0 shadow-none"
          
        />
      </div>}
      <Profile />
    </nav>
  );
}
