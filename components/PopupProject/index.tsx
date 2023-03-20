import { Dispatch, SetStateAction, MouseEvent } from 'react';
import Image from 'next/image';

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

                <p className='mx-4 my-9 text-zinc-100'>
                    Exemplo de portifólio criado por teste, com o objetivo de testar e criar o design do portifólio original.
                </p>
            </div>
        </div>
    );
};

export default PopupProject;
