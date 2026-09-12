'use client';

import { Flame } from 'lucide-react';

import { Icons } from './ui/animated-beam';
import { OrbitingCircles } from './ui/orbiting-circles';

const circleClass =
  'h-12 w-12 overflow-hidden border border-slate-300/30 bg-slate-900 p-2 [&_svg]:size-full';

function Skills() {
  return (
    <section id="skills" className="mt-16">
      <h3 className="mt-8 text-2xl font-semibold">Skills</h3>

      <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-2xl">
        <OrbitingCircles className={circleClass} duration={14} radius={110}>
          <Icons.reactjs />
          <Icons.nextjs />
          <Icons.typescript />
          <Icons.tailwindcss />
          
        </OrbitingCircles>

        <OrbitingCircles className={circleClass} duration={10} radius={170} reverse>
          <Icons.supabase />
          <Icons.javascript />
          <Icons.firebase />
          <Icons.github />
          <Icons.shopify />
        </OrbitingCircles>

        <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/20 bg-slate-950 ring-4 ring-white/10">
          <span className="text-3xl">👨‍💻</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
