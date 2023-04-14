import "aos/dist/aos.css";

import { Dispatch, SetStateAction, MouseEvent } from "react";
import { TfiWorld } from "react-icons/tfi";
import { BsGithub } from "react-icons/bs";

import Slider from "../Slider";

import { ProjectProps } from "@/@types/Project";

type Props = {
    setPopupProject: Dispatch<SetStateAction<boolean>>;
    projectData: ProjectProps;
};

const PopupProject = ({ setPopupProject, projectData }: Props) => {
    const checkClick = (
        e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
    ) => {
        const elementName = (e.target as Element).classList[0];

        if (elementName === "popup-wrapper") setPopupProject(false);
    };

    return (
        <div
            onClick={(e) => checkClick(e)}
            className="popup-wrapper fixed top-0 right-0 bottom-0 left-0 w-screen h-screen flex justify-center items-center bg-background bg-opacity-50 px-4 z-20 backdrop-blur-sm"
        >
            <div
                data-aos="zoom-in"
                data-aos-duration="400"
                className="max-w-125 bg-background border border-zinc-400 border-opacity-20 rounded-xl text-sm overflow-auto"
            >
                <div className="relative border-b border-zinc-900">
                    <Slider files={projectData.files} />

                    <h2 className="absolute top-1 xs:top-2 left-2 xs:left-3 opacity-40 text-base xs:text-lg font-black z-10">
                        {projectData.name}
                    </h2>
                </div>

                <div className="mx-4 my-5">
                    <p className="text-zinc-100">{projectData.description}</p>

                    <div className="flex flex-col gap-1 mt-6">
                        <h2 className="flex items-center gap-2 text-lg font-semibold">
                            <TfiWorld className="w-6 h-6" />
                            Acessar projeto
                        </h2>

                        <a
                            href={projectData.links.demo}
                            target={"_blank"}
                            className="underline text-blue-700"
                        >
                            {projectData.links.demo}
                        </a>
                    </div>

                    <div className="flex flex-col gap-1 mt-2">
                        <h2 className="flex items-center gap-2 text-lg font-semibold">
                            <BsGithub className="w-6 h-6" />
                            Código fonte
                        </h2>

                        <a
                            href={projectData.links.code}
                            target={"_blank"}
                            className="underline text-blue-700"
                        >
                            {projectData.links.code}
                        </a>
                    </div>
                </div>

                <h1 className="text-lg text-center font-bold">
                    Tecnologias usadas nesse projeto
                </h1>

                <div className="flex flex-wrap justify-center gap-3 bg-[#0c0c0f] text-xs font-bold border-t border-zinc-700 mt-2 py-3">
                    {projectData.technologies.map((technologie) => {
                        return (
                            <div
                                key={technologie}
                                className="bg-[#1b1b27] rounded-md mx-auto px-2 py-1"
                            >
                                {technologie}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PopupProject;
