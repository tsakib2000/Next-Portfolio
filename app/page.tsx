import AboutMe from "@/components/AboutMe";
import { AuraBackground } from "@/components/AuraBackground";



import { FlickeringGrid } from "@/components/ui/flickering-grid";

import React from "react";

export default function Home(): React.ReactElement {
  return (<AuraBackground>
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 overflow-hidden">
        <FlickeringGrid
          className="absolute inset-0 size-full mask-[linear-gradient(to_bottom,transparent_0%,black_0%,black_50%,transparent_80%)]"
          squareSize={3}
          gridGap={6}
          color="#f0f1f2"
          maxOpacity={0.5}
          flickerChance={0.1}
        />
      </div>

      <div className="relative mx-auto w-11/12 pt-10 md:w-2/3">
        <AboutMe />
      </div>
    </div>
  </AuraBackground>
  );
};