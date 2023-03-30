import styles from '../../styles/socialMedia.module.scss';
import { BsWhatsapp, BsTwitter } from 'react-icons/bs';
import { SiInstagram } from 'react-icons/si';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='flex justify-center'>
            <ul className='fixed flex lg:flex-col gap-3 lg:top-[15%] lg:right-4 bottom-0 lg:bottom-[unset] bg-background bg-opacity-80 lg:bg-transparent pb-3 p-4 border border-cyan-300 border-b-0 lg:border-0 rounded-tl-3xl rounded-tr-3xl z-10'>
                <li>
                    <a
                        href="https://www.linkedin.com/in/d%C3%A1rio-matias-dales-gamma-587785243/"
                        target={'_blank'}
                        className={`${styles.link} w-12 lg:w-[70px] h-12 lg:h-[70px] flex justify-center items-center rounded-full bg-white group focus:scale-95`}
                    >
                        <FaLinkedinIn
                            className='w-8 lg:w-11 h-8 lg:h-11 text-background group-hover:text-white'
                        />
                    </a>
                </li>

                <li>
                    <a
                        href="https://github.com/dariomatias-dev"
                        target={'_blank'}
                        className={`${styles.link} w-12 lg:w-[70px] h-12 lg:h-[70px] flex justify-center items-center rounded-full bg-white group focus:scale-95`}
                    >
                        <FiGithub
                            className='w-8 lg:w-11 h-8 lg:h-11 text-background group-hover:text-white'
                        />
                    </a>
                </li>

                <li>
                    <a
                        href="https://www.instagram.com/dario_delta10/?theme=dark"
                        target={'_blank'}
                        className={`${styles.link} w-12 lg:w-[70px] h-12 lg:h-[70px] flex justify-center items-center rounded-full bg-white group focus:scale-95`}
                    >
                        <SiInstagram
                            className='w-8 lg:w-11 h-8 lg:h-11 text-background group-hover:text-white'
                        />
                    </a>
                </li>

                <li>
                    <a
                        href="https://wa.me/5583986404371"
                        target={'_blank'}
                        className={`${styles.link} w-12 lg:w-[70px] h-12 lg:h-[70px] flex justify-center items-center rounded-full bg-white group focus:scale-95`}
                    >
                        <BsWhatsapp
                            className='w-8 lg:w-11 h-8 lg:h-11 text-background group-hover:text-white'
                        />
                    </a>
                </li>

                <li>
                    <a
                        href="https://twitter.com/matiasdario752"
                        target={'_blank'}
                        className={`${styles.link} w-12 lg:w-[70px] h-12 lg:h-[70px] flex justify-center items-center rounded-full bg-white group focus:scale-95`}
                    >
                        <BsTwitter
                            className='w-8 lg:w-11 h-8 lg:h-11 text-background group-hover:text-white'
                        />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialMedia;
