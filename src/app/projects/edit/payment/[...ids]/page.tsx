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

export default function Project() {
  return (
    <section>
      <div className=" p-12 border-b-2 flex items-center gap-x-8">
        <div className=" space-y-2 w-[50%] pr-20">
          <h1 className=" text-2xl">Project type</h1>
          <p className=" text-muted-foreground">
            Select “Individual” if you’re raising and receiving funds for this
            project in your own name. Select “Business” or “Nonprofit” if
            you&apos;re raising and receiving funds for this project on behalf
            of an entity that you own or are an executive of, with authorization
            to represent.
          </p>
        </div>
        <div className=" space-y-2 w-[50%]">
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Select a type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="individual">Individual</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="non-profit">Non Profit</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className=" p-12 border-b-2 flex items-center gap-x-8">
        <div className=" space-y-2 w-[50%] pr-20">
          <h1 className=" text-2xl">Project verification</h1>
          <p className=" text-muted-foreground">
            You&apos;ll be redirected to Stripe, our payment processor, to provide
            your age, location, tax information, and other details.
          </p>

          <p className=" text-muted-foreground">By proceeding, you certify that the details you provide are true.</p>
        </div>
        <div className=" space-y-4 bg-secondary py-6 px-12 w-[50%]">
            <p className=" text-xl">Verify your information with Stripe</p>
            <div className=" h-[1px]  border-2"></div>
            <Button >Continue to Stripe</Button>
        </div>
      </div>

      <div className=" p-12 border-b-2 flex items-center gap-x-8">
        <div className=" space-y-2 w-[50%] pr-20">
          <h1 className=" text-2xl">Bank Account</h1>
          <p className=" text-muted-foreground">
          Add the checking account where you want to receive funds. This account must be located in Australia, and able to receive direct deposits in the currency in which you raise funds. We don&apos;t support wire transfers, savings accounts, or virtual bank accounts.
          </p>

        </div>
        <div className=" space-y-4 bg-secondary py-6 px-12 w-[50%]">
            <p className=" text-xl">Verify your information with Stripe</p>
            <div className=" h-[1px]  border-2"></div>
            <Button >Continue to Stripe</Button>
        </div>
      </div>
    </section>
  );
}
