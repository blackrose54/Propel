import { ProjectCard } from "@/components/project-card";
import { sentient } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="pt-4">
      <div className=" px-4 h-full">
        <p className=" text-3xl mb-4">Recent Projects</p>
        <div className=" md:grid md:grid-flow-col gap-4 pb-8 max-sm:space-y-4">
          <ProjectCard />
          <div className=" md:grid md:grid-rows-2 md:grid-cols-2 gap-2 md:gap-4 max-sm:space-y-4 ">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
       
      </div>
      <div className=" w-full h-[2px] bg-secondary"></div>
        <div className=" px-4 py-4 h-full">
          <p className=" text-3xl mb-4">Most Poular</p>
          <div className=" flex items-center overflow-x-auto hide-x-scrollbar gap-4 py-4">

            <ProjectCard className=" inline-table min-w-72" />
            <ProjectCard className=" inline-table min-w-72" />
            <ProjectCard className=" inline-table min-w-72" />
            <ProjectCard className=" inline-table min-w-72" />
            <ProjectCard className=" inline-table min-w-72" />
            <ProjectCard className=" inline-table min-w-72" />
            <ProjectCard className=" inline-table min-w-72" />
            <ProjectCard className=" inline-table min-w-72" />
            <ProjectCard className=" inline-table min-w-72" />
            <ProjectCard className=" inline-table min-w-72" />
            <ProjectCard className=" inline-table min-w-72" />
            <ProjectCard className=" inline-table min-w-72" />
            <ProjectCard className=" inline-table min-w-72" />
            <ProjectCard className=" inline-table min-w-72" />
            <ProjectCard className=" inline-table min-w-72" />
            <ProjectCard className=" inline-table min-w-72" />



          </div>
        </div>
    </main>
  );
}
