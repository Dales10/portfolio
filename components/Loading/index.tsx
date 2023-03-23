const Loading = () => {
    return (
        <>
            <span className='block w-87.5 sm:w-125 lg:w-175 h-87.5 sm:h-125 lg:h-175 absolute top-0 sm:-top-5 lg:-top-32 left-0 sm:-left-5 lg:-left-[155px] bg-darkBlue opacity-30 blur-25 sm:blur-50 -z-10' />

            <div className="h-[70vh] flex justify-center items-center">
                <div className="flex flex-col items-center gap-10">
                    <h1 className="text-3xl xs:text-4xl font-black">
                        Carregando os dados...
                    </h1>

                    <div className="flex justify-center items-center w-28 h-28 border-t-4 border-l-4 border-cyan rounded-full animate-spin-slow">
                        <div className="flex justify-center items-center w-20 h-20 border-r-4 border-t-4 border-cyan rounded-full animate-spin-slow">
                            <span className="inline-block w-12 h-12 border-b-4 border-r-4 border-cyan rounded-full animate-spin-slow" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Loading;
