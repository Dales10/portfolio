import { useRouter } from "next/router";

const PageNotFound = () => {
    const page = useRouter().asPath;

    return (
        <div className='h-[70vh] flex justify-center items-center'>
            <span className='block w-[350px] sm:w-125 lg:w-[700px] h-[350px] sm:h-125 lg:h-[700px] absolute top-0 sm:-top-5 lg:-top-32 left-0 sm:-left-5 lg:-left-[155px] bg-[#0C009C] opacity-30 blur-[100px] sm:blur-[200px] -z-10' />

            <h1 className='max-w-[500px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] text-3xl text-center font-black leading-tight'>
                O caminho "{page}" não resulta em nenhuma página existente, ou, a mesma não está funcionando no momento. Por favor, verifique se o caminho realmente é de uma página existente, caso contrário, volte mais tarde.
            </h1>
        </div>
    );
};

export default PageNotFound;
