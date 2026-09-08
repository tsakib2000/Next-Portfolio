'use client';

import {  Flame, Github, } from 'lucide-react';

import { Icons } from './ui/animated-beam';
import { OrbitingCircles } from './ui/orbiting-circles';
import { IconBrandJavascript, IconBrandSupabase } from '@tabler/icons-react';

function Skills() {
  return (
    <section id="skills" className="py-16">
      <h3 className="text-2xl font-semibold my-8">Skills</h3>

      <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-2xl">
        <span className="pointer-events-none absolute whitespace-pre-wrap bg-gradient-to-b from-slate-100 via-slate-400 to-slate-300 text-7xl font-bold tracking-tighter text-transparent opacity-20 [background-clip:text]">
       
        </span>

        <OrbitingCircles className="h-12 w-12 border border-slate-300/30 bg-slate-900 p-2" duration={14}>
          <Icons.reactjs />
          <Icons.nextjs />
          <Icons.typescript />
          <Icons.tailwindcss />
        </OrbitingCircles>

        <OrbitingCircles
          className="h-12 w-12 border border-slate-300/30 bg-slate-900 p-2"
          duration={10}
          radius={110}
          reverse
        >
          <Icons.supabase />
          <Icons.javascript  />
          <Flame size={28} />
          <Icons.github />
        </OrbitingCircles>

        <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/20 bg-slate-950 ring-4 ring-white/10">
          <span className="text-3xl">👨‍💻</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
