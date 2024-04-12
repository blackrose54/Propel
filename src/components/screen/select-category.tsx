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

type props = {
    setdone:Function
}
export function SelectCategories({setdone}:props) {
  return (
    <div className="md:p-4 max-w-[50%] min-h-[60%] space-y-4">
      <p className="text-lg md:text-3xl text-center">
        Select a primary category and subcategory for your new project.
      </p>
      <p className=" text-muted-foreground text-center">
        These will help backers find your project, and you can change them later
        if you need to.
      </p>
      <div className="max-sm:space-y-4 md:flex items-center justify-between md:gap-x-12">
        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className=" flex items-center justify-end">
        <Button className="max-sm:w-full" onClick={()=>setdone((prev:number)=>prev + 1)}>Next</Button>
      </div>
    </div>
  );
}
