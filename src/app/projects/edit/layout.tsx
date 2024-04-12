import { EditNavbar } from "@/components/edit-navbar";
import { Navbar } from "@/components/navbar";
import { ReactNode } from "react";

export default function EditLayout({children}:{children:ReactNode}){
    return(
        <main>
            <EditNavbar />
            {children}
        </main>
    )
}