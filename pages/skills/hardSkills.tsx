import Image from 'next/image';
import styles from '../../styles/hardSkills.module.scss';
import style from '../../styles/title.module.scss';

const knownTechnologies = [
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

const hardSkills = () => {
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

            <div className='w-full lg:w-[calc(100%_-_100px)] flex flex-col items-center border-t-4 border-zinc-900 mt-40 xs:mt-52 md:mt-72 mb-28'>
                <h2 className='text-4xl md:text-5xl text-center font-extrabold my-44'>
                    Minhas Hard Skills
                </h2>

                <div className='flex flex-wrap justify-center gap-6'>
                    {
                        knownTechnologies.map(technologie => {
                            return (
                                <div className={`${styles.card} flex justify-center items-center w-36 h-36 bg-background border border-[#00DBDE] rounded-md transition duration-300`}>
                                    <div className='flex flex-col justify-between items-center gap-2 py-1'>
                                        <Image
                                            src={`/icons/${technologie.toLocaleLowerCase()}.png`}
                                            width={90}
                                            height={90}
                                            alt='Icon of React'
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
