"use client";

import { editNavbar } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

export function EditNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const ids = pathname.split("/").slice(-2);

  return (
    <nav className=" flex justify-center px-6 border-b-2 shadow-md text-center ">
      {editNavbar.map((value) => (
        <div
          onClick={() =>
            router.push(
              `/projects/edit/${value.title.toLowerCase()}/${ids[0]}/${ids[1]}`
            )
          }
          key={value.title}
          className={cn(
            "px-20 py-4 cursor-pointer ",
            pathname.startsWith(`/projects/edit/${value.title.toLowerCase()}`)
              ? "border-b-4 border-primary"
              : ""
          )}
        >
          <p className=" text-2xl">{value.emoji}</p>
          <p>{value.title}</p>
        </div>
      ))}
    </nav>
  );
}
