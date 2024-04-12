'use client'

import { SelectCategories } from "@/components/screen/select-category";
import { SelectCountry } from "@/components/screen/select-country";
import { useState } from "react";


export default function Start() {
    const [done,setdone] = useState<number>(1);
    const total = 2;
  return (
    <main className="h-full bg-primary/10 flex items-center justify-center">
        <p className=" absolute top-2 left-5">{done} of {total}</p>
        {done == 1 && <SelectCategories setdone={setdone} />}
        {done == 2 && <SelectCountry setdone={setdone} />}
    </main>
  );
}
