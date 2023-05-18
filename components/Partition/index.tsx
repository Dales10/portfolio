const Partition = ({ homePage = false }) => {
    return (
        <div
            style={homePage ? { marginTop: "10rem" } : {}}
            className="w-full lg:w-line h-px bg-slate-900 mt-40 xs:mt-52 md:mt-64 mb-28"
        />
    );
};

export default Partition;
