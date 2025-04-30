import { socialImgs } from "../constants";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center md:items-start items-center">                      
                <a
                        href="https://drive.google.com/file/d/1aNeuXOcZ9USUSybSk1p1mseMKDONqtHC/view?usp=sharing"
                        target="_blank"
                        className="text-sm text-blue-500 hover:underline"
                        rel="noopener noreferrer"
                    >
                        Check my Resume
                    </a>
                </div>
                <div className="socials">
                    {socialImgs.map((socialImg, index) => (
                        <a
                            key={index}
                            href={socialImg.url}
                            target="_blank"
                            className="icon"
                        >
                            <img
                                src={socialImg.imgPath}
                                alt={`${socialImg.name} icon`}
                                className="w-6 h-6 object-contain"
                            />
                        </a>
                    ))}
                </div>

                <div className="flex flex-col justify-center mt-4 md:mt-0">
                    <p className="text-center md:text-end text-sm text-gray-400">
                        © {new Date().getFullYear()} Rohan. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
