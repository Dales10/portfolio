import "aos/dist/aos.css";

import { useRouter } from "next/router";

import MainGlowEffect from '@/components/MainGlowEffect';

const PageNotFound = () => {
    const page = useRouter().asPath;

    return (
        <div
            data-aos='fade-right'
            className='h-[70vh] flex justify-center items-center'
        >
            <MainGlowEffect />

            <h1
                data-aos='fade-up'
                className='max-w-125 md:max-w-175 lg:max-w-200 xl:max-w-225 mt-12 lg:mt-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-justify lg:text-start font-bold leading-tight'
            >
                O caminho "{page}" não resulta em nenhuma página existente, ou, a mesma não está funcionando no momento. Por favor, verifique se o caminho realmente é de uma página existente, caso contrário, volte mais tarde.
            </h1>
        </div>
    );
};

export default PageNotFound;
