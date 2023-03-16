import style from '../styles/title.module.scss';

const SobreMim = () => {
    return (
        <div className="mt-24 lg:mt-32 mx-10 md:mx-16 xl:ml-28">
            <span className='block w-[350px] sm:w-125 lg:w-[700px] h-[350px] sm:h-125 lg:h-[700px] absolute top-0 sm:-top-5 lg:-top-32 left-0 sm:-left-5 lg:-left-[155px] bg-[#0C009C] opacity-30 blur-[100px] sm:blur-[200px] -z-10' />

            <div className='w-full flex flex-col items-center md:items-start text-center md:text-left'>
                <h1 className={`${style.title} text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-black leading-tight`}>
                    Sobre mim
                </h1>

                <p className='max-w-[500px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] mt-12 lg:mt-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-justify lg:text-start font-bold leading-tight'>
                    Bem vindo(a) ao meu portfólio, o meu nome é Dário Matias e tenho 18 anos. Então vamos lá saber quem eu sou?
                </p>
            </div>

            <span className='inline-block w-full lg:w-[calc(100%_-_200px)] h-1 bg-zinc-900 mt-40 xs:mt-52 md:mt-72 mb-28' />

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

            <span className='block w-[300px] sm:w-100 lg:w-[550px] h-125 sm:h-[350px] lg:h-[450px] absolute top-250 md:top-250 left-1/4 md:left-2/4 bg-[#0C009C] opacity-30 blur-[150px] md:blur-[150px] -z-10' />
        </div>
    );
};

export default SobreMim;
