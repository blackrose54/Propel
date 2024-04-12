"use client";

import { Button } from "@/components/ui/button";
import { CircleCheck, Eye, Timer, Trash } from "lucide-react";
import { useRouter } from "next/navigation";

type props = {
  params: {
    ids: string[];
  };
};

export default function Project({ params }: props) {
  const router = useRouter();
  return (
    <main>
      <section className=" p-12 space-y-8">
        <div className=" space-y-4">
          <p className=" text-4xl">Music Project</p>
          <p className=" text-lg text-muted-foreground">by phantom</p>
        </div>
        <Button
          variant={"ghost"}
          className=" flex px-2 gap-x-2 items-center text-lg text-muted-foreground"
        >
          <Eye /> Preview
        </Button>
      </section>

      <div className=" h-[2px] bg-secondary"></div>

      <section className=" p-12 space-y-4">
        <p className=" text-2xl">Project Overview</p>

        <div className="build-steps">
          <ul>
            <li
              onClick={() =>
                router.push(
                  `/projects/edit/basics/${params.ids[0]}/${params.ids[1]}`
                )
              }
            >
              <div className=" flex items-center  ">
                <div className="p-4 text-muted-foreground/30">
                  <CircleCheck size={50} strokeWidth={"1px"} />
                </div>
                <div>
                  <p className=" text-xl font-bold">Basics</p>
                  <p className=" text-muted-foreground text-sm">
                    Name your project, upload an image or video, and establish
                    your campaign details.
                  </p>
                </div>
              </div>
            </li>
            <li
              onClick={() =>
                router.push(
                  `/projects/edit/story/${params.ids[0]}/${params.ids[1]}`
                )
              }
            >
              <div className=" flex items-center  ">
                <div className="p-4 text-muted-foreground/30">
                  <CircleCheck size={50} strokeWidth={"1px"} />
                </div>
                <div>
                  <p className=" text-xl font-bold">Story</p>
                  <p className=" text-muted-foreground text-sm">
                    Add a detailed project description and covey your risks and
                    challenges
                  </p>
                </div>
              </div>
            </li>
            <li
              onClick={() =>
                router.push(
                  `/projects/edit/payment/${params.ids[0]}/${params.ids[1]}`
                )
              }
            >
              <div className=" flex items-center  ">
                <div className="p-4 text-muted-foreground/30">
                  <CircleCheck size={50} strokeWidth={"1px"} />
                </div>
                <div>
                  <p className=" text-xl font-bold">Payment</p>
                  <p className=" text-muted-foreground text-sm">Verify details and link a bank account</p>
                </div>
              </div>
            </li>
          </ul>
          <div className=" flex min-h-12 ">
            <div className=" flex h-12 w-10 items-center justify-center relative">
              <div className=" border-r-2 h-full w-1/2 absolute left-0 border-secondary"></div>
              <span className=" h-3 w-3 rounded-full bg-secondary"></span>
            </div>
            <p className=" text-muted-foreground my-auto">
              Submit your project for review
            </p>
          </div>
          <div className=" flex items-center border-2 hover:bg-secondary   ">
            <div className="p-4 text-muted-foreground/30">
            <Timer size={45} strokeWidth={"1px"} />
            </div>
            <div>
              <p className=" text-xl font-bold">Project Review</p>
              <p className=" text-muted-foreground text-sm">
                We&apos;ll check to make sure it follows our rules and guidelines.<br />
                <p className=" text-blue-500"> Please allow 1-3 business days for response</p>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className=" h-[2px] bg-secondary"></div>
      
      <div className=" px-12 py-8">

      <Button variant={'destructive'} className=" gap-x-4 text-lg" ><Trash size={20} /> Delete Project</Button>
      </div>

    </main>
  );
}
