'use client'

import { useState } from "react";
import { SingleImageDropzone } from "./image-dropzone";
import { useEdgeStore } from '@/lib/edgestore';
import { Button } from "./ui/button";

export function ImageUpload(){
    const [file,setfile] = useState<File>()
    const [uploading,setuploading] = useState<boolean>(false);
    const {edgestore} = useEdgeStore()

    const handleUpload = async () => {
        if (file) {
            setuploading(true);
          const res = await edgestore.publicFiles.upload({
            file,
           
          });
          // you can run some server action or api here
          // to add the necessary data to your database
          console.log(res);
          setuploading(false);
        }
      }

    return(
        <div className=" w-[50%] h-full">

            <SingleImageDropzone
               width={500}
               height={200}   
               value={file} 
               onChange={(file)=>setfile(file)}           
            />
            <Button onClick={handleUpload} disabled={uploading} >Upload</Button>
        </div>
    )
};