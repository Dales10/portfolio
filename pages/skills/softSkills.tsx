import style from '../../styles/title.module.scss';

const SoftSkills = () => {
    return (
        <div className="mt-24 lg:mt-32 mx-10 md:mx-16 xl:ml-28">
            <span className='block w-[350px] sm:w-125 lg:w-[700px] h-[350px] sm:h-125 lg:h-[700px] absolute top-0 sm:-top-5 lg:-top-32 left-0 sm:-left-5 lg:-left-[155px] bg-[#0C009C] opacity-30 blur-[100px] sm:blur-[200px] -z-10' />

            <div className='w-full flex flex-col items-center md:items-start text-center md:text-left'>
                <h1 className={`${style.title} text-[80px] font-black leading-tight`}>
                    Soft Skills
                </h1>

                <p className='max-w-[500px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] mt-12 lg:mt-20 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight'>
                    As soft skills é a interação com outras pessoas e consigo mesmo, o modo que age e interage com todos em sua volta em situações diversas.
                </p>
            </div>


            <div className='flex flex-col items-center w-full lg:w-[calc(100%_-_100px)] border-t-4 border-zinc-900 mt-40 xs:mt-52 md:mt-72 mb-28'>
                <h2 className='text-4xl md:text-5xl text-center font-extrabold mt-44'>
                    Assim sendo, posso citar as minhas seguintes soft skills:
                </h2>

                <span className='w-[400px] h-[400px] absolute top-[1100px] right-1/4 bg-[#0C009C] opacity-30 blur-[100px] lg:blur-[200px] -z-10' />

                <div className='w-full lg:w-[calc(100%_-_200px)] flex flex-col justify-center gap-5 text-2xl md:text-2xl text-justify font-bold mt-14 md:mt-32 leading-tight'>
                    <p>
                        <span className={`${style.title} font-extrabold`}>
                            Comunicação
                        </span> - decidir como o projeto terá início, opinando sobre as tecnologias que serão usadas, o que terá que ser feito, e como teremos que prosseguir. Saber se comunicar
                        adequadamente é fundamental para a tomada de decisões que são cruciais para a empresa, ou qualquer situação que nos encontremos.
                    </p>

                    <p>
                        <span className={`${style.title} font-extrabold`}>
                            Vontade de aprender
                        </span> - buscar sempre novos conhecimentos para aprimorar os adquiridos, aumenta o leque de possibilidades que um desenvolvedor possuí ao iniciar um projeto. Não só isso, além de estar sempre buscando aprender mais, praticar também irá ajudar nesse processo, fixando melhor os conteúdos.
                    </p>

                    <p>
                        <span className={`${style.title} font-extrabold`}>
                            Tomada de decisões e flexibilidade
                        </span> - cada necessidade irá requisitar diferentes linguagens, frameworks e bibliotecas para solucionar, e elas devem ser escolhidas no momento do planejamento do projeto, não deixando ser influenciado pela que mais usa, a "preferida", porque nenhuma tecnologia é uma bala de prata, possuem tanto os seus pontos fortes, como pontos fracos.
                    </p>

                    <p>
                        <span className={`${style.title} font-extrabold`}>
                            Pensamento Crítico
                        </span> - analisar a situação e ser autônomo em buscar soluções para problemas que estejam atrapalhando a equipe, mas também para rever soluções mais antigas, buscando aperfeiçoar o que já foi criado com novos recursos, como também expor o seu ponto de vista baseado em fatos, opinando de forma objetiva e concreta.
                    </p>

                    <p>
                        <span className={`${style.title} font-extrabold`}>
                            Trabalho em equipe
                        </span> - embora saber trabalhar sozinho de forma independente seja importante, o mesmo pode se dizer do trabalho em equipe. Quando se há um consenso entre todos, a conclusão do projeto se dá muito mais rápido quando feita em conjunto com outras pessoas.
                    </p>
                </div>
            </div>

            <span className='w-[400px] h-[400px] absolute top-[2500px] xs:top-[1800px] right-2/4 bg-[#0C009C] opacity-30 blur-[100px] lg:blur-[200px] -z-10' />
        </div>
    );
};

export default SoftSkills;
