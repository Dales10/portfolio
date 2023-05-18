import "aos/dist/aos.css";

import Link from "next/link";

import Header from "@/components/Header";
import MainGlowEffect from "@/components/MainGlowEffect";

const headerContent = {
    title: "Minhas Skills",
    introduction:
        "Irei dividir as skills em dois grupos, sendo o primeiro das soft skills e o segundo das hard skills, para assim poder citá-las adequadamente.",
};

const Skills = () => {
    return (
        <div className="mt-24 lg:mt-32 mx-10 md:mx-16 xl:ml-28">
            <MainGlowEffect />

            <Header content={headerContent} />

            <div className="w-full lg:w-line border-b-2 border-zinc-900 mb-44">
                <h2
                    data-aos="fade-up"
                    className="text-4xl md:text-5xl text-center font-extrabold mt-44"
                >
                    Escolha logo abaixo por qual quer começar:
                </h2>

                <div
                    data-aos="fade-up"
                    className="flex justify-center gap-12 md:gap-28 lg:gap-44 mt-24 mb-40 text-2xl md:text-3xl font-extrabold"
                >
                    <h3 className="hover:scale-95">
                        <Link href="/skills/softSkills">Soft Skills</Link>
                    </h3>

                    <h3 className="hover:scale-95">
                        <Link href="/skills/hardSkills">Hard Skills</Link>
                    </h3>
                </div>
            </div>

            <span className="w-75 lg:w-[600px] h-52 absolute top-[800px] lg:top-[900px] right-1/4 bg-darkBlue opacity-30 blur-25 lg:blur-50 -z-10" />

            <h2
                data-aos="fade-up"
                className="text-4xl md:text-5xl font-extrabold"
            >
                Conclusão
            </h2>

            <p
                data-aos="fade-up"
                className="text-xl md:text-2xl text-justify font-bold mt-20 lg:mt-32 lg:mr-52 mb-24 lg:mb-44 indent-10 leading-tight"
            >
                O mundo da tecnologia é muito amplo, todos os anos surgem novas
                ferramentas que deixam a criação de sites e softwares mais
                simples e eficiente. Citei apenas as que achei de maior
                relevância, como as principais bibliotecas por exemplo, mas
                estou sempre disposto em estudar ainda mais, desde que o momento
                permita.
            </p>

            <span className="w-75 lg:w-100 h-52 lg:h-75 absolute top-[1600px] md:top-[1600px] lg:top-[1600px] -left-10 bg-darkBlue opacity-30 blur-25 lg:blur-50 -z-10" />
        </div>
    );
};

export default Skills;
