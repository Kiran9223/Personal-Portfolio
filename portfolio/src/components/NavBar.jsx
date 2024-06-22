import logo from "../assets/logo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 object-contain h-8 w-8" src={logo} alt="My logo" />
        </div>
        <div className="m-2 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin/>
            <FaGithub />
        </div>

    </nav>
  )
}

export default NavBar
