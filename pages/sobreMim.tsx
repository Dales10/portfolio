import "aos/dist/aos.css";

import Header from "@/components/Header";
import MainGlowEffect from "@/components/MainGlowEffect";

const headerContent = {
    title: "Sobre mim",
    introduction:
        "Bem vindo(a) ao meu portfólio, o meu nome é Dário Matias e tenho 18 anos. Então vamos lá saber quem eu sou?",
};

const SobreMim = () => {
    return (
        <div className="mt-24 lg:mt-32 mx-10 md:mx-16 xl:ml-28">
            <MainGlowEffect />

            <Header content={headerContent} />

            <h2
                data-aos="fade-up"
                className="text-4xl md:text-5xl font-extrabold"
            >
                Quem eu sou?
            </h2>

            <div className="max-w-[1000px] flex flex-col gap-2 text-xl md:text-2xl text-justify font-bold mt-14 md:mt-32 lg:mr-52 mb-32 indent-10 leading-tight">
                <p data-aos="fade-up">
                    Atualmente a minha área de estudos é o desenvolvimento web,
                    tanto o Frontend quanto o Backend das aplicações, mas assim
                    que possível quero expandir para mobile, softwares, jogos,
                    inteligência artificial, ciência de dados e entre outras.
                </p>

                <p data-aos="fade-up">
                    Compreender várias tecnologias será de grande ajuda para
                    alcançar os meus objetivos, no entanto é claro, não basta
                    apenas estudá-las, mas sim saber usá-las, caso contrário
                    será um conhecimento sem muita utilidade.
                </p>

                <p data-aos="fade-up">
                    A possibilidade de poder criar o que eu quiser sem a ajuda
                    de ninguém, através do meu próprio esforço, me motiva a
                    estudar cada vez mais. Por essa razão estou sempre buscando
                    novas experiências para me aprimorar o máximo possível,
                    assim como estudando novas tecnologias, e se possível, novas
                    linguagens.
                </p>
            </div>

            <span className="block w-75 sm:w-100 lg:w-[550px] h-125 sm:h-87.5 lg:h-[450px] absolute top-250 md:top-250 left-[10%] s:left-1/4 md:left-2/4 bg-darkBlue opacity-30 blur-25 lg:blur-50 -z-10" />
        </div>
    );
};

export default SobreMim;
