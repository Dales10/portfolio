import Link from 'next/link';
import styleTitle from '../../styles/title.module.scss';

const Skills = () => {
    return (
        <div className="mt-24 lg:mt-32 mx-10 md:mx-16 xl:ml-28">
            <span className='w-87.5 sm:w-125 lg:w-175 h-87.5 sm:h-125 lg:h-175 absolute top-0 sm:-top-5 lg:-top-32 left-0 sm:-left-5 lg:-left-40 bg-darkBlue opacity-30 blur-25 sm:blur-50 -z-10' />

            <div className='w-full flex flex-col items-center md:items-start text-center md:text-left'>
                <h1 className={`${styleTitle.title} text-5xl sm:text-6xl md:text-7xl lg:text-7.5xl font-black leading-tight`}>
                    Minhas Skills
                </h1>

                <p className='max-w-125 md:max-w-175 lg:max-w-200 xl:max-w-225 mt-12 lg:mt-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-justify lg:text-start font-bold leading-tight'>
                    Irei dividir as skills em dois grupos, sendo o primeiro das soft skills e o segundo das hard skills, para assim poder citá-las adequadamente.
                </p>
            </div>

            <div className='w-full lg:w-line border-y-4 border-zinc-900 mt-40 xs:mt-52 md:mt-72 mb-44'>
                <h2 className='text-4xl md:text-5xl text-center font-extrabold mt-44'>
                    Escolha logo abaixo por qual quer começar:
                </h2>

                <div className='flex justify-center gap-12 md:gap-28 lg:gap-44 mt-24 mb-40 text-2xl md:text-3xl font-extrabold'>
                    <h3 className={`${styleTitle.title} ${styleTitle.hover}`}>
                        <Link href='/skills/softSkills'>
                            Soft Skills
                        </Link>
                    </h3>
                    <h3 className={`${styleTitle.title} ${styleTitle.hover}`}>
                        <Link href='/skills/hardSkills'>
                            Hard Skills
                        </Link>
                    </h3>
                </div>
            </div>

            <span className='w-75 lg:w-[600px] h-52 absolute top-[800px] lg:top-[900px] right-1/4 bg-darkBlue opacity-30 blur-25 lg:blur-50 -z-10' />

            <h2 className='text-4xl md:text-5xl font-extrabold'>
                Conclusão
            </h2>

            <p className='text-xl md:text-2xl text-justify font-bold mt-20 lg:mt-32 lg:mr-52 mb-24 lg:mb-44 indent-10 leading-tight'>
                O mundo da tecnologia é muito amplo, todos os anos surgem novas ferramentas que deixam a criação de sites e softwares mais simples e eficiente. Citei apenas as que achei de maior relevância, como as principais bibliotecas por exemplo, mas estou sempre disposto em estudar ainda mais, desde que o momento permita.
            </p>


            <span className='w-75 lg:w-100 h-52 lg:h-75 absolute top-[1600px] md:top-[1600px] lg:top-[1800px] -left-10 bg-darkBlue opacity-30 blur-25 lg:blur-50 -z-10' />
        </div>
    );
};

export default Skills;
