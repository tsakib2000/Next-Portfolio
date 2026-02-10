import AboutMe from "@/components/AboutMe";
import LiquidGlass from "@/components/liquidGlass";
import { IconCloudDemo } from "@/components/skills";

import { FlickeringGrid } from "@/components/ui/flickering-grid";
import React from "react";

export default function Home(): React.ReactElement {
  return (
  <div className=" dark:bg-black relative min-h-screen  overflow-hidden ">
           <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={3}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1} 
      />
      <div className="w-2/3 pt-10 mx-auto">
        <AboutMe/>
      </div>
     {/* <IconCloudDemo/> */}
      {/* <LiquidGlass/> */}

      </div>
  );
};
