const Loading = () => {
    return (
        <>
            <span className='block w-[350px] sm:w-125 lg:w-[700px] h-[350px] sm:h-125 lg:h-[700px] absolute top-0 sm:-top-5 lg:-top-32 left-0 sm:-left-5 lg:-left-[155px] bg-[#0C009C] opacity-30 blur-[100px] sm:blur-[200px] -z-10' />

            <div className="h-[calc(100vh_-_232px)] flex justify-center items-center">
                <div className="flex flex-col items-center gap-10">
                    <h1 className="text-4xl font-black">
                        Carregando dados...
                    </h1>

                    <div className="flex justify-center items-center w-28 h-28 border-t-4 border-l-4 border-[#00DBDE] rounded-full animate-spin-slow">
                        <div className="flex justify-center items-center w-20 h-20 border-r-4 border-t-4 border-[#00DBDE] rounded-full animate-spin-slow">
                            <span className="inline-block w-12 h-12 border-b-4 border-r-4 border-[#00DBDE] rounded-full animate-spin-slow" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Loading;
