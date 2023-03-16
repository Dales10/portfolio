import { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/hardSkills.module.scss';
import style from '../../styles/title.module.scss';

const currentSoftSkills = [
    'TypeScript',
    'React',
    'Next.js',
    'Firebase',
    'TailwindCSS',
    'SASS',
    'Node.js',
    'Prisma',
    'MySQL',
    'PostgreSQL',
    'SQLite',
    'Git',
    'GitHub',
    'Express.js',
    'Fastify',
];

const futureSoftSkills = [
    'C#',
    'C++',
    'Python',
    'Kotlin',
    'Lua',
    'Nest.js',
    'React Native',
    'Mongodb',
    'GraphQL',
    '.Net',
];

const infos = {
    'TypeScript': 'Se trata de uma ferramenta/ linguagem de programação que adiciona tipagem estática opcional ao JavaScript, tornando o desenvolvimento de projetos mais seguros, pela correção de erros de tipagem em tempo real. Lançado pela Microsft em 2012.',
    'Firebase': 'O Firebase é um ORM frontend do Google conectado a um banco de dados do tipo NoSQL, com o objetivo de guardar dados de forma simples e rápida, e pode ser usado gratuitamente. Criado pelo Google em 2004.',
    'React': 'É uma biblioteca JavaScript usado para criar interfaces de usuário (UI) em aplicativos web. Ele é fácil de usar, altamente flexível e escalável, e é usado por muitas empresas de tecnologia, incluindo o Facebook, Instagram e Airbnb. Foi criado pelo Facebook atual Meta em 2013.',
    'TailwindCSS': 'Framework CSS que permite criar layouts de forma rápida e simples, usando uma estrutura CSS pronto em formato de várias classes utilitárias, opinativas e de propósito único, que podem ser usadas diretamente dentro da marcação de um texto para projetar um elemento. Criado em 2017 por Adam Wathan.',
};

const hardSkills = () => {
    const [showInfoTechnologie, setShowInfoTechnologie] = useState({
        technologie: 'TypeScript',
        info: infos.TypeScript,
    });

    const setInfoTechnologie = (technologie: string) => {
        setShowInfoTechnologie({
            technologie,
            info: infos[technologie as keyof typeof infos],
        });
    };

    return (
        <div className="mt-24 lg:mt-32 mx-10 md:mx-16 xl:ml-28">
            <span className='block w-[350px] sm:w-125 lg:w-[700px] h-[350px] sm:h-125 lg:h-[700px] absolute top-0 sm:-top-5 lg:-top-32 left-0 sm:-left-5 lg:-left-[155px] bg-[#0C009C] opacity-30 blur-[100px] sm:blur-[200px] -z-10' />

            <div className='w-full flex flex-col items-center md:items-start text-center md:text-left'>
                <h1 className={`${style.title} text-[80px] font-black leading-tight`}>
                    Hard Skills
                </h1>

                <p className='max-w-[500px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] mt-12 lg:mt-20 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight'>
                    Compreendem as habilidades técnicas adquiridas durante a vida, por diversos meios, seja na escola, cursos, faculdades ou workshops, ou seja, por meio dos estudos e experiência prática.
                </p>
            </div>

            <div className='w-full lg:w-[calc(100%_-_100px)] border-t-4 border-zinc-900 pt-44 xs:mt-52 md:mt-72 mb-36'>
                <h2 className='text-4xl md:text-5xl text-center font-extrabold'>
                    Minhas Hard Skills
                </h2>

                <div
                    className='max-w-[800px] flex flex-col gap-3 mt-24 font-extrabold'
                >
                    <h2 className='text-5xl '>
                        {showInfoTechnologie.technologie}
                    </h2>
                    <p className='text-2xl'>
                        {showInfoTechnologie.info}
                    </p>
                </div>

                <div className='flex flex-wrap justify-between gap-6 mt-44 pb-28 border-b-4 border-zinc-900'>
                    {
                        currentSoftSkills.map(technologie => {
                            return (
                                <div
                                    key={technologie}
                                    onClick={() => setInfoTechnologie(technologie)}
                                    className={`${styles.card} flex justify-center items-center w-36 h-36 bg-background border border-[#00DBDE] rounded-[5px] mx-auto transition duration-300`}
                                >
                                    <div className='flex flex-col justify-between items-center gap-2 py-1'>
                                        <Image
                                            src={`/icons/${technologie
                                                .toLocaleLowerCase()
                                                .replace(' ', '_')
                                                .replace('#', '_sharp')
                                                .replace('.net', 'dot_net')
                                                }.png`}
                                            width={90}
                                            height={90}
                                            alt={`${technologie} icon.`}
                                        />
                                        <h2 className='text-xl font-semibold'>
                                            {technologie}
                                        </h2>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <h2 className='max-w-[1100px] text-4xl font-bold mt-36'>
                    Mas também há as tecnologias que tenho interesse em aprender futuramente, ou quando tiver uma oportunidade, que são as seguintes:
                </h2>

                <div className='flex flex-wrap justify-between gap-6 mt-20'>
                    {
                        futureSoftSkills.map(technologie => {
                            return (
                                <div
                                    key={technologie}
                                    className={`${styles.card} flex justify-center items-center w-36 h-36 bg-background border border-[#00DBDE] rounded-[5px] mx-auto transition duration-300`}
                                >
                                    <div className='flex flex-col justify-between items-center gap-2 py-1'>
                                        <Image
                                            src={`/icons/${technologie
                                                .toLocaleLowerCase()
                                                .replace(' ', '_')
                                                .replace('#', '_sharp')
                                                .replace('.net', 'dot_net')
                                                }.png`}
                                            width={90}
                                            height={90}
                                            alt={`${technologie} icon.`}
                                        />
                                        <h2 className='text-xl font-semibold'>
                                            {technologie}
                                        </h2>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default hardSkills;
