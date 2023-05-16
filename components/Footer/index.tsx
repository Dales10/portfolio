import BackToTopButton from "../BackToTopButton";

const Footer = () => {
    return (
        <footer className="relative bottom-0 h-48 lg:h-36 flex justify-center items-center pb-16 lg:pb-0 text-center bg-background border-t border-slate-800">
            <div className="text-zinc-700 font-bold">
                <p>By Dário Matias</p>
                <p>Copyright © 2023</p>
            </div>
            <div className="absolute right-4">
                <BackToTopButton />
            </div>
        </footer>
    );
};

export default Footer;
