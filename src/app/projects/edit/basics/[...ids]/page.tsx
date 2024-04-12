import { ImageUpload } from "@/components/basic-image-upload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function Basics() {
  return (
    <section>
      <div className=" p-12 text-center space-y-4 border-b-2">
        <h1 className=" text-4xl">Start with Basics</h1>
        <p className=" text-muted-foreground">
          Make it easy for people to learn about your project
        </p>
      </div>

      {/* project tile */}
      <div className=" p-12 border-b-2 flex items-center gap-x-8">
        <div className=" space-y-2 w-[50%] pr-20">
          <h1 className=" text-2xl">Project Title</h1>
          <p className=" text-muted-foreground">
            Write a clear, brief title and subtitle to help people quickly
            understand your project. Both will appear on your project and
            pre-launch pages.
            <br />
            <br /> Potential backers will also see them if your project appears
            on category pages, search results, or in emails we send to our
            community
          </p>
        </div>
        <div className=" w-[50%] p-2 space-y-6">
          <div>
            <Label htmlFor="title" className=" text-xl">
              Title
            </Label>
            <Input type="text" id="title" />
          </div>
          <div>
            <Label htmlFor="subtitle" className=" text-xl">
              Subtitle
            </Label>
            <Textarea className=" resize-none" />
          </div>
        </div>
      </div>

      {/* project category */}
      <div className=" p-12 border-b-2 flex items-center gap-x-8">
        <div className=" space-y-2 w-[50%] pr-20">
          <h1 className=" text-2xl">Project Title</h1>
          <p className=" text-muted-foreground">
            Choose a primary category and subcategory to help backers find your
            project.
          </p>
          <p className=" text-muted-foreground">
            Your second subcategory will help us provide more relevant guidance
            for your project. It won&apos;t display on your project page or
            affect how it appears in search results.{" "}
          </p>
          <p className=" text-muted-foreground">
            You can change these anytime before and during your campaign.
          </p>
        </div>
        <div className=" w-[50%] p-2 space-y-6">
          <div className=" space-y-2">
            <Label htmlFor="title" className=" text-xl">
              Category
            </Label>
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
          <div className=" space-y-2">
            <Label htmlFor="subtitle" className=" text-xl">
              Subcategory
            </Label>
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
        </div>
      </div>

      {/* project location */}
      <div className=" p-12 border-b-2 flex items-center gap-x-8">
        <div className=" space-y-2 w-[50%] pr-20">
          <h1 className=" text-2xl">Project Location</h1>
          <p className=" text-muted-foreground">
            Enter the location that best describes where your project is based.
          </p>
        </div>
        <div className=" w-[50%] p-2 space-y-6">
          <div className=" space-y-2">
            <Label htmlFor="title" className=" text-xl">
              Location
            </Label>
            <Input type="text" id="title" />
          </div>
        </div>
      </div>

      {/* project image */}
      <div className=" p-12 border-b-2 flex items-center gap-x-8">
        <div className=" space-y-2 w-[50%] pr-20">
          <h1 className=" text-2xl">Project Image</h1>
          <p className=" text-muted-foreground">
            Your image should be at least 1024x576 pixels. It will be cropped to
            a 16:9 ratio.
          </p>
        </div>
        <ImageUpload />
      </div>

      {/* Funding Goal */}
      <div className=" p-12 border-b-2 flex items-center gap-x-8">
        <div className=" space-y-2 w-[50%] pr-20">
          <h1 className=" text-2xl">Funding Goal</h1>
          <p className=" text-muted-foreground">
          Set an achievable goal that covers what you need to complete your project.
          </p>
        </div>
        <div className=" w-[50%] p-2 space-y-6">
          <div className=" space-y-2">
            <Label htmlFor="title" className=" text-xl">
              Goal Amount
            </Label>
            <div className=" flex items-center border-2 rounded-md focus-within:ring-1 focus-within:ring-ring">
              <span className=" border-r-2 p-2">INR</span><Input className=" border-0 focus-visible:ring-0" type="text" inputMode="numeric" name="amount"/>
            </div>
          </div>
        </div>

        
      </div>
      {/* campaign duration */}
      <div className=" p-12 border-b-2 flex items-center gap-x-8">
        <div className=" space-y-2 w-[50%] pr-20">
          <h1 className=" text-2xl">Campaign Duration</h1>
          <p className=" text-muted-foreground">
          Set a time limit for your campaign. You won&apos;t be able to change this after you launch.
          </p>
        </div>
        <div className=" space-y-2 w-[50%]">
          <Label htmlFor="days">Enter number of days</Label>
          <Input type=" text" inputMode="numeric" className="" />
        </div>
      </div>

      <div className=" flex justify-end px-12 py-8">
        <Button >Save</Button>

      </div>
      
    </section>
  );
}
