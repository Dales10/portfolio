import style from '../styles/title.module.scss';

const sobreMim = () => {
    return (
        <div className="mt-8 xs:mt-24 lg:mt-16 mx-8 md:mx-16 xl:ml-28">
            <span className='block w-[350px] sm:w-[500px] lg:w-[700px] h-[350px] sm:h-[500px] lg:h-[700px] absolute top-0 sm:-top-[20px] lg:-top-[120px] left-0 sm:-left-[20px] lg:-left-[155px] bg-[#0C009C] opacity-30 blur-[100px] sm:blur-[200px] -z-10' />

            <div className='w-full flex flex-col items-center md:items-start text-center md:text-left'>
                <h1 className={`${style.title} text-[80px] font-black leading-tight`}>
                    Sobre mim
                </h1>

                <p className='sm:w-[400px] md:w-[700px] lg:w-[800px] xl:w-[1100px] mt-12 lg:mt-28 text-[24px] md:text-[30px] lg:text-[40px] font-bold leading-tight'>
                    Bem vindo(a) ao meu portfólio, o meu nome é Dário Matias e tenho 18 anos. Então vamos lá saber quem eu sou?
                </p>
            </div>

            <span className='inline-block w-full lg:w-[calc(100%_-_200px)] h-1 bg-[#090909] mt-40 xs:mt-52 md:mt-72 mb-28' />

            <h2 className='text-4xl md:text-[50px] font-extrabold'>
                Quem eu sou?
            </h2>

            <div className='max-w-[1000px] flex flex-col gap-2 text-xl md:text-[26px] text-justify font-bold mt-[60px] md:mt-[130px] lg:mr-52 mb-[130px] indent-10 leading-tight'>
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

            <span className='block w-[300px] sm:w-[400px] lg:w-[550px] h-[500px] sm:h-[350px] lg:h-[450px] absolute top-[1000px] md:top-[1000px] left-1/4 md:left-2/4 bg-[#0C009C] opacity-30 blur-[150px] md:blur-[150px] -z-10' />
        </div>
    );
};

export default sobreMim;
