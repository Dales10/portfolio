import { useData } from '@/components/Context';

import styleButton from '../styles/button.module.scss';
import styleTitle from '../styles/title.module.scss';

import ProjectsCard from '@/components/ProjectsCard';

const Projetos = () => {
    const { data } = useData();

    return (
        <div className="mt-24 lg:mt-32 mx-10 md:mx-16 xl:ml-28">
            <span className='block w-[350px] sm:w-125 lg:w-[700px] h-[350px] sm:h-125 lg:h-[700px] absolute top-0 sm:-top-5 lg:-top-32 left-0 sm:-left-5 lg:-left-[155px] bg-[#0C009C] opacity-30 blur-[100px] sm:blur-[200px] -z-10' />

            <div className='w-full flex flex-col items-center md:items-start text-center md:text-left'>
                <h1 className={`${styleTitle.title} text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-black leading-tight`}>
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

            <div id='title' className='w-full lg:w-[calc(100%_-_100px)] border-t-4 border-zinc-900 pt-44 xs:mt-20 mt-32 md:mt-72 mb-36'>

                <div className='flex flex-wrap gap-2 justify-center'>
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
        </div>
    );
};

export default Projetos;
