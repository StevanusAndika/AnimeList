"use client"
import React from "react";

import { FileSearch } from "@phosphor-icons/react/dist/ssr";



const Page = () => {
    return (
      <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
        <FileSearch size={32}/>
        <h1 className="text-2xl font-bold text-color-primary">Not Found</h1>


      </div>
    )
}

export default Page;