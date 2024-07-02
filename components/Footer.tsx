
import MagicButton from '@/components/ui/MagicButton'
import {useState} from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const text = "jessicatan.business@gmail.com";
        navigator.clipboard.writeText(text);
        setCopied(true);
      };

    return (
        <footer className="w-full pt-40 pb-10" id="contact">
            <div className="flex flex-col items-center">
                <h1 className="heading text-black-100 dark:text-white">
                    Ready to take {" "}
                    <span className="text-purple">your</span> 
                    {" "} digital presence to the next level?
                </h1>
                <p className="text-black-200 dark:text-white-200 md:mt-10 my-5 text-center">Reach out to me and we can discuss how I can help you achieve your goals</p>
                
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                handleClick={handleCopy}
              />
            </div>
            <div className="flex mt-10 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">Created by Jessica</p>
                <div className="flex items-center md:gap-3 gap-6">
                <a href="/LinkedIn"><CiLinkedin size={50} /></a>
                <a href="/GitHub"><FaGithub size={40} /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer