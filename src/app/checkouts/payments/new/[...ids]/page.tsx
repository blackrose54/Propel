import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function Checkout() {
  return (
    <main className=" h-screen flex justify-between">
      <div className=" p-12 w-[50%] space-y-4">
        <h1 className=" text-4xl font-bold ">Pledge Summary</h1>
        <p>
          We won&apos;t charge you at this time. If the project reaches its
          funding goal, your payment method will be charged when the campaign
          ends. You&apos;ll receive a confirmation email at emboss6744@proton.me when
          your pledge is successfully processed.
        </p>
        <div className=" flex items-center gap-x-4">
          <div className=" relative aspect-video w-56">
            <Image
              src={
                "https://i.kickstarter.com/assets/044/449/268/096bb9250b8700b5c5e0daba46b84188_original.jpg?fit=contain&origin=ugc&q=92&width=680&sig=fUKTLOlmQ0q7QglQnYiKw1Ocu3jOk70i%2FZ%2Ftsv0D9GI%3D"
              }
              alt="lgo"
              fill
              className=" object-cover"
            />
          </div>
          <span>
            <p>P1L Tagger Construction Printer - Label The Job Site</p>
            <p className=" text-muted-foreground font-bold">3,707% funded</p>
            <p className=" text-sm">By REEKON Tools Inc.</p>
          </span>
        </div>
        <div className=" space-y-4">
          <h1 className=" text-2xl font-semibold">Your Pledge</h1>
          <div>
            <span className=" flex justify-between">
              <span>Reward</span>
              <span className=" flex gap-x-4">
                <p>[Early] P1-L Tagger Construction Printer </p>
                <p> INR 99.00</p>
              </span>
            </span>
            <span className=" flex justify-between">
              <span>Reward</span>
              <span>INR 10.00</span>
            </span>
          </div>

          <div className=" h-[2px] bg-secondary"></div>

          <div className=" flex justify-between">
            <p>Total amount</p>
            <p className=" text-primary">INR 10.00</p>
          </div>
        </div>
      </div>
      <div className=" p-12 w-[50%] space-y-4">
        <h1 className=" text-4xl font-semibold">Add a payment method</h1>
        <div className=" space-y-4">
          <div>
            <Label htmlFor="card">Add a new payment method</Label>
            <Input type="text" placeholder="4242 4242 4242 4242" />
          </div>
          <div className=" flex justify-between gap-x-4">
            <div className=" w-full">
              <Label htmlFor="card">Expiration</Label>
              <Input type="text" placeholder="MM /YY " />
            </div>
            <div className=" w-full">
              <Label htmlFor="card">CVC</Label>
              <Input type="text" placeholder="CVC" />
            </div>
          </div>

          <div>
            <Label htmlFor="card">Country</Label>
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
        <Button className=" w-full">Pledge</Button>
      </div>
    </main>
  );
}
