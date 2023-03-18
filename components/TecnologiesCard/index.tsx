import Image from 'next/image';
import { useState } from 'react';

type Props = {
    technologie: string;
    setInfoTechnologie: (technologie: string, position: number) => void;
    stateTechnologie: boolean;
    position: number;
}

const TecnologiesCard = ({ setInfoTechnologie, technologie, stateTechnologie, position }: Props) => {
    const [styleCardHover, setStyleCardHover] = useState({});
    const styleCardClick = { transform: 'translate(-6px, -6px) scale(1)', boxShadow: '6px 6px 5px #00DBDE' };

    const formattedTechnologyName = technologie
        .toLocaleLowerCase()
        .replace(' ', '_')
        .replace('#', '_sharp')
        .replace('.net', 'dot_net');

    return (
        <div
            onClick={() => setInfoTechnologie(technologie, position)}
            style={stateTechnologie ? styleCardClick : styleCardHover}
            onMouseEnter={() => { if (!stateTechnologie) setStyleCardHover({ transform: 'scale(0.95)' }) }}
            onMouseLeave={() => setStyleCardHover({ transform: 'scale(1)' }) }
            className='flex justify-center items-center w-36 h-36 bg-background border border-[#00DBDE] rounded-[5px] mx-auto transition duration-300'
        >
            <div className='flex flex-col justify-between items-center gap-2 py-1'>
                <Image
                    src={`/icons/${formattedTechnologyName}.png`}
                    width={90}
                    height={90}
                    alt={`${technologie} icon.`}
                />
                <h2 className='text-xl font-semibold'>
                    {technologie}
                </h2>
            </div>
        </div>
    );
};

export default TecnologiesCard;
