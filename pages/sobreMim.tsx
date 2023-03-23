import styleTitle from '../styles/title.module.scss';

const SobreMim = () => {
    return (
        <div className="mt-24 lg:mt-32 mx-10 md:mx-16 xl:ml-28">
            <span className='w-87.5 sm:w-125 lg:w-175 h-87.5 sm:h-125 lg:h-175 absolute top-0 sm:-top-5 lg:-top-32 left-0 sm:-left-5 lg:-left-40 bg-darkBlue opacity-30 blur-25 sm:blur-50 -z-10' />

            <div className='w-full flex flex-col items-center md:items-start text-center md:text-left'>
                <h1 className={`${styleTitle.title} text-5xl sm:text-6xl md:text-7xl lg:text-7.5xl font-black leading-tight`}>
                    Sobre mim
                </h1>

                <p className='max-w-125 md:max-w-175 lg:max-w-200 xl:max-w-225 mt-12 lg:mt-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-justify lg:text-start font-bold leading-tight'>
                    Bem vindo(a) ao meu portfólio, o meu nome é Dário Matias e tenho 18 anos. Então vamos lá saber quem eu sou?
                </p>
            </div>

            <span className='inline-block w-full lg:w-line h-1 bg-zinc-900 mt-40 xs:mt-52 md:mt-72 mb-28' />

            <h2 className='text-4xl md:text-5xl font-extrabold'>
                Quem eu sou?
            </h2>

            <div className='max-w-[1000px] flex flex-col gap-2 text-xl md:text-2xl text-justify font-bold mt-14 md:mt-32 lg:mr-52 mb-32 indent-10 leading-tight'>
                <p>
                    Atualmente a minha área de estudos é o desenvolvimento web, tanto o Frontend quanto o Backend das aplicações, mas assim que possível quero expandir para mobile, softwares, jogos, Inteligência Artificial, Deep Learning e entre outras.
                </p>
                <p>
                    Compreender várias tecnologias será de grande ajuda para alcançar os meus objetivos, no entanto é claro, não basta apenas estudá-las, mas sim saber usá-las, caso contrário será um conhecimento sem muita utilidade.
                </p>
                <p>
                    A possibilidade de poder criar o que eu quiser sem a ajuda de ninguém, através do meu próprio esforço, me motiva a estudar cada vez mais. Por essa razão estou sempre buscando novas experiências para me aprimorar o máximo possível, assim como estudando novas tecnologias, e se possível, novas linguagens.
                </p>
            </div>

            <span className='block w-75 sm:w-100 lg:w-[550px] h-125 sm:h-87.5 lg:h-[450px] absolute top-250 md:top-250 left-1/4 md:left-2/4 bg-darkBlue opacity-30 blur-37.5 -z-10' />
        </div>
    );
};

export default SobreMim;
