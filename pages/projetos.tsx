import styleButton from '../styles/button.module.scss';
import style from '../styles/title.module.scss';
import Image from 'next/image';
import { TfiWorld } from 'react-icons/tfi';
import { BsGithub } from 'react-icons/bs';

const Projetos = () => {
    return (
        <div className="mt-24 lg:mt-32 mx-10 md:mx-16 xl:ml-28">
            <span className='block w-[350px] sm:w-125 lg:w-[700px] h-[350px] sm:h-125 lg:h-[700px] absolute top-0 sm:-top-5 lg:-top-32 left-0 sm:-left-5 lg:-left-[155px] bg-[#0C009C] opacity-30 blur-[100px] sm:blur-[200px] -z-10' />

            <div className='w-full flex flex-col items-center md:items-start text-center md:text-left'>
                <h1 className={`${style.title} text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-black leading-tight`}>
                    Meus Projetos
                </h1>

                <p className='max-w-[500px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] mt-12 lg:mt-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-justify lg:text-start font-bold leading-tight'>
                    Nesta página será reunido todos os meus principais projetos, os quais usam as tecnologias que tenho conhecimento.
                </p>
            </div>

            <div className='flex justify-center lg:justify-start'>
                <button className={`${styleButton.button} w-64 sm:w-[300px] h-20 sm:h-20 mt-24 md:mt-20 lg:mt-24  text-2xl sm:text-3xl`}>
                    Começar
                </button>
            </div>

            <div className='w-full lg:w-[calc(100%_-_200px)] h-1 bg-[#090909] mt-44 mb-28' />

            <div>
                <div className='w-80 bg-[#121219] rounded-md mb-6 overflow-hidden'>
                    <Image
                        src='/deinocheirus.jpg'
                        width={300}
                        height={300}
                        alt='Image of Deinocheirus'
                        className='w-full h-auto'
                    />

                    <h1 className='flex justify-between text-base font-bold mx-5 my-4'>
                        Portfólio

                        <div className='flex gap-3'>
                            <a
                                href='#'
                            >
                                <TfiWorld className='w-6 h-6' />
                            </a>

                            <a
                                href='#'
                            >
                                <BsGithub className='w-6 h-6 text-white' />
                            </a>
                        </div>
                    </h1>

                    <div className='flex flex-wrap justify-center gap-3 text-xs font-bold border-t border-zinc-700 mt-5 py-3'>
                        <div className='bg-[#272737] rounded-md mx-auto px-2 py-1'>
                            TypeScript
                        </div>

                        <div className='bg-[#272737] rounded-md mx-auto px-2 py-1'>
                            SASS
                        </div>

                        <div className='bg-[#272737] rounded-md mx-auto px-2 py-1'>
                            Next.js
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projetos;
