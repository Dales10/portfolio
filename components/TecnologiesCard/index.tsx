import Image from "next/image";

type Props = {
    technologie: string;
    setInfoTechnologie: (technologie: string, position: number) => void;
    stateTechnologie: boolean;
    position: number;
};

const styleCardClick = {
    transform: "translate(-6px, -6px) scale(1)",
    boxShadow: "6px 6px 5px #00DBDE",
};

const TecnologiesCard = ({
    setInfoTechnologie,
    technologie,
    stateTechnologie,
    position,
}: Props) => {
    let size = 90;
    let gap = 8;

    //Sets the size of images.
    const isSize80 = [
        "C++",
        "Dart",
        "Kotlin",
        "Python",
        "GraphQL",
        "Angular",
    ].some((name) => {
        return name === technologie;
    });
    if (isSize80) size = 80;

    if (technologie === "Firebase") size = 60;
    else if (technologie === "Node.js" || technologie === "SQLite") size = 110;
    else if (technologie === "MongoDB") size = 35;
    else if (technologie === "Flutter") size = 60;
    else if (technologie === ".Net") size = 120;

    //Defines the gap of the two elements inside the card.
    if (technologie === "TailwindCSS") gap = 20;
    else if (technologie === "SASS") gap = 12;
    else if (technologie === "Express.js") gap = 0;

    //Resets technology name formatting.
    const formattedTechnologyName = technologie
        .toLocaleLowerCase()
        .replace(" ", "_")
        .replace("c#", "c_sharp")
        .replace(".net", "dot_net");

    return (
        <div
            onClick={() => setInfoTechnologie(technologie, position)}
            style={stateTechnologie ? styleCardClick : {}}
            className="flex justify-center items-center w-36 h-36 bg-background border border-cyan rounded-md hover:scale-95 transition duration-300"
        >
            <div
                style={{ gap: `${gap}px` }}
                className="flex flex-col justify-between items-center gap-2 py-1"
            >
                <Image
                    src={`/icons/${formattedTechnologyName}.svg`}
                    width={size}
                    height={size}
                    alt={`${technologie} icon.`}
                />

                <h2 className="text-xl font-semibold">{technologie}</h2>
            </div>
        </div>
    );
};

export default TecnologiesCard;
