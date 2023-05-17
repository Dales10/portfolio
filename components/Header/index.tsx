import Partition from "../Partition";

type Props = {
    content: {
        title: string;
        introduction: string;
    };
    userPartition?: boolean;
};

const Header = ({ content, userPartition = true }: Props) => {
    return (
        <header>
            <div
                data-aos="fade-right"
                className="w-full flex flex-col items-center md:items-start text-center md:text-left"
            >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7.5xl font-black leading-tight">
                    {content.title}
                </h1>
                <p className="max-w-125 md:max-w-175 lg:max-w-200 xl:max-w-225 mt-12 lg:mt-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-justify lg:text-start font-bold leading-tight">
                    {content.introduction}
                </p>
            </div>

            {userPartition && <Partition />}
        </header>
    );
};

export default Header;
