import { useState } from 'react';
import { MdArrowBackIos } from 'react-icons/md';

const NavigationButtons = () => {
    const [styleButtonPrev, setStyleButtonPrev] = useState({});
    const [styleButtonNext, setStyleButtonNext] = useState({});

    const clickButtonPrev= () => {
        setStyleButtonPrev({transform: 'scale(.95)'});

        setTimeout(() => {
            setStyleButtonPrev({});
        }, 100);
    };

    const clickButtonNext = () => {
        setStyleButtonNext({transform: 'scale(.95)'});

        setTimeout(() => {
            setStyleButtonNext({});
        }, 100);
    };

    return (
        <>
            <div
                onClick={() => clickButtonPrev()}
                style={styleButtonPrev}
                className="prev absolute top-2/4 left-2 flex justify-center items-center pl-1 h-6 w-6 bg-zinc-400 hover:bg-zinc-200 text-black rounded-full z-10"
            >
                <MdArrowBackIos className='w-3 h-3 pointer-events-none' />
            </div>
            
            <div
                onClick={() => clickButtonNext()}
                style={styleButtonNext}
                className="next absolute top-2/4 right-2 flex justify-center items-center pr-1 h-6 w-6 bg-zinc-400 hover:bg-zinc-200 text-black rounded-full z-10"
            >
                <MdArrowBackIos className='w-3 h-3 rotate-180 pointer-events-none focus:scale-95' />
            </div>
        </>
    );
};

export default NavigationButtons;
