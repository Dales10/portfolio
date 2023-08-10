import { BsWhatsapp, BsTwitter } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

import SocialMediaLink from "../SocialMediaLink";

const socialMedias = [
    {
        link: "https://www.linkedin.com/in/dariomatias-dev/",
        icon: FaLinkedinIn,
    },
    {
        link: "https://github.com/dariomatias-dev/",
        icon: FiGithub,
    },
    {
        link: "https://www.instagram.com/dariomatias_dev/?theme=dark/",
        icon: SiInstagram,
    },
    {
        link: "https://wa.me/5583986404371/",
        icon: BsWhatsapp,
    },
    {
        link: "https://twitter.com/matiasdario752/",
        icon: BsTwitter,
    },
];

const SocialMedia = () => {
    return (
        <div className="flex justify-center">
            <ul className="fixed flex lg:flex-col gap-3 lg:top-[15%] lg:right-2 bottom-0 lg:bottom-[unset] bg-background bg-opacity-80 lg:bg-transparent pb-3 p-4 border border-cyan-300 border-b-0 lg:border-0 rounded-tl-3xl rounded-tr-3xl z-10">
                {socialMedias.map((socialMedia, index) => {
                    return (
                        <SocialMediaLink
                            key={index}
                            socialMedia={socialMedia}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default SocialMedia;
