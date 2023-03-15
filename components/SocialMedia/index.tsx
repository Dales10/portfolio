import { BsWhatsapp, BsTwitter } from 'react-icons/bs';
import { SiInstagram } from 'react-icons/si';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='flex justify-center'>
            <ul className='fixed flex lg:flex-col gap-4 lg:top-[16%] bottom-0 lg:right-12 bg-background bg-opacity-80 lg:bg-transparent border border-cyan-300 border-b-0 lg:border-0 rounded-tl-3xl rounded-tr-3xl pb-3 p-4 z-10'>
                <li>
                    <a
                        href="https://www.linkedin.com/in/d%C3%A1rio-matias-dales-gamma-587785243/"
                        className='w-14 lg:w-[75px] h-14 lg:h-[75px] flex justify-center items-center rounded-full bg-white'
                    >
                        <FaLinkedinIn
                            className='w-8 lg:w-11 h-8 lg:h-11 text-background'
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/Dales10"
                        className='w-14 lg:w-[75px] h-14 lg:h-[75px] flex justify-center items-center rounded-full bg-white'
                    >
                        <FiGithub
                            className='w-8 lg:w-11 h-8 lg:h-11 text-background'
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/dario_delta10/?theme=dark"
                        className='w-14 lg:w-[75px] h-14 lg:h-[75px] flex justify-center items-center rounded-full bg-white'
                    >
                        <SiInstagram
                            className='w-8 lg:w-11 h-8 lg:h-11 text-background'
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://wa.me/5583986404371"
                        className='w-14 lg:w-[75px] h-14 lg:h-[75px] flex justify-center items-center rounded-full bg-white'
                    >
                        <BsWhatsapp
                            className='w-8 lg:w-11 h-8 lg:h-11 text-background'
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="" target={'_blank'}
                        className='w-14 lg:w-[75px] h-14 lg:h-[75px] flex justify-center items-center rounded-full bg-white'
                    >
                        <BsTwitter
                            className='w-8 lg:w-11 h-8 lg:h-11 text-background'
                        />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialMedia;
