import {FaGithub, FaLinkedin} from "react-icons/fa";
import {FaSquareUpwork} from "react-icons/fa6";

export const Footer = () => {
    return (
        <>
        <div className="w-full h-fit ">
            <div className="flex justify-center p-8">
                <div className="w-5xl ">
                    <div className="bg-white dark:bg-dark-mode  flex flex-wrap justify-between gap-3">
                        <h1 className="text-2xl font-extrabold">Roni Mardani Sore <br/>
                        <span className="text-lg md:text-sm text-gray-500 font-medium "> Based in Philippines</span>
                        </h1>
                        <p className="text-xl md:text-lg text-gray-700">Website Designed in Figma. Built with React.js <br/> and Tailwind CSS.</p>
                    </div>
                    <div className="flex justify-between items-center mt-5 gap-3 flex-wrap">
                        <p>© 2025 Roni. All rights are reserved.</p>
                        <div className="flex gap-10 ">
                            <FaGithub size={30} cursor={"pointer"} />
                            <FaSquareUpwork size={30} cursor={"pointer"} />
                            <FaLinkedin size={30} cursor={"pointer"} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default Footer