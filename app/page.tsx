import LiquidGlass from "@/components/liquidGlass";
import { IconCloudDemo } from "@/components/skills";

import { FlickeringGrid } from "@/components/ui/flickering-grid";
import React from "react";

export default function Home(): React.ReactElement {
  return (<div className=" relative min-h-screen w-full overflow-hidden ">
           <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1} 
      />
     <IconCloudDemo/>
      {/* <LiquidGlass/> */}

      </div>
  );
};
