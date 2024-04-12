'use client'

import { useTheme } from "next-themes";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";

export function Profile() {
    const {setTheme} = useTheme()
    const pathname = usePathname();
    const router = useRouter()
  return (
    <div className=" flex items-center gap-x-4 outline-none">
     {pathname !== '/start' && <Button variant={"outline"} onClick={()=>router.push('/start')}>Start A Project</Button>}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" mr-4">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className=" cursor-pointer">Profile</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className=" cursor-pointer">Theme</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={()=>setTheme('light')} className=" cursor-pointer">Light</DropdownMenuItem>
                <DropdownMenuItem onClick={()=>setTheme('dark')} className=" cursor-pointer">Dark</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={()=>setTheme('system')} className=" cursor-pointer">System</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
         
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
