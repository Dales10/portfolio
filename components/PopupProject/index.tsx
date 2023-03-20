import { useState, Dispatch, SetStateAction, MouseEvent } from 'react';
import { TfiWorld } from 'react-icons/tfi';
import { BsGithub } from 'react-icons/bs';
import { MdArrowBackIos } from 'react-icons/md';
import Image from 'next/image';

type Props = {
    setPopupProject: Dispatch<SetStateAction<boolean>>;
    projectData: {
        name: string;
        description: string;
        technologies: string[];
        links: {
            demo: string;
            code: string;
        };
    };
};

const arrayUrls = ['deinocheirus.jpg', 'wallpaper (1).jpg', 'wallpaper (2).jpg']

const PopupProject = ({ setPopupProject, projectData }: Props) => {
    const [positionImage, setPositionImage] = useState(0);
    const positionTop = { top: `${window.pageYOffset}px` };

    const checkClick = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        const elementName = (e.target as Element).classList[0];

        if (elementName === 'popup-wrapper')
            setPopupProject(false);
    };

    return (
        <div
            style={positionTop}
            onClick={e => checkClick(e)}
            className="popup-wrapper absolute w-screen h-screen top-0 left-0 flex justify-center items-center bg-background bg-opacity-50 z-20 backdrop-blur-sm"
        >
            <div className="w-[500px] bg-background border border-[#00DBDE] border-opacity-20 rounded-xl text-sm overflow-auto">
                <div className='relative'>
                    <Image
                        src={`/${arrayUrls[positionImage]}`}
                        width={500}
                        height={500}
                        alt=''
                        className='transition duration-300'
                    />

                    <button
                        onClick={() => positionImage === 0 ? setPositionImage(arrayUrls.length) : setPositionImage(positionImage - 1)}
                        className='absolute top-2/4 left-2 w-7 h-7 bg-black pl-2 rounded-full opacity-50'
                    >
                        <MdArrowBackIos className='w-5 h-5'/>
                    </button>

                    <button
                        onClick={() => positionImage === arrayUrls.length - 1 ? setPositionImage(0) : setPositionImage(positionImage + 1)}
                        className='absolute top-2/4 right-2 w-7 h-7 bg-black pr-2 rounded-full opacity-50'
                    >
                        <MdArrowBackIos className='w-5 h-5 rotate-180' />
                    </button>

                    <h2 className='absolute top-4 left-4 opacity-40 text-xl font-black'>
                        {projectData.name}
                    </h2>
                </div>

                <div className='mx-4 my-5'>
                    <p className='text-zinc-100'>
                        {projectData.description}
                    </p>

                    <div className='flex flex-col gap-1 mt-6'>
                        <h2 className='flex items-center gap-2 text-lg font-semibold'>
                            <TfiWorld className='w-6 h-6' />
                            Acessar projeto
                        </h2>

                        <a
                            href={projectData.links.demo}
                            target={'_blank'}
                            className='underline text-blue-700'
                        >
                            {projectData.links.demo}
                        </a>
                    </div>

                    <div className='flex flex-col gap-1 mt-2'>
                        <h2 className='flex items-center gap-2 text-lg font-semibold'>
                            <BsGithub className='w-6 h-6' />
                            Código fonte
                        </h2>

                        <a
                            href={projectData.links.code}
                            target={'_blank'}
                            className='underline text-blue-700'
                        >
                            {projectData.links.code}
                        </a>
                    </div>
                </div>

                <h1 className='text-lg text-center font-bold'>
                    Tecnologias usadas nesse projeto
                </h1>

                <div className='flex flex-wrap justify-center gap-3 bg-[#0c0c0f] text-xs font-bold border-t border-zinc-700 mt-2 py-3'>
                    {
                        projectData.technologies.map(technologie => {
                            return (
                                <div
                                    key={technologie}
                                    className='bg-[#272737] rounded-md mx-auto px-2 py-1'
                                >
                                    {technologie}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default PopupProject;
