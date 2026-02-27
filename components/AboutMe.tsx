'use client'
import { useTheme } from 'next-themes';
import Image from 'next/image'
import { LineShadowText } from './ui/line-shadow-text';
import Typewriter from 'typewriter-effect';

import { ShimmerButton } from './ui/shimmer-button';
import { RainbowButton } from './ui/rainbow-button';
import Link from 'next/link';



function AboutMe() {
    const theme = useTheme()
    const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black"
    return (<>
        <div className=' h-auto flex justify-between flex-col md:flex-row items-center z-10'>
            <div>
                <h1 className="text-3xl leading-none font-semibold tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl z-50">
                    Hi, I'm
                    <LineShadowText className="italic" shadowColor={shadowColor}>
                        Tauhidul
                    </LineShadowText></h1>
                <h1 className='text-3xl mt-3.5'>
                    <Typewriter
                        options={{
                            strings: ['Frontend Developer', 'Mern Stack developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>

            </div>
            <div className='z-30 mt-7'>
                <Image
                    src="/profile.png"
                    width={300}
                    height={300}
                    alt="Picture of the author"
                />

            </div>
        </div>
        <div>
            <h3 className='text-2xl font-semibold my-8'>About</h3>
            <p className='text-justify'>Hi, I’m <strong>Tauhidul Islam,</strong> an aspiring MERN Stack Developer with a strong focus on front-end development. My journey into web development began at the end of 2023 with a deep curiosity about how websites work. What started as exploration quickly grew into a full-fledged passion and career goal.

                I began with HTML, CSS, and JavaScript, and through consistent practice and dedication, I expanded my skill set to include TypeScript, React.js, Next.js, and Tailwind CSS. I also have hands-on experience with Firebase Authentication and a foundational understanding of backend technologies such as Express.js and MongoDB.

                Creating clean, responsive, and visually appealing user interfaces is my forte. I enjoy transforming complex ideas into functional, interactive, and user-friendly web experiences. My focus is always on writing maintainable code, following modern best practices, and building products that deliver real value to users.

                I am continuously learning, improving my problem-solving skills, and working on real-world projects to strengthen my development expertise. My goal is to grow as a professional developer and contribute to impactful web applications.</p>
        </div>
           
<RainbowButton className='mt-7'> <a 
    href="https://www.linkedin.com/in/tauhidul-islam-s0212" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Connect on LinkedIn
  </a></RainbowButton>
    </>);
}

export default AboutMe;