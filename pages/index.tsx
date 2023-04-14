import "aos/dist/aos.css";

import styleButton from "../styles/button.module.scss";

import MainGlowEffect from "@/components/MainGlowEffect";

const Home = () => {
    return (
        <div className="mt-32 lg:mt-36 mx-8 md:mx-16 xl:ml-28">
            <MainGlowEffect />

            <div data-aos="fade-right">
                <h1 className="flex flex-col flex-wrap text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center lg:text-left font-bold leading-none">
                    <span>Oi, eu sou</span>
                    <span className="text-4xl sm:text-6xl md:text-7xl lg:text-7.5xl font-black">
                        Dário Matias
                    </span>
                    <span>web developer</span>
                </h1>
                <div className="flex justify-center lg:justify-start">
                    <a
                        href="./files/curriculum.pdf"
                        download="Currículo.pdf"
                        className={`${styleButton.button} flex justify-center items-center w-60 sm:w-[300px] h-20 sm:h-24 mt-24 md:mt-20 lg:mt-24  text-2xl sm:text-3xl`}
                    >
                        Download CV
                    </a>
                </div>
            </div>

            <div className="w-full lg:w-line h-1 bg-zinc-900 mt-44 mb-28" />

            <h2
                data-aos="fade-up"
                className="text-4xl md:text-5xl font-extrabold"
            >
                Mensagem
            </h2>

            <div className="max-w-[1000px] text-xl md:text-2xl text-justify font-bold mt-14 md:mt-32 lg:mr-52 mb-32 indent-10 leading-tight">
                <p data-aos="fade-up">
                    Nesse portifólio encontrará todos os meus projetos mais
                    relevantes, tecnologias que tenho conhecimento, e conhecer
                    um pouco sobre mim. Os projetos criados estarão em um card
                    cada, com as tecnologias usadas, uma breve descrição do que
                    se tratam, além de dois links, sendo um para ver o projeto
                    online, e o outro para analisar o código-fonte no GitHub
                    caso tenha interesse.
                </p>
                <p data-aos="fade-up">
                    Então vamos lá conhecer o meu trabalho e quem eu sou?
                </p>
            </div>

            <span className="w-100 lg:w-137 h-100 lg:h-[550px] absolute top-[900px] md:top-250 right-1/4 bg-darkBlue opacity-30 blur-25 lg:blur-50 -z-10" />
        </div>
    );
};

export default Home;
