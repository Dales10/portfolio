import styles from '../../styles/footer.module.scss';
import { MdArrowBackIos } from 'react-icons/md';

const Footer = () => {
    const returnToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <footer className='h-40 flex justify-center items-center relative bottom-0 text-center bg-background'>
            <div className={styles.content}>
                <p>
                    By Dário Matias
                </p>
                <p>
                    Copyright © 2023
                </p>
            </div>

            <button
                type='button'
                onClick={returnToTop}
                className='w-16 h-16 absolute top-1/4 right-14 flex justify-center items-center bg-[#0B0B0B] hover:bg-[#0e0e0e] text-zinc-600 hover:text-gray-400 transition duration-300'
            >
                <MdArrowBackIos
                    style={{
                        width: '40px',
                        height: '40px',
                        transform: 'rotate(90deg)',
                        marginTop: '16px',
                    }}
                />
            </button>
        </footer>
    );
};

export default Footer;
