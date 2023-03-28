import "aos/dist/aos.css";

import { useState, useEffect } from 'react';

import TecnologiesCard from '@/components/TecnologiesCard';

import { currentSoftSkills, futureSoftSkills, technologiesGradient } from '../../constants/skills';
import { useData } from '@/components/Context';

const HardSkills = () => {
    const [stateTechnologies, setStateTechnologie] = useState<boolean[]>([]);
    const { data } = useData();

    const [showInfoTechnologie, setShowInfoTechnologie] = useState({
        technologie: 'TypeScript',
        ...data.skills.TypeScript,
        gradient: technologiesGradient.TypeScript,
    });

    const setInfoTechnologie = (technologie: string, position: number) => {
        setShowInfoTechnologie({
            technologie,
            ...data.skills[technologie as keyof typeof data.skills],
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
        setStateTechnologie(Array(currentSoftSkills.length + futureSoftSkills.length).fill(false));
    }, []);

    return (
        <div className="mt-24 lg:mt-32 mx-10 md:mx-16 xl:ml-28">
            <span className='w-75 s:w-87.5 sm:w-125 lg:w-17 h-75 s:h-87.5 sm:h-125 lg:h-175 absolute top-0 sm:-top-5 lg:-top-12 left-0 sm:-left-5 lg:-left-4 bg-darkBlue opacity-30 blur-25 -z-10' />

            <div
                data-aos='fade-right'
                className='w-full flex flex-col items-center md:items-start text-center md:text-left'
            >
                <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-7.5xl font-black leading-tight'>
                    Hard Skills
                </h1>

                <p className='max-w-125 md:max-w-175 lg:max-w-200 xl:max-w-225 mt-12 lg:mt-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-justify lg:text-start font-bold leading-tight'>
                    Compreendem as habilidades técnicas adquiridas durante a vida, por diversos meios, seja na escola, cursos, faculdades ou workshops, ou seja, por meio dos estudos e experiência prática.
                </p>
            </div>

            <div id='title' className='w-full lg:w-line border-t-4 border-zinc-900 pt-44 xs:mt-20 mt-32 md:mt-72 mb-36'>
                <h2
                    data-aos='fade-up'
                    className='text-3xl xs:text-4xl md:text-5xl text-center font-extrabold'
                >
                    Minhas Hard Skills
                </h2>

                <div className='h-75'>
                    <div
                        data-aos='fade-right'
                        className='max-w-175 flex flex-col gap-3 mt-24 font-normal'
                    >
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
                            <span className='font-bold'>Criado(a) por:</span> {showInfoTechnologie.createdBy}.
                        </p>
                        <p>
                            <span className='font-bold'>Lançado(a) em:</span> {showInfoTechnologie.created}.
                        </p>
                    </div>
                </div>

                <span className='w-75 s:w-100 h-75 s:h-100 absolute top-[1100px] -left-[10%] bg-darkBlue opacity-30 blur-25 lg:blur-50 -z-10' />

                <div className='flex flex-wrap justify-between gap-6 mt-32 sm:mt-28 pb-28 border-b-4 border-zinc-900'>
                    {
                        currentSoftSkills.map((technologie, index) => {
                            return (
                                <a
                                    key={technologie}
                                    href="#title"
                                    data-aos='fade-up'
                                    className='mx-auto'
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

                <h2
                    data-aos='fade-up'
                    className='max-w-[1100px] text-2xl xs:text-3xl sm:text-4xl text-justify sm:text-start font-bold mt-36'
                >
                    Mas também há as tecnologias que tenho interesse em aprender futuramente, ou quando tiver uma oportunidade, que são as seguintes:
                </h2>

                <div className='flex flex-wrap justify-between gap-6 mt-20'>
                    {
                        futureSoftSkills.map((technologie, index) => {
                            return (
                                <a
                                    key={technologie}
                                    href="#title"
                                    data-aos='fade-up'
                                    className='mx-auto'
                                >
                                    <TecnologiesCard
                                        technologie={technologie}
                                        setInfoTechnologie={setInfoTechnologie}
                                        stateTechnologie={stateTechnologies[index + currentSoftSkills.length]}
                                        position={index + currentSoftSkills.length}
                                    />
                                </a>
                            )
                        })
                    }
                </div>
            </div>

            <span className='w-75 s:w-87.5 h-75 s:h-87.5 absolute top-[2400px] -left-[10%] bg-darkBlue opacity-30 blur-25 lg:blur-50 -z-10' />

            <span className='w-75 s:w-87.5 sm:w-75 h-75 sm:h-96 absolute top-[3200px] sm:top-[2550px] md:top-[2400px] left-0 s:left-[10%] xs:left-1/4 sm:left-[40%] bg-darkBlue opacity-30 blur-25 lg:blur-50 -z-10' />
        </div>
    );
};

export default HardSkills;
