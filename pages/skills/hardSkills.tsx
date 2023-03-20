import { useState, useEffect } from 'react';
import style from '../../styles/title.module.scss';

import TecnologiesCard from '@/components/TecnologiesCard';

import { currentSoftSkills, futureSoftSkills, infos, technologiesGradient } from '../../constants';

const HardSkills = () => {
    const [stateTechnologies, setStateTechnologie] = useState<boolean[]>([]);

    const [showInfoTechnologie, setShowInfoTechnologie] = useState({
        technologie: 'TypeScript',
        ...infos.TypeScript,
        gradient: technologiesGradient.TypeScript,
    });

    const setInfoTechnologie = (technologie: string, position: number) => {
        setShowInfoTechnologie({
            technologie,
            ...infos[technologie as keyof typeof infos],
            gradient: technologiesGradient[technologie as keyof typeof technologiesGradient],
        });

        const amountOfActiveCards = (JSON.stringify(stateTechnologies).match(/true/g) || []).length;
        if (amountOfActiveCards === 1 && !stateTechnologies[position]) {
            const newState = Array(stateTechnologies.length).fill(false);
            newState[position] = true;
            setStateTechnologie(newState);
        } else {
            const newState = stateTechnologies;
            newState[position] = !newState[position];
            setStateTechnologie(newState);
        }
    };

    useEffect(() => {
        if (stateTechnologies.length > 0)
            setStateTechnologie(Array(currentSoftSkills.length).fill(false));
    }, []);

    return (
        <div className="mt-24 lg:mt-32 mx-10 md:mx-16 xl:ml-28">
            <span className='block w-[350px] sm:w-125 lg:w-[700px] h-[350px] sm:h-125 lg:h-[700px] checked:n absolute top-0 sm:-top-5 lg:-top-32 left-0 sm:-left-5 lg:-left-[155px] bg-[#0C009C] opacity-30 blur-[100px] sm:blur-[200px] -z-10' />

            <div className='w-full flex flex-col items-center md:items-start text-center md:text-left'>
                <h1 className={`${style.title} text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-black leading-tight`}>
                    Hard Skills
                </h1>

                <p className='max-w-[500px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] mt-12 lg:mt-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-justify lg:text-start font-bold leading-tight'>
                    Compreendem as habilidades técnicas adquiridas durante a vida, por diversos meios, seja na escola, cursos, faculdades ou workshops, ou seja, por meio dos estudos e experiência prática.
                </p>
            </div>

            <div id='title' className='w-full lg:w-[calc(100%_-_100px)] border-t-4 border-zinc-900 pt-44 xs:mt-20 mt-32 md:mt-72 mb-36'>
                <h2 className='text-3xl xs:text-4xl md:text-5xl text-center font-extrabold'>
                    Minhas Hard Skills
                </h2>

                <div className='max-w-[700px] flex flex-col gap-3 mt-24 font-normal'>
                    <h2 className='text-2xl xs:text-3xl md:text-4xl text-center xs:text-start font-extrabold'>
                        <span
                            style={{
                                display: 'inline-block',
                                backgroundImage: `linear-gradient(to right, ${showInfoTechnologie.gradient})`,
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            {showInfoTechnologie.technologie}
                        </span>
                    </h2>
                    <p className='text-base xs:text-lg text-justify xs:text-start'>
                        {showInfoTechnologie.info}
                    </p>
                    <p>
                        <span className='font-bold'>Criado por:</span> {showInfoTechnologie.createdBy}.
                    </p>
                    <p>
                        <span className='font-bold'>Lançado em:</span> {showInfoTechnologie.created}.
                    </p>
                </div>

                <span className='w-[400px] h-[400px] absolute top-[1100px] -left-[10%] bg-[#0C009C] opacity-30 blur-[100px] lg:blur-[200px] -z-10' />

                <div className='flex flex-wrap justify-between gap-6 mt-24 sm:mt-44 pb-28 border-b-4 border-zinc-900'>
                    {
                        currentSoftSkills.map((technologie, index) => {
                            return (
                                <a
                                    key={technologie}
                                    href="#title"
                                >
                                    <TecnologiesCard
                                        technologie={technologie}
                                        setInfoTechnologie={setInfoTechnologie}
                                        stateTechnologie={stateTechnologies[index]}
                                        position={index}
                                    />
                                </a>
                            )
                        })
                    }
                </div>

                <h2 className='max-w-[1100px] text-2xl xs:text-3xl sm:text-4xl text-justify sm:text-start font-bold mt-36'>
                    Mas também há as tecnologias que tenho interesse em aprender futuramente, ou quando tiver uma oportunidade, que são as seguintes:
                </h2>

                <div className='flex flex-wrap justify-between gap-6 mt-20'>
                    {
                        futureSoftSkills.map((technologie, index) => {
                            return (
                                <a
                                    key={technologie}
                                    href="#title"
                                >
                                    <TecnologiesCard
                                        technologie={technologie}
                                        setInfoTechnologie={setInfoTechnologie}
                                        stateTechnologie={stateTechnologies[index]}
                                        position={index}
                                    />
                                </a>
                            )
                        })
                    }
                </div>
            </div>

            <span className='w-[350px] h-[350px] absolute top-[2700px] -left-[10%] bg-[#0C009C] opacity-30 blur-[100px] lg:blur-[200px] -z-10' />

            <span className='w-[300px] sm:w-[350px] h-[300px] sm:h-[350px] absolute top-[3800px] xs:top-[3100px] sm:top-[2700px] left-1/4 sm:left-[40%] bg-[#0C009C] opacity-30 blur-[100px] lg:blur-[200px] -z-10' />
        </div>
    );
};

export default HardSkills;
