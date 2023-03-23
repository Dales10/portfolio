import { useRouter } from "next/router";

const PageNotFound = () => {
    const page = useRouter().asPath;

    return (
        <div className='h-[70vh] flex justify-center items-center'>
            <span className='w-87.5 sm:w-125 lg:w-175 h-87.5 sm:h-125 lg:h-175 absolute top-0 sm:-top-5 lg:-top-32 left-0 sm:-left-5 lg:-left-40 bg-darkBlue opacity-30 blur-25 sm:blur-50 -z-10' />

            <h1 className='max-w-125 md:max-w-175 lg:max-w-200 xl:max-w-225 mt-12 lg:mt-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-justify lg:text-start font-bold leading-tight'>
                O caminho "{page}" não resulta em nenhuma página existente, ou, a mesma não está funcionando no momento. Por favor, verifique se o caminho realmente é de uma página existente, caso contrário, volte mais tarde.
            </h1>
        </div>
    );
};

export default PageNotFound;
