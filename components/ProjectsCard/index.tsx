import { MouseEvent, useState, useEffect } from 'react';
import Image from 'next/image';
import PopupProject from '../PopupProject';

type Props = {
    projectData: {
        name: string;
        description: string;
        technologies: string[];
        links: {
            demo: string;
            code: string;
        };
    };
}

const ProjectsCard = ({ projectData }: Props) => {
    const [popupProject, setPopupProject] = useState(false);

    const checkClick = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        const elementName = (e.target as Element).classList[0];

        if (elementName !== 'links')
            setPopupProject(true);
    };

    useEffect(() => {
        if (popupProject)
            document.body.style.overflowY = 'hidden';
        else
            document.body.style.overflowY = 'auto';
    });

    return (
        <>
            <div
                onClick={e => checkClick(e)}
                className='w-80 bg-background font-black border-2 border-zinc-900 rounded-md overflow-hidden cursor-pointer'
            >
                <Image
                    src='/deinocheirus.jpg'
                    width={300}
                    height={300}
                    alt='Image of Deinocheirus'
                    className='w-full h-auto'
                />

                <h1 className='mt-2 mb-1 text-center'>
                    {projectData.name}
                </h1>
            </div>

            {
                popupProject && (
                    <PopupProject
                        setPopupProject={setPopupProject}
                        projectData={projectData}
                    />
                )
            }
        </>
    );
};

export default ProjectsCard;
