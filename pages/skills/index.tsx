import Link from 'next/link';
import style from '../../styles/title.module.scss';

const Skills = () => {
    return (
        <div className="mt-24 lg:mt-32 mx-10 md:mx-16 xl:ml-28">
            <span className='block w-[350px] sm:w-125 lg:w-[700px] h-[350px] sm:h-125 lg:h-[700px] absolute top-0 sm:-top-5 lg:-top-32 left-0 sm:-left-5 lg:-left-[155px] bg-[#0C009C] opacity-30 blur-[100px] sm:blur-[200px] -z-10' />

            <div className='w-full flex flex-col items-center md:items-start text-center md:text-left'>
                <h1 className={`${style.title} text-[80px] font-black leading-tight`}>
                    Minhas Skills
                </h1>

                <p className='max-w-[500px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] mt-12 lg:mt-20 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight'>
                    Irei dividir as skills em dois grupos, sendo o primeiro das soft skills e o segundo das hard skills, para assim poder citá-las adequadamente.
                </p>
            </div>

            <div className='w-full lg:w-[calc(100%_-_100px)] border-y-4 border-zinc-900 mt-40 xs:mt-52 md:mt-72 mb-44'>
                <h2 className='text-4xl md:text-5xl text-center font-extrabold mt-44'>
                    Escolha logo abaixo por qual quer começar:
                </h2>

                <div className='flex justify-center gap-44 mt-24 mb-40'>
                    <h3 className={`${style.title} text-3xl font-extrabold`}>
                        <Link href='/skills/softSkills'>
                            Soft Skills
                        </Link>
                    </h3>
                    <h3 className={`${style.title} text-3xl font-extrabold`}>
                        <Link href='/skills/hardSkills'>
                            Hard Skills
                        </Link>
                    </h3>
                </div>
            </div>

            <h2 className='text-4xl md:text-5xl font-extrabold'>
                Conclusão
            </h2>

            <p className='text-xl md:text-2xl text-justify font-bold mt-14 md:mt-32 lg:mr-52 mb-44 indent-10 leading-tight'>
                O mundo da tecnologia é muito amplo, todos os anos surgem novas ferramentas que deixam a criação de sites e softwares mais simples e eficiente. Citei apenas as que achei de maior relevância, como as principais bibliotecas por exemplo, mas estou sempre disposto em estudar ainda mais, desde que o momento permita.
            </p>
        </div>
    );
};

export default Skills;
