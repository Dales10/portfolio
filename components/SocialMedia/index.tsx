import { BsWhatsapp, BsTwitter } from 'react-icons/bs';
import { SiInstagram } from 'react-icons/si';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <ul className='fixed flex flex-col gap-4 top-[18%] right-12'>
            <li>
                <a
                    href="https://www.linkedin.com/in/d%C3%A1rio-matias-dales-gamma-587785243/"
                    className='w-[75px] h-[75px] flex justify-center items-center rounded-full bg-white'
                >
                    <FaLinkedinIn
                        style={{
                            width: '45px',
                            height: '45px',
                            color: '#000005',
                        }}
                    />
                </a>
            </li>
            <li>
                <a
                    href="https://github.com/Dales10"
                    className='w-[75px] h-[75px] flex justify-center items-center rounded-full bg-white'
                >
                    <FiGithub
                        style={{
                            width: '45px',
                            height: '45px',
                            color: '#000005',
                        }}
                    />
                </a>
            </li>
            <li>
                <a
                    href="https://www.instagram.com/dario_delta10/?theme=dark"
                    className='w-[75px] h-[75px] flex justify-center items-center rounded-full bg-white'
                >
                    <SiInstagram
                        style={{
                            width: '45px',
                            height: '45px',
                            color: '#000005',
                        }}
                    />
                </a>
            </li>
            <li>
                <a
                    href="https://wa.me/5583986404371"
                    className='w-[75px] h-[75px] flex justify-center items-center rounded-full bg-white'
                >
                    <BsWhatsapp
                        style={{
                            width: '45px',
                            height: '45px',
                            color: '#000005',
                        }}
                    />
                </a>
            </li>
            <li>
                <a
                    href="" target={'_blank'}
                    className='w-[75px] h-[75px] flex justify-center items-center rounded-full bg-white'
                >
                    <BsTwitter
                        style={{
                            width: '45px',
                            height: '45px',
                            color: '#000005',
                        }}
                    />
                </a>
            </li>
        </ul>
    )
}

export default SocialMedia;
