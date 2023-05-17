import "aos/dist/aos.css";

import styleButton from "@/styles/button.module.scss";

import { useData } from "@/components/Context";
import Header from "@/components/Header";
import MainGlowEffect from "@/components/MainGlowEffect";
import Partition from "@/components/Partition";
import ProjectsCard from "@/components/ProjectsCard";

const headerContent = {
    title: "Meus Projetos",
    introduction:
        "Nesta página será reunido todos os meus principais projetos, os quais usam as tecnologias que tenho conhecimento.",
};

const Projetos = () => {
    const { data } = useData();

    return (
        <div className="mt-24 lg:mt-32 mx-10 md:mx-16 xl:ml-28">
            <MainGlowEffect />

            <div data-aos="fade-right">
                <Header content={headerContent} userPartition={false} />

                <div className="flex justify-center md:justify-start">
                    <button
                        className={`${styleButton.button} w-60 sm:w-[300px] h-20 sm:h-24 mt-24 md:mt-20 lg:mt-24 text-2xl sm:text-3xl`}
                    >
                        <a
                            href="#lista"
                            className="flex justify-center items-center w-full h-full rounded-3xl"
                        >
                            Começar
                        </a>
                    </button>
                </div>
            </div>

            <Partition />

            <div
                id="title"
                className="w-full lg:w-line mb-28"
            >
                <div id="lista" className="flex flex-wrap gap-8 justify-center">
                    {data.projects.map((projectData, index) => {
                        return (
                            <ProjectsCard
                                key={index}
                                projectData={projectData}
                            />
                        );
                    })}

                    {data.projects.length === 0 && (
                        <h1 className="text-center text-2xl sm:text-3xl font-bold my-10">
                            Ocorreu algum problema ao buscar as informações dos
                            projetos. Por favor, reinicie o site ou volte mais
                            tarde.
                        </h1>
                    )}
                </div>
            </div>

            <span className="block w-80 xs:w-100 h-80 xs:h-125 sm:h-52 lg:h-[450px] absolute top-[900px] xs:top-[800px] sm:top-[1100px] left-[5%] xs:left-[15%] md:left-1/4 bg-darkBlue opacity-30 blur-25 lg:blur-50 -z-10" />
        </div>
    );
};

export default Projetos;
