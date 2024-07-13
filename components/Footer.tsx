
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full pt-5 pb-10" id="contact">
            <div className="flex mt-10 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">Created by Jessica Tan 2024</p>
                <div className="flex items-center md:gap-3 gap-6">
                <a href="https://www.linkedin.com/in/t-jessica/"><CiLinkedin size={50} /></a>
                <a href="https://github.com/tjessica13"><FaGithub size={40} /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer