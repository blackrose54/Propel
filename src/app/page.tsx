import { ProjectCard } from "@/components/project-card";
import { sentient } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import {Landingpage} from "@/components/landingpage";

export default function Home() {
  const imagearray = ["/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
  "/image6.jpg",
  "/image7.jpg"

]
const card_content=[
"The hello world",
"The risk manager",
"The Hello world",
"The robot dive",
"The green world"
]
  return (
    <>
        <Landingpage/>
    <main className="pt-4">
      <div className=" px-4 h-full">
        <p className=" text-3xl mb-4">Recent Projects</p>
        <div className=" md:grid md:grid-flow-col gap-4 pb-8 max-sm:space-y-4 ">
          <ProjectCard source={imagearray[6]} card_content={"The Modular Table by Wyrmwood"} />
          <div className=" md:grid md:grid-rows-2 md:grid-cols-2 gap-2 md:gap-4 max-sm:space-y-4 ">
            <ProjectCard source={imagearray[1]} card_content="Robots tick" />
            <ProjectCard source={imagearray[2]} card_content="The engineering hub"/>
            <ProjectCard source={imagearray[3]} card_content="Risk management" />
            <ProjectCard source={imagearray[4]} card_content="The word incrementer"/>
          </div>
        </div>
       
      </div>
      <div className=" w-full h-[2px] bg-secondary"></div>
        <div className=" px-4 py-4 h-full">
          <p className=" text-3xl mb-4">Most Poular</p>
          <div className=" flex items-center overflow-x-auto hide-x-scrollbar gap-4 py-4">
        
           
          {imagearray.map((value,key)=>(  <ProjectCard key={key} source={value} card_content={card_content[key]}  className=" inline-table min-w-72" />))}



          </div>
        </div>
    </main>
    </>
  );
}