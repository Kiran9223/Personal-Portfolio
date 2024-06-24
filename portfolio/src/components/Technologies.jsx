import {RiReactjsLine} from 'react-icons/ri';
import { IoLogoAngular } from "react-icons/io";
import { RiJavaLine } from "react-icons/ri";
import { SiSpringboot} from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">
            Technologies
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavaLine className="text-7xl text-red-600"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiSpringboot className="text-7xl text-green-600"/>
            </div>
           <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoAngular className="text-7xl text-red-600"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGolang className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJavascript className="text-7xl text-yellow-600"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-red-600"/>
            </div>
            
        </div>
    </div>
  )
}

export default Technologies