'use client'
import { useTheme } from 'next-themes';
import Image from 'next/image'
import { LineShadowText } from './ui/line-shadow-text';


function AboutMe() {
    const theme = useTheme()
    const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black"
    return (<>
        <div className=' h-auto flex justify-between items-center z-10'>
            <div>
                <h1 className="text-3xl leading-none font-semibold tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl z-50">
                Hi, I'm 
                <LineShadowText className="italic" shadowColor={shadowColor}>
                   Tauhidul 
                </LineShadowText></h1>
                <p>Forntend Developer</p>
            </div>
            <div className='z-30'>
                <Image
                    src="/profile.png"
                    width={200}
                    height={200}
                    alt="Picture of the author"
                />
            </div>
        </div>

    </>);
}

export default AboutMe;