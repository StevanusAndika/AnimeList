"use client"
import '@/app/globals.css';
import Link from 'next/link';

import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import { Rewind } from '@phosphor-icons/react';




const Page = () => {
    return (
      <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
        <div className="flex justify-center items-center gap-4 flex-col">
          <FileSearch size={32}className="text-color-accent"/>
          <h3 className="text-4xl font-bold text-color-dark">404 | Not Found</h3>
          <Link href="/"className="text-color-dark hover:text-color-accent transition-all">
          <Rewind size={32} />Back</Link>
          

        </div>


      </div>
    )
}

export default Page;