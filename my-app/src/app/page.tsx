"use client";
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";

import { CldImage } from "next-cloudinary";
import { useState } from "react";



 type UploadResult ={
   info:{
    public_id:string;

   };
   event:'success'


}


export default function Home() {
  const [imageid , setimageid] = useState("")
  return (

    <main className="flex min-h-screen flex-col items-center justify-center">
      <CldUploadButton 
        onUpload={(result:any)=>{
          setimageid(result.info.public_id);
            
        }}
        
      uploadPreset="giomsr4s"/>


{imageid && (
      <CldImage
        width="600"
        height="600"
        src={imageid}
        sizes="100vw"
        alt="Description of my image" 
      />
      )}
    </main>

  );
}


