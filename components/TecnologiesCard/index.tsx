import Image from 'next/image';
import styles from '../../styles/hardSkills.module.scss';

type Props = {
    technologie: string;
    setInfoTechnologie: (technologie: string) => void;
}

const TecnologiesCard = ({ setInfoTechnologie, technologie }: Props) => {
    const formattedTechnologyName = technologie
        .toLocaleLowerCase()
        .replace(' ', '_')
        .replace('#', '_sharp')
        .replace('.net', 'dot_net')

    return (
        <div
            key={technologie}
            onClick={() => setInfoTechnologie(technologie)}
            className={`${styles.card} flex justify-center items-center w-36 h-36 bg-background border border-[#00DBDE] rounded-[5px] mx-auto transition duration-300`}
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
