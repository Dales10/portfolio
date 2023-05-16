import { useEffect, useState } from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const BackToTopButton = () => {
    const [showButton, setShowButton] = useState(false);
    const returnToTop = () => window.scrollTo(0, 0);

    //Quando o scroll tiver passado determinado valor, o botão de voltar ao topo será mostrado.
    useEffect(() => {
        window.addEventListener("scroll", () => {
            let doc = document.documentElement;
            let value = Number.parseInt((doc.scrollTop).toString());
            //Se o scroll estiver na posição de 200px, muda o estado do botão.
            if (value >= 150) setShowButton(true)
            else setShowButton(false);
        });
    }, []);

    return (
        <button
            type="button"
            style={showButton ? { display: "flex" } : { display: "none" }}
            onClick={returnToTop}
            className="w-12 h-12 fixed right-10 bottom-10 justify-center items-center bg-neutral-900 bg-opacity-50 hover:bg-black text-white rounded-full border border-neutral-900 hover:border-zinc-500 transition duration-300 z-10"
        >
            <MdOutlineKeyboardDoubleArrowUp className="w-6 h-6" />
        </button>
    )
};

export default BackToTopButton;
