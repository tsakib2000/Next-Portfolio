import AboutMe from "@/components/AboutMe";



import { FlickeringGrid } from "@/components/ui/flickering-grid";

import React from "react";

export default function Home(): React.ReactElement {
  return (<>
  <div className="  max-h-96  relative ">
           <FlickeringGrid
        className="absolute  inset-0 z-0 size-full mask-[linear-gradient(to_bottom,transparent_0%,black_0%,black_50%,transparent_80%)]"
        squareSize={3}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1} 
      />
     
     <div className="w-2/3 pt-10 mx-auto">
        <AboutMe/>
        
      </div>
      
      </div>
     
      </>
  );
};
