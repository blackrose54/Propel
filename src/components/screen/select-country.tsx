'use client'

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type props = {
    setdone:Function
}

export function SelectCountry({setdone}:props) {
    const router = useRouter();
  return (
    <div className="md:p-4 max-w-[50%] min-h-[60%] space-y-4">
      <p className="text-lg md:text-3xl text-center">
        Set a location for your project.
      </p>
      <p className=" text-muted-foreground text-center">
        Pick your country of legal residence if you&apos;re raising funds as an
        individual. If you&apos;re raising funds for a business or nonprofit,
        select the country where the entity&apos;s tax ID is registered.
      </p>
        
        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder="Select your country" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Australia</SelectItem>
              <SelectItem value="banana">India</SelectItem>
              <SelectItem value="blueberry">United Kingdom</SelectItem>
              <SelectItem value="grapes">Brazil</SelectItem>
              <SelectItem value="pineapple">Argentina</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

      <div className=" flex items-center justify-between">
        <Button variant={'link'} onClick={()=>setdone((prev:number) =>prev - 1)}><ArrowLeft size={20} />Previous </Button>
        <Button className="max-sm:w-full" onClick={()=>router.push('/projects/build/234/234')}>Continue</Button>
      </div>
    </div>
  );
}
