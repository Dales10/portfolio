import "aos/dist/aos.css";

import { useData } from '@/components/Context';

import styleButton from '../styles/button.module.scss';

import ProjectsCard from '@/components/ProjectsCard';

const Projetos = () => {
    const { data } = useData();

    return (
        <div className="mt-24 lg:mt-32 mx-10 md:mx-16 xl:ml-28">
            <span className='w-87.5 sm:w-125 lg:w-175 h-87.5 sm:h-125 lg:h-175 absolute top-0 sm:-top-5 lg:-top-32 left-0 sm:-left-5 lg:-left-40 bg-darkBlue opacity-30 blur-25 sm:blur-50 -z-10' />

            <div data-aos='fade-right'>
                <div className='w-full flex flex-col items-center md:items-start text-center md:text-left'>
                    <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-7.5xl font-black leading-tight'>
                        Meus Projetos
                    </h1>

                    <p className='max-w-125 md:max-w-175 lg:max-w-200 xl:max-w-225 mt-12 lg:mt-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-justify lg:text-start font-bold leading-tight'>
                        Nesta página será reunido todos os meus principais projetos, os quais usam as tecnologias que tenho conhecimento.
                    </p>
                </div>

                <div className='flex justify-center md:justify-start'>
                    <button className={`${styleButton.button} w-60 sm:w-[300px] h-20 sm:h-24 mt-24 md:mt-20 lg:mt-24 text-2xl sm:text-3xl`}>
                        <a
                            href="#lista"
                            className='flex justify-center items-center w-full h-full rounded-3xl'
                        >
                            Começar
                        </a>
                    </button>
                </div>
            </div>

            <div
                id='title'
                className='w-full lg:w-line border-t-4 border-zinc-900 pt-44 xs:mt-20 mt-32 md:mt-72 mb-36'
            >

                <div
                    id='lista'
                    className='flex flex-wrap gap-2 justify-center'
                >
                    {
                        data.projects.map((projectData, index) => {
                            return (
                                <ProjectsCard
                                    key={index}
                                    projectData={projectData}
                                />
                            )
                        })
                    }
                </div>
            </div>

            <span className='block w-80 xs:w-100 h-80 xs:h-125 sm:h-52 lg:h-[450px] absolute top-[900px] xs:top-[800px] sm:top-[1100px] left-[5%] xs:left-[15%] md:left-1/4 bg-darkBlue opacity-30 blur-37.5 -z-10' />
        </div>
    );
};

export default Projetos;
