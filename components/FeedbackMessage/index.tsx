import { useState, useEffect, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { TbAlertOctagon } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";

type Props = {
    type: string;
    contents: {
        title: string;
        message: string;
    };
    setShowMessage: Dispatch<
        SetStateAction<{
            status: boolean;
            type: string;
        }>
    >;
};

const colors = {
    success: {
        primary: "#48DE80",
        secondary: "#22C55E",
        tertiary: "#16A34A",
    },
    error: {
        primary: "#F87171",
        secondary: "#EF4444",
        tertiary: "#DC2626",
    },
};

const FeedbackMessage = ({ type, contents, setShowMessage }: Props) => {
    const [width, setWidth] = useState(0);

    const color = colors[type as keyof typeof colors];

    const progress = () => {
        let count = 5;
        const intervalRef = setInterval(() => {
            setWidth(count);
            if (count === 100) stopTheBreak(intervalRef);
            count += 5;
        }, 200);
    };

    const stopTheBreak = (intervalRef: NodeJS.Timer) => {
        clearInterval(intervalRef);
    };

    useEffect(() => {
        progress();
    }, []);

    return (
        <div
            style={{ backgroundColor: color.secondary }}
            className="fixed top-4 left-2/4 w-[340px] flex -translate-x-2/4 rounded-sm"
        >
            <div>
                <div className="flex items-center gap-4 p-4">
                    {type === "success" && (
                        <Image
                            src="/icons/ok.svg"
                            width={20}
                            height={20}
                            alt="Ok icon"
                        />
                    )}

                    {type === "error" && (
                        <TbAlertOctagon className="w-10 h-10 text-white" />
                    )}
                    <div>
                        <h1 className="text-xl font-bold">{contents.title}</h1>

                        <p>{contents.message}</p>
                    </div>
                </div>

                <div className="w-full h-1 bg-white">
                    <div
                        style={{
                            width: `${width}%`,
                            transition: "500ms linear",
                            backgroundColor: color.primary,
                        }}
                        className="h-full"
                    />
                </div>
            </div>

            <button
                type="button"
                style={{ backgroundColor: color.tertiary }}
                onClick={() => setShowMessage({ status: false, type: "" })}
                className="w-5 flex justify-center items-center"
            >
                <IoCloseSharp className="w-4 h-4 text-white" />
            </button>
        </div>
    );
};

export default FeedbackMessage;
