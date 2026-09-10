"use client";

const items = [
  "Based in Dhaka, Bangladesh",
  "Available for Work",
  "Remote Worldwide",
  "Full Stack Web Developer",
  "React & Next.js Specialist",
  "TypeScript Enthusiast",
  "UI/UX Focused",
  "Open Source Contributor",
];

export default function ScrollingText() {
  const repeated = [...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-black py-2">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="mx-6 text-xs tracking-widest uppercase text-neutral-400">
            {item}
            <span className="ml-6 text-neutral-600">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
