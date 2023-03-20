import { MouseEvent, useState, useEffect } from 'react';
import Image from 'next/image';
import { TfiWorld } from 'react-icons/tfi';
import { BsGithub } from 'react-icons/bs';
import PopupProject from '../PopupProject';

const ProjectsCard = () => {
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
                className='w-80 bg-[#121219] rounded-md mb-6 mx-auto overflow-hidden'
            >
                <Image
                    src='/deinocheirus.jpg'
                    width={300}
                    height={300}
                    alt='Image of Deinocheirus'
                    className='w-full h-auto'
                />

                <h1 className='flex justify-between text-base font-bold mx-5 my-4'>
                    Portfólio
                    <div className='links flex gap-3'>
                        <a
                            href='#'
                        >
                            <TfiWorld className='w-6 h-6' />
                        </a>
                        <a
                            href='#'
                        >
                            <BsGithub className='w-6 h-6 text-white' />
                        </a>
                    </div>
                </h1>
            </div>

            {
                popupProject && (
                    <PopupProject
                        setPopupProject={setPopupProject}
                    />
                )
            }
        </>
    );
};

export default ProjectsCard;
