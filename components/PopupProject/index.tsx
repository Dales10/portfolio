import { Dispatch, SetStateAction, MouseEvent } from 'react';
import Image from 'next/image';
import { TfiWorld } from 'react-icons/tfi';
import { BsGithub } from 'react-icons/bs';

type Props = {
    setPopupProject: Dispatch<SetStateAction<boolean>>;
}

const PopupProject = ({ setPopupProject }: Props) => {
    const positionTop = { top: `${window.pageYOffset}px` };

    const checkClick = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        const elementName = (e.target as Element).classList[0];

        if (elementName === 'popup-wrapper')
            setPopupProject(false);
    };

    return (
        <div
            style={positionTop}
            onClick={ e => checkClick(e)}
            className="popup-wrapper absolute w-screen h-screen top-0 left-0 flex justify-center items-center bg-background bg-opacity-50 z-20 backdrop-blur-sm"
        >
            <div className="w-[600px] bg-background border border-[#00DBDE] border-opacity-20 rounded-xl overflow-auto">
                <div className='relative'>
                    <Image
                        src='/deinocheirus.jpg'
                        width={600}
                        height={600}
                        alt='Image of Deinocheirus'
                        className='w-full h-auto'
                    />

                    <h2 className='absolute top-4 left-4 opacity-30 text-2xl font-black'>
                        Portfólio
                    </h2>
                </div>

                <div className='mx-4 my-9'>
                    <p className='text-zinc-100'>
                        Exemplo de portifólio criado por teste, com o objetivo de testar e criar o design do portifólio original.
                    </p>

                    <div className='flex flex-col gap-1 mt-8'>
                        <h2 className='flex items-center gap-2 text-xl font-semibold'>
                            <TfiWorld className='w-6 h-6' />
                            Acessar projeto
                        </h2>

                        <a
                            href="https://github.com/Dales10/Estudos"
                            target={'_blank'}
                            className='underline text-blue-700'
                        >
                            https://github.com/Dales10/Estudos
                        </a>
                    </div>

                    <div className='flex flex-col gap-1 mt-3 mb-8'>
                        <h2 className='flex items-center gap-2 text-xl font-semibold'>
                            <BsGithub className='w-6 h-6' />
                            Código fonte
                        </h2>

                        <a
                            href="https://github.com/Dales10/Estudos"
                            target={'_blank'}
                            className='underline text-blue-700'
                        >
                            https://github.com/Dales10/Estudos
                        </a>
                    </div>

                    <h1 className='text-center'>
                        Tecnologias usadas nesse projeto:
                    </h1>

                    <div className='flex flex-wrap justify-center gap-3 text-xs font-bold border-t border-zinc-700 mt-2 py-3'>
                        <div className='bg-[#272737] rounded-md mx-auto px-2 py-1'>
                            TypeScript
                        </div>

                        <div className='bg-[#272737] rounded-md mx-auto px-2 py-1'>
                            SASS
                        </div>

                        <div className='bg-[#272737] rounded-md mx-auto px-2 py-1'>
                            Next.js
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupProject;
