import { HERO_CONTENT } from "../constants/index.js";
import { Typewriter } from "react-simple-typewriter";
import Tilt from 'react-parallax-tilt';
import Backend from "../assets/backend.png";
import Fullstack from "../assets/fullstack.png";

const Hero = () => {
  return (
    <div className="border-b mx-10 border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                        Kiran Sukumar
                    </h1>
                    <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                        <Typewriter words={[' Full Stack Developer.', ' Software Engineer.','Back-end Developer.']} loop={0} cursor cursorStyle='_' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                    </span>
                    <p className="my-2 max-w-xl py-6 font-light text-justify tracking-tighter">
                        {HERO_CONTENT}
                    </p>
                </div>
            </div>
            <div className="w-full mx-20 lg:w-1/3 lg:p-12">
            <div className="mb-2 flex justify-center">
                    <Tilt className="rose-sky-gradient  xs:w-[250px] w-full p-[1px] bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex items-center flex-col" glareColor="#A91079" glareEnable={true} gyroscope={true} glareBorderRadius='20px' glareMaxOpacity={0.5} glarePosition='all' perspective={500} style={{transformStyle: "preserve-3d"}}>
                        <img src={Fullstack} alt="Fullstack Developer" className='w-53 h-50 object-contain pointer-events-none' style={{transform: "translateZ(100px)" }} />
                        <h3 className="text-black  text-[20px] font-bold text-center" style={{transform: "translateZ(50px)" }}>Fullstack Developer</h3>
		            </Tilt>
                </div>
                
                <div className="flex justify-center">
                    <Tilt className="blood-blue-gradient  xs:w-[250px] w-full p-[1px] bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex items-center flex-col" glareColor="#A91079" glareEnable={true} gyroscope={true} glareBorderRadius='20px' glareMaxOpacity={0.5} glarePosition='all' perspective={500} style={{transformStyle: "preserve-3d"}}>
                        <img src={Backend} alt="Back-end Developer" className='w-50 h-56 object-contain pointer-events-none' style={{transform: "translateZ(100px)" }} />
                        <h3 className="text-black  text-[20px] font-bold text-center" style={{transform: "translateZ(50px)" }}>Back-end Developer</h3>
		            </Tilt>
                </div>
                

            </div>
        </div>    
    </div>
  )
}

export default Hero