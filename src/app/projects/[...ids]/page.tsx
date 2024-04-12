'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type props = {
  params: {
    ids: string[];
  };
};

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const projectdetails = {
  title: "Fable Brewing Company LLC.",
  description:
    "Fable Brewing aims to be a Burlington, Massachusetts brewery that merges hops with imagination.",
  pledged: 1400589,
  goal: 10000,
  backers: 47,
  img: "https://i.kickstarter.com/assets/044/298/218/9ee476db2995cc565a21d400a6ec9d3b_original.jpg?anim=false&fit=crop&gravity=auto&height=315&origin=ugc&q=92&width=560&sig=R3pjZ0fraQNNzPtpr3PacYmdKzTgedM4HnLkIWwuKno%3D",
  daysago: 32,
  story: `Fable is a group of passionate hometown folks whose mission is to become a neighborhood institution for craft beer enthusiasts, located in the heart of Burlington, Massachusetts. We will create a local, small craft brewery where proud Burlingtonians of ages 21+ can enjoy high quality, handcrafted beers in a taproom they can call their own. We will offer a diverse and rotating palette of beer styles, presented together in curated flights - each based on a fable. Each beer in the flight evokes a character; put together, they tell a story. All of this will be set within an environment of enchanting decor that evokes mystery and invites adventure. 

    Fable: Telling stories through beer.
    
    Follow us on our social channels Facebook Instagram Website`,
  risk: `If not funded: If the kickstarter does not fund, there are no risks; you will not be charged unless the project meets goal.

    If funded: Funders are guaranteed all rewards as indicated in the kickstarter.
    
    Risks post-funding period are related to business launch. Funding for a new business comes from many sources, and this kickstarter is just one of those sources. The team will work vigorously to get the brewery up and running as soon as possible, but obstacles outside of the control of the Fable team might result in delay/blockage of launch. We thank you for your help in making this brewery come to life!`,
};
export default function Project({ params }: props) {

  const [value,setvalue] = useState<string>("a");
  return (
    <section className="">
      <div className=" text-center p-12 space-y-2">
        <h1 className=" text-4xl font-bold">{projectdetails.title}</h1>
        <p className=" text-muted-foreground">{projectdetails.description}</p>
      </div>

      <div className=" flex justify-between gap-x-12 px-20">
        <div className="relative aspect-video grow">
          <Image src={projectdetails.img} alt="lgo" fill objectFit="contain" />
          <p>hiell</p>
        </div>
        <div className=" border-t-8 py-4 border-primary space-y-8 w-[30%]">
          <div className=" space-y-2">
            <h1 className=" text-primary text-4xl font-bold">
              INR {numberWithCommas(projectdetails.pledged)}
            </h1>
            <p className=" text-muted-foreground">
              Pledged of INR {numberWithCommas(projectdetails.goal)}
            </p>
          </div>
          <div>
            <h1 className=" text-4xl font-semibold text-muted-foreground">
              {projectdetails.backers}
            </h1>
            <p className=" text-muted-foreground">backers</p>
          </div>

          <div>
            <h1 className=" text-4xl font-semibold text-muted-foreground">
              {projectdetails.daysago}
            </h1>
            <p className=" text-muted-foreground">days to go</p>
          </div>

          <div className=" space-y-4">
            <Input value={value} onChange={(e)=>setvalue(e.target.value)} type="text" name="amount" className=" mb-4 " placeholder=" enter amount to pledge" />
            <Link href={`/projects/rewards/${params.ids[0]}/${params.ids[1]}`}>
              <Button className=" w-full">Back this project</Button>
            </Link>
            <p className=" text-sm ">
              All or nothing. This project will only be funded if it reaches its
              goal by Fri, April 19 2024 7:36 PM UTC +05:30.
            </p>
          </div>
        </div>
      </div>

      <div className=" py-12 px-20 space-y-6">
        <h1 className="  text-4xl">Story</h1>
        <p>{projectdetails.story}</p>
      </div>

      <div className=" py-12 px-20 space-y-8">
        <h1 className="  text-4xl">Risks & Chanllenges</h1>
        <p>{projectdetails.risk}</p>
      </div>
    </section>
  );
}
