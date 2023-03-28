import { MdArrowBackIos } from 'react-icons/md';

const Footer = () => {
    const returnToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <footer className='h-56 lg:h-36 flex justify-center items-center relative bottom-0 pb-16 lg:pb-0 text-center bg-background border-t border-slate-800'>
            <div className='text-zinc-700 font-bold'>
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
                className='w-14 sm:w-16 h-14 sm:h-16 absolute top-[50px] sm:top-1/4 right-6 xs:right-8 flex justify-center items-center bg-neutral-900 bg-opacity-50 hover:bg-zinc-900 text-zinc-600 hover:text-gray-400 transition duration-300'
            >
                <MdArrowBackIos className='w-10 h-10 rotate-90 mt-4 ' />
            </button>
        </footer>
    );
};

export default Footer;
