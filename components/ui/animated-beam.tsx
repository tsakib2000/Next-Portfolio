'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { type RefObject, forwardRef, useEffect, useId, useState } from 'react';

export const Icons = {
  typescript: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="182"
      height="178"
      fill="none"
      viewBox="0 0 182 178"
    >
      <path fill="#007ACC" d="M0 0H181.622V177.081H0z"></path>
      <path
        fill="#fff"
        d="M144.151 73.383c4.03.985 7.691 3.203 10.523 6.373a29.101 29.101 0 014.033 5.686c.052.224-7.262 5.389-11.697 8.27-.161.114-.8-.618-1.524-1.742a9.8 9.8 0 00-3.342-3.558 9.2 9.2 0 00-4.563-1.417c-5.098-.369-8.383 2.438-8.359 7.13a6.742 6.742 0 00.724 3.313c1.122 2.437 3.205 3.9 9.746 6.88 12.042 5.448 17.211 9.04 20.401 14.144a26.592 26.592 0 013.255 10.55 26.9 26.9 0 01-1.285 11.008c-1.631 3.868-4.217 7.206-7.49 9.669-3.273 2.463-7.113 3.96-11.122 4.336a49.112 49.112 0 01-12.818-.139c-6.511-1.125-12.509-4.409-17.116-9.374a31.383 31.383 0 01-4.384-6.821c.492-.384 1.009-.73 1.548-1.034.748-.448 3.579-2.16 6.248-3.786l4.847-2.986 1.013 1.553a23.128 23.128 0 006.39 6.428 15.012 15.012 0 008.302 2.002 15.134 15.134 0 008.067-2.873 7.852 7.852 0 002.171-4.73 7.985 7.985 0 00-1.225-5.091c-1.306-1.965-3.976-3.617-11.563-7.075-5.95-2.108-11.369-5.603-15.853-10.224a23.68 23.68 0 01-4.619-8.84 37.166 37.166 0 01-.294-11.284c.891-4.32 3.023-8.246 6.109-11.249 3.085-3.003 6.974-4.936 11.14-5.537a40.562 40.562 0 0112.737.418zM104.66 80.76l.052 7.234H82.797v65.413H67.342V88.01H45.426v-7.105a73.127 73.127 0 01.19-7.293c.08-.115 13.405-.17 29.56-.14l29.399.085.085 7.204z"
      ></path>
    </svg>
  ),
  nextjs: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="353"
      height="353"
      fill="none"
      viewBox="0 0 353 353"
    >
      <circle cx="176.5" cy="176.5" r="176.5" fill="#fff"></circle>
      <path
        fill="#000"
        d="M164.94.095c-.759.069-3.174.31-5.348.483-50.138 4.52-97.101 31.569-126.846 73.143C16.183 96.837 5.59 123.058 1.587 150.83.173 160.526 0 163.39 0 176.535c0 13.145.173 16.008 1.587 25.703C11.18 268.515 58.35 324.2 122.325 344.832c11.456 3.691 23.533 6.21 37.267 7.728 5.348.587 28.468.587 33.816 0 23.706-2.622 43.789-8.487 63.595-18.596 3.037-1.553 3.623-1.967 3.209-2.312-.276-.207-13.216-17.561-28.743-38.538l-28.227-38.124-35.369-52.338c-19.461-28.774-35.472-52.304-35.61-52.304-.138-.034-.276 23.219-.345 51.614-.104 49.716-.138 51.717-.759 52.89-.898 1.691-1.588 2.381-3.037 3.14-1.104.552-2.07.656-7.281.656h-5.969l-1.588-1.001a6.45 6.45 0 01-2.312-2.519l-.724-1.552.069-69.175.103-69.21 1.07-1.345c.552-.725 1.725-1.656 2.553-2.105 1.415-.69 1.967-.759 7.937-.759 7.039 0 8.212.276 10.041 2.277.518.552 19.669 29.395 42.581 64.138 22.912 34.743 54.244 82.182 69.634 105.471l27.95 42.333 1.415-.932c12.526-8.142 25.776-19.735 36.266-31.81 22.326-25.635 36.715-56.893 41.546-90.221 1.414-9.695 1.587-12.558 1.587-25.703s-.173-16.009-1.587-25.704C341.82 84.554 294.65 28.869 230.675 8.237 219.391 4.58 207.383 2.062 193.926.544c-3.313-.346-26.122-.725-28.986-.449zm72.257 106.747c1.656.828 3.002 2.415 3.485 4.071.276.897.345 20.08.276 63.31l-.104 62.033-10.938-16.767-10.973-16.768v-45.093c0-29.154.138-45.542.345-46.335.552-1.932 1.76-3.451 3.416-4.348 1.415-.724 1.932-.793 7.35-.793 5.107 0 6.004.069 7.143.69z"
      ></path>
    </svg>
  ),
  reactjs: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2194"
      height="2500"
      viewBox="175.7 78 490.6 436.9"
    >
      <g fill="#11C9FB">
        <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z"></path>
        <circle cx="420.9" cy="296.5" r="45.7"></circle>
      </g>
    </svg>
  ),
  tailwindcss: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="515"
      height="320"
      fill="none"
      viewBox="0 0 515 320"
    >
      <path
        fill="url(#paint0_linear_2162_50)"
        d="M257.5 0c-68.666 0-111.584 35.556-128.75 106.667 25.75-35.557 55.791-48.89 90.125-40 19.588 5.07 33.59 19.79 49.088 36.079C293.21 129.285 322.428 160 386.25 160c68.666 0 111.584-35.556 128.75-106.667-25.75 35.557-55.791 48.89-90.125 40-19.588-5.07-33.59-19.79-49.088-36.079C350.54 30.714 321.322 0 257.5 0zM128.75 160C60.084 160 17.166 195.556 0 266.667c25.75-35.557 55.791-48.89 90.125-40 19.588 5.07 33.59 19.789 49.088 36.079C164.46 289.285 193.678 320 257.5 320c68.666 0 111.584-35.556 128.75-106.667-25.75 35.557-55.791 48.89-90.125 40-19.588-5.071-33.59-19.789-49.088-36.079C221.79 190.715 192.572 160 128.75 160z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_2162_50"
          x1="-3662.52"
          x2="-2027.97"
          y1="15728.6"
          y2="33439.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0FB3E7"></stop>
          <stop offset="0" stopColor="#23E7C5"></stop>
        </linearGradient>
      </defs>
    </svg>
  ),
};

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement | null>; // Container ref
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
  dotted?: boolean;
  dotSpacing?: number;
}

const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false, // Include the reverse prop
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = 'gray',
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = '#4d40ff',
  gradientStopColor = '#4043ff',
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  dotted = false,
  dotSpacing = 6,
}) => {
  const id = useId();
  const [pathD, setPathD] = useState('');

  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const strokeDasharray = dotted ? `${dotSpacing} ${dotSpacing}` : 'none';
  // Calculate the gradient coordinates based on the reverse prop
  const gradientCoordinates = reverse
    ? {
        x1: ['90%', '-10%'],
        x2: ['100%', '0%'],
        y1: ['0%', '0%'],
        y2: ['0%', '0%'],
      }
    : {
        x1: ['10%', '110%'],
        x2: ['0%', '100%'],
        y1: ['0%', '0%'],
        y2: ['0%', '0%'],
      };

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();

        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });

        const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`;
        setPathD(d);
      }
    };

    // Initialize ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
      updatePath();
    });

    // Observe the container element
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Call the updatePath initially to set the initial path
    updatePath();

    // Clean up the observer on component unmount
    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn('pointer-events-none absolute left-0 top-0 transform-gpu stroke-2', className)}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
      />
      <motion.path
        d={pathD}
        stroke={`url(#${id})`}
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
        initial={{
          strokeWidth: pathWidth,
          strokeOpacity: 0,
        }}
        animate={{
          strokeWidth: pathWidth * 1.5, // or any scale factor you prefer
          strokeOpacity: 1,
        }}
        transition={{
          duration: 2, // adjust as needed
          delay: delay, // use the same delay as the gradient animation
        }}
      />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits="userSpaceOnUse"
          initial={{
            x1: '0%',
            x2: '0%',
            y1: '0%',
            y2: '0%',
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1], // https://easings.net/#easeOutExpo
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0"></stop>
          <stop stopColor={gradientStartColor}></stop>
          <stop offset="32.5%" stopColor={gradientStopColor}></stop>
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0"></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
};
// Add this line after your component definition
AnimatedBeam.displayName = 'AnimatedBeam';

// Then export the component
export { AnimatedBeam };

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',
          className
        )}
      >
        {children}
      </div>
    );
  }
);
Circle.displayName = 'Circle';

// Then export the Circle component
export { Circle };
