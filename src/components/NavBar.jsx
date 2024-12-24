import logo from "../assets/logo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className=" flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-10 object-contain h-8 w-8" src={logo} alt="My logo" />
        </div>
        <div className="mx-10 flex items-center justify-center gap-4 text-2xl">
            <div>
              <a href="http://www.linkedin.com/in/kiran-sukumar" target="_blank"><FaLinkedin/></a>
            </div>
            <div>
              <a href="https://github.com/Kiran9223" target="_blank"><FaGithub /></a>
            </div>
            
        </div>

    </nav>
  )
}

export default NavBar
