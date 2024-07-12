import { CONTACT } from "../constants"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 ">
        <motion.h2 
          whileInView={{opacity: 1,  y: 0}} 
          initial={{opacity: 0, y: -100}}
          transition={{duration: 1}}
          className="my-10 text-center text-4xl">
          Get in touch
        </motion.h2>
        <div className="text-center tracking-tighter">
            <motion.a 
              whileInView={{opacity: 1,  y: 0}} 
              initial={{opacity: 0, y: 100}}
              transition={{duration: 1.5}}
              href="#" className="border-b">
                {CONTACT.email}
            </motion.a>
        </div>
    </div>
  )
}

export default Contact