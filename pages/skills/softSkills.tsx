import "aos/dist/aos.css";

import style from '../../styles/title.module.scss';

const SoftSkills = () => {
    return (
        <div className='mt-24 lg:mt-32 mx-10 md:mx-16 xl:ml-28'>
            <span className='w-87.5 sm:w-125 lg:w-175 h-87.5 sm:h-125 lg:h-175 absolute top-0 sm:-top-5 lg:-top-32 left-0 sm:-left-5 lg:-left-40 bg-darkBlue opacity-30 blur-25 sm:blur-50 -z-10' />

            <div
                data-aos='fade-right'
                className='w-full flex flex-col items-center md:items-start text-center md:text-left'
            >
                <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-7.5xl font-black leading-tight'>
                    Soft Skills
                </h1>

                <p className='max-w-125 md:max-w-175 lg:max-w-200 xl:max-w-225 mt-12 lg:mt-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-justify lg:text-start font-bold leading-tight'>
                    As soft skills é a interação com outras pessoas e consigo mesmo, o modo que age e interage com todos em sua volta em situações diversas.
                </p>
            </div>


            <div className='flex flex-col items-center w-full lg:w-line border-t-4 border-zinc-900 mt-40 xs:mt-52 md:mt-72 mb-28'>
                <h2
                    data-aos='fade-up'
                    className='text-3xl sm:text-4xl md:text-5xl text-justify md:text-center font-extrabold mt-44'
                >
                    Assim sendo, posso citar as minhas seguintes soft skills:
                </h2>

                <span className='w-100 h-100 absolute top-[1100px] right-1/4 bg-darkBlue opacity-30 blur-25 lg:blur-50 -z-10' />

                <div className='w-full lg:w-line2 flex flex-col justify-center gap-5 text-base xs:text-lg sm:text-xl md:text-2xl text-justify font-bold mt-14 md:mt-32 leading-tight'>
                    <p data-aos='fade-up'>
                        <span className={`${style.title} font-extrabold`}>
                            Comunicação
                        </span> - decidir como o projeto terá início, opinando sobre as tecnologias que serão usadas, o que terá que ser feito, e como teremos que prosseguir. Saber se comunicar
                        adequadamente é fundamental para a tomada de decisões que são cruciais para a empresa, ou qualquer situação que nos encontremos.
                    </p>

                    <p data-aos='fade-up'>
                        <span className={`${style.title} font-extrabold`}>
                            Vontade de aprender
                        </span> - buscar sempre novos conhecimentos para aprimorar os adquiridos, aumenta o leque de possibilidades que um desenvolvedor possuí ao iniciar um projeto. Não só isso, além de estar sempre buscando aprender mais, praticar também irá ajudar nesse processo, fixando melhor os conteúdos.
                    </p>

                    <p data-aos='fade-up'>
                        <span className={`${style.title} font-extrabold`}>
                            Tomada de decisões e flexibilidade
                        </span> - cada necessidade irá requisitar diferentes linguagens, frameworks e bibliotecas para solucionar, e elas devem ser escolhidas no momento do planejamento do projeto, não deixando ser influenciado pela que mais usa, a "preferida", porque nenhuma tecnologia é uma bala de prata, possuem tanto os seus pontos fortes, como pontos fracos.
                    </p>

                    <p data-aos='fade-up'>
                        <span className={`${style.title} font-extrabold`}>
                            Pensamento Crítico
                        </span> - analisar a situação e ser autônomo em buscar soluções para problemas que estejam atrapalhando a equipe, mas também para rever soluções mais antigas, buscando aperfeiçoar o que já foi criado com novos recursos, como também expor o seu ponto de vista baseado em fatos, opinando de forma objetiva e concreta.
                    </p>

                    <p data-aos='fade-up'>
                        <span className={`${style.title} font-extrabold`}>
                            Trabalho em equipe
                        </span> - embora saber trabalhar sozinho de forma independente seja importante, o mesmo pode se dizer do trabalho em equipe. Quando se há um consenso entre todos, a conclusão do projeto se dá muito mais rápido quando feita em conjunto com outras pessoas.
                    </p>
                </div>
            </div>

            <span className='w-100 h-100 absolute top-[1200px] sm:top-[1500px] md:top-[1700px] right-2/4 bg-darkBlue opacity-30 blur-50 -z-10' />
        </div>
    );
};

export default SoftSkills;
