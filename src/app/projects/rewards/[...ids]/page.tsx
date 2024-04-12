import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function Reward() {
  return (
    <main className=" py-12">
      <div className=" py-12 my-4 bg-secondary">
        <h1 className=" text-4xl text-center">
          P1L Tagger Construction Printer - Label The Job Site
        </h1>
        <p className=" text-center">by REEKON Tools Inc.</p>
      </div>
      <div className=" px-20 max-w-[80%] space-y-4">
        <h1 className=" text-2xl">Select your reward</h1>
        <p>Select an option below</p>

        <div className=" hover:border-primary/50 border-2 p-4 space-y-4">
          <p>Pledge without a reward</p>
          <div className=" flex gap-x-8">
            <Input type="number" inputMode="numeric" />
            <Button>Continue</Button>
          </div>
        </div>

        <div className=" hover:border-primary/50 border-2 p-4 space-y-4 flex justify-between flex-wrap">
          <div className=" space-y-4">
            <p>Pledge INR 99</p>
            <h1 className=" font-bold text-lg">
              [Early] P1-L Tagger Construction Printer
            </h1>
            <p className=" text-muted-foreground">Save 20% (MSRP $129)</p>
            <ul className=" list-disc px-4 text-muted-foreground">
              <li>P1-L Construction printer</li>
              <li>Roll of Labels</li>
              <li>ROCK Jobsite App Access</li>
            </ul>

            <p>Includes</p>
            <ul className=" list-disc px-4 text-muted-foreground">
              <li>P1L Tagger Construction Printer</li>
              
            </ul>

            <div className=" flex justify-between items-center">
              <div>
                <p className=" text-muted-foreground">Estimated Delivery</p>
                <p>JUN 2024</p>
              </div>
              <div>
                <p className=" text-muted-foreground">Ships to</p>
                <p>Anywhere in the world</p>
              </div>
            </div>
          </div>
          <div className=" aspect-video relative w-96">
            <Image
              src={
                "https://i.kickstarter.com/assets/043/777/295/b02414993034db54e90de5662e416c33_original.jpg?origin=ugc&q=80&width=600&sig=GEKuF7v2PG12sMbJ0HDAOwDGrKddnwkUCAeP3SggGTo%3D"
              }
              alt="log"
              fill
            />
          </div>

          <div className=" flex w-full items-center justify-between gap-x-4">
            <div className="p-2 w-full">
              <Label className=" text-sm">Shipping destination</Label>
              <Input type=" text" />
            </div>
            <div className="p-2 w-full">
              <Label>Bonus Support (optional)</Label>
              <Input type=" text" />
            </div>

            <Button className=" mt-6">Pledge INR 99</Button>
          </div>
        </div>

        <div className=" hover:border-primary/50 border-2 p-4 space-y-4 flex justify-between flex-wrap">
          <div className=" space-y-4">
            <p>Pledge INR 109</p>
            <h1 className=" font-bold text-lg">
              [Early] P1-L Tagger Construction Printer
            </h1>
            <p className=" text-muted-foreground">Save 15% (MSRP $129)</p>

            <ul className=" list-disc px-4 text-muted-foreground">
              <li>P1-L Construction printer</li>
              <li>Roll of Labels</li>
              <li>ROCK Jobsite App Access</li>
            </ul>

            <p>Includes</p>
            <ul className=" list-disc px-4 text-muted-foreground">
              <li>P1-L Construction printer</li>
              
            </ul>


            <div className=" flex justify-between items-center">
              <div>
                <p className=" text-muted-foreground">Estimated Delivery</p>
                <p>JUN 2024</p>
              </div>
              <div>
                <p className=" text-muted-foreground">Ships to</p>
                <p>Anywhere in the world</p>
              </div>
            </div>
          </div>
          <div className=" aspect-video relative w-96">
            <Image
              src={
                "https://i.kickstarter.com/assets/043/777/295/b02414993034db54e90de5662e416c33_original.jpg?origin=ugc&q=80&width=600&sig=GEKuF7v2PG12sMbJ0HDAOwDGrKddnwkUCAeP3SggGTo%3D"
              }
              alt="log"
              fill
            />
          </div>

          <div className=" flex w-full items-center justify-between gap-x-4">
            <div className="p-2 w-full">
              <Label className=" text-sm">Shipping destination</Label>
              <Input type=" text" />
            </div>
            <div className="p-2 w-full">
              <Label>Bonus Support (optional)</Label>
              <Input type=" text" />
            </div>

            <Button className=" mt-6">Pledge INR 109</Button>
          </div>
        </div>

        <div className=" hover:border-primary/50 border-2 p-4 space-y-4 flex justify-between flex-wrap">
          <div className=" space-y-4">
            <p>Pledge INR 319</p>
            <h1 className=" font-bold text-lg">
              [Early] P1-L Tagger Construction Printer
            </h1>
            <p className=" text-muted-foreground">Save 15% (MSRP $388)</p>

            <ul className=" list-disc px-4 text-muted-foreground">
              <li>P1-L Construction printer</li>
              <li>Roll of Labels</li>
              <li>ROCK Jobsite App Access</li>
              <li>ROCK Jobsite App Access</li>
            </ul>

            <p>Includes</p>
            <ul className=" list-disc px-4 text-muted-foreground">
              <li>P1-L Construction printer</li>
              <li>T1 Tomahawk Digital Tape Measure</li>
              
            </ul>


            <div className=" flex justify-between items-center">
              <div>
                <p className=" text-muted-foreground">Estimated Delivery</p>
                <p>JUN 2024</p>
              </div>
              <div>
                <p className=" text-muted-foreground">Ships to</p>
                <p>Anywhere in the world</p>
              </div>
            </div>
          </div>
          <div className=" aspect-video relative w-96">
            <Image
              src={
                "https://i.kickstarter.com/assets/044/289/185/1bbf477a810df8c8c747b767fff5b0d6_original.jpg?origin=ugc&q=80&width=600&sig=woVHUfhdsM1h1haXBuLrwjvNgcK78BnXmOAHacGjPsQ%3D"
              }
              alt="log"
              fill
            />
          </div>

          <div className=" flex w-full items-center justify-between gap-x-4">
            <div className="p-2 w-full">
              <Label className=" text-sm">Shipping destination</Label>
              <Input type=" text" />
            </div>
            <div className="p-2 w-full">
              <Label>Bonus Support (optional)</Label>
              <Input type=" text" />
            </div>

            <Button className=" mt-6">Pledge INR 319</Button>
          </div>
        </div>


      </div>
    </main>
  );
}
