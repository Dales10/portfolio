const Partition = ({ homePage = false }) => {
    return (
        <div
            style={homePage ? { marginTop: "10rem" } : {}}
            className="w-full lg:w-line h-[2px] bg-zinc-900 mt-40 xs:mt-52 md:mt-64 mb-28"
        />
    );
};

export default Partition;
