import styles from '../../styles/social_media.module.scss';
import { BsWhatsapp, BsTwitter } from 'react-icons/bs';
import { SiInstagram } from 'react-icons/si';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='flex justify-center'>
            <ul className='fixed flex lg:flex-col gap-4 lg:top-[18%] bottom-0 lg:right-4 bg-background bg-opacity-80 lg:bg-transparent border border-cyan-300 border-b-0 lg:border-0 rounded-tl-3xl rounded-tr-3xl pb-3 p-4 z-10'>
                <li>
                    <a
                        href="https://www.linkedin.com/in/d%C3%A1rio-matias-dales-gamma-587785243/"
                        target={'_blank'}
                        className={`${styles.link} w-14 lg:w-4.7 h-14 lg:h-4.7 flex justify-center items-center rounded-full bg-white group`}
                    >
                        <FaLinkedinIn
                            className='w-8 lg:w-11 h-8 lg:h-11 text-background group-hover:text-white'
                        />
                    </a>
                </li>

                <li>
                    <a
                        href="https://github.com/Dales10"
                        target={'_blank'}
                        className={`${styles.link} w-14 lg:w-4.7 h-14 lg:h-4.7 flex justify-center items-center rounded-full bg-white transition duration-100 group`}
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
                        className={`${styles.link} w-14 lg:w-4.7 h-14 lg:h-4.7 flex justify-center items-center rounded-full bg-white transition duration-100 group`}
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
                        className={`${styles.link} w-14 lg:w-4.7 h-14 lg:h-4.7 flex justify-center items-center rounded-full bg-white transition duration-100 group`}
                    >
                        <BsWhatsapp
                            className='w-8 lg:w-11 h-8 lg:h-11 text-background group-hover:text-white'
                        />
                    </a>
                </li>

                <li>
                    <a
                        href=""
                        target={'_blank'}
                        className={`${styles.link} w-14 lg:w-4.7 h-14 lg:h-4.7 flex justify-center items-center rounded-full bg-white transition duration-100 group`}
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
