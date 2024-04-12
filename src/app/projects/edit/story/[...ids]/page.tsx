import MyEditor from "@/components/editor";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import dynamic from "next/dynamic";

export default function Edit() {
  const Editor = dynamic(() => import("@/components/editor"), { ssr: false });
  return (
    <section>
      <div className=" p-12 text-center space-y-4 border-b-2">
        <h1 className=" text-4xl">Introduce your Project</h1>
        <p className=" text-muted-foreground">
          Tell people why they should be excited about your project. Get
          specific but be clear and be brief.
        </p>
      </div>

      <div className=" px-12 py-4 space-y-2">
        <h1 className=" text-2xl">Project Story</h1>
        <p className=" text-muted-foreground max-w-[35rem]">
          Describe what you&apos;re raising funds to do, why you care about it,
          how you plan to make it happen, and who you are. Read more about
          telling your story.
        </p>
        <div className=" min-h-72">
          <MyEditor />
        </div>
      </div>

      <div className=" p-12 border-b-2 flex items-center gap-x-8">
        <div className=" space-y-2 w-[50%] pr-20">
          <h1 className=" text-2xl">Risk and Challenges</h1>
          <p className=" text-muted-foreground">
          Be honest about the potential risks and challenges of this project and how you plan to overcome them to complete it.
          </p>
          
        </div>

        <Textarea className=" resize-none w-[50%] h-32" placeholder="Common risk and challenges you may want to address including size of audience ,budgeting..." />
      </div>
      <div className=" flex justify-end px-12 py-8">
        <Button >Save</Button>

      </div>
    </section>
  );
}
