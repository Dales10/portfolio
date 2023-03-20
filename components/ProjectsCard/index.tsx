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
                className='w-80 rounded-md overflow-hidden'
            >
                <Image
                    src='/deinocheirus.jpg'
                    width={300}
                    height={300}
                    alt='Image of Deinocheirus'
                    className='w-full h-auto'
                />
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
