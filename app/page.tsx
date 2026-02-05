import { NavMain } from "@/components/nav-main";
import React from "react";

export default function Home(): React.ReactElement {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans ">
       <div 
    className="absolute inset-0 opacity-50"
    style={{
      backgroundImage: ' radial-gradient(circle, rgb(151 151 151) 1px, transparent 1px)',
      backgroundSize: '30px 30px'
    }}
  />

    </div>
  );
};
