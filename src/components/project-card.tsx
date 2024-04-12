'use client'

import {
    Card,
    CardContent,
    CardHeader
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

type props={
    className?:string
}

export function ProjectCard({className}:props) {
  const router = useRouter();
  return (
    <Card onClick={()=>router.push('/projects/34/234')} className={cn(" overflow-clip space-y-4 hover:scale-[1.01] transition-transform ease-in-out  cursor-pointer shadow-lg",className)}>
      <CardHeader className=" relative aspect-video">
        <Image
          src={
            "https://i.kickstarter.com/assets/044/449/268/096bb9250b8700b5c5e0daba46b84188_original.jpg?fit=contain&origin=ugc&q=92&width=680&sig=fUKTLOlmQ0q7QglQnYiKw1Ocu3jOk70i%2FZ%2Ftsv0D9GI%3D"
          }
          alt="logo"
          fill
          objectFit="cover"
          
        />
      </CardHeader>
      <CardContent>
        <p className=" font-bold">Card Content</p>
      </CardContent>
    </Card>
  );
}
