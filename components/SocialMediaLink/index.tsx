import styles from '../../styles/SocialMedia.module.scss';
import { IconType } from 'react-icons/lib';

type Props = {
    socialMedia: {
        link: string;
        icon: IconType;
    };
};

const SocialMediaLink = ({ socialMedia }: Props) => {
    return (
        <li className={styles.link}>
            <a
                href={socialMedia.link}
                target={'_blank'}
                className='w-12 lg:w-[70px] h-12 lg:h-[70px] flex justify-center items-center rounded-full bg-white hover:bg-opacity-0 group focus:scale-95 transition-all duration-300'
            >
                <socialMedia.icon
                    className='w-8 lg:w-11 h-8 lg:h-11 text-background group-hover:text-white transition duration-300'
                />
            </a>
        </li>
    );
};

export default SocialMediaLink;
