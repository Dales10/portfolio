import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { IoCloseSharp } from 'react-icons/io5';

type Props = {
    setPopupSucess: Dispatch<SetStateAction<boolean>>;
}

const EmailSentSuccessfully = ({ setPopupSucess }: Props) => {
    const [width, setWidth] = useState(0);

    const progress = () => {
        let count = 5;
        const intervalRef = setInterval(() => {
            setWidth(count)
            if (count === 100)
                stopTheBreak(intervalRef);
            count += 5;
        }, 150);
    };

    const stopTheBreak = (intervalRef: NodeJS.Timer) => {
        clearInterval(intervalRef);
    };

    useEffect(() => {
        progress();
    }, []);

    return (
        <div className="fixed top-4 left-2/4 flex -translate-x-2/4 bg-green-500 rounded-sm">
            <div>
                <div className='flex gap-4 p-4'>
                    <Image
                        src='/icons/ok.svg'
                        width={20}
                        height={20}
                        alt='Ok icon'
                    />
                    <div>
                        <h1 className="text-xl font-bold">
                            Sucesso
                        </h1>
                        <p>
                            O email foi enviado com sucesso.
                        </p>
                    </div>
                </div>

                <div className='w-full h-1 bg-white'>
                    <div
                        style={{ width: `${width}%`, transition: '500ms linear' }}
                        className='bg-green-400 h-full'
                    />
                </div>
            </div>

            <button
                type='button'
                onClick={() => setPopupSucess(false)}
                className='w-5 flex justify-center items-center bg-green-600'
            >
                <IoCloseSharp className='w-4 h-4 text-white'/>
            </button>
        </div>
    );
};

export default EmailSentSuccessfully;
