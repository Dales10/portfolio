import { MouseEvent, useState, useEffect } from 'react';

import PopupProject from '../PopupProject';

import { ProjectProps } from '@/@types/Project';

type Props = {
    projectData: ProjectProps;
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
                <img
                    src={projectData.images[0]}
                    alt={`Project main image ${projectData.name}.`}
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
