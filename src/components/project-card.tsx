'use client'

import {
  Card,
  CardContent,
  CardHeader
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

type props = {
  className?: string,
  source:string,
  card_content:string
}
const imagearray = ["/image1.png",
  "/image2.png",
  "/image3.png",
  "/image4.png",
  "/image5.png",

]

export function ProjectCard({ className ,source,card_content}: props) {

  const router = useRouter();

  return (
    <div>
    
        <Card  onClick={() => router.push('/projects/34/234')} className={cn(" overflow-clip space-y-4 hover:scale-[1.01] transition-transform ease-in-out  cursor-pointer shadow-lg hover:shadow-lg hover:shadow-white", className)}>
          <CardHeader className=" relative aspect-video">
            <Image
              src={
               source
              }
              alt="logo"
              fill
              objectFit="cover"

            />
          </CardHeader>
          <CardContent>
            <p className=" font-bold">{card_content}</p>
          </CardContent>
        </Card>
    
    </div>
      )
}