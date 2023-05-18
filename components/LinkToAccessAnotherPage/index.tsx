import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

type Props = {
    pageName: string;
    path: string;
    handleMenuChange?: boolean;
    setMenu?: Dispatch<SetStateAction<boolean>>;
    handleOptionsSkillsChange?: boolean;
    setOptionsSkills?: Dispatch<SetStateAction<boolean>>;
};

const LinkToAccessAnotherPage = ({
    pageName,
    path,
    handleMenuChange = false,
    setMenu,
    handleOptionsSkillsChange = false,
    setOptionsSkills,
}: Props) => {
    const setOnClick = () => {
        if (handleMenuChange && handleOptionsSkillsChange) {
            setMenu!(false);
            setOptionsSkills!(false);
        } else if (handleMenuChange) setMenu!(false);
        else if (handleOptionsSkillsChange) setOptionsSkills!(false);
        else null;
    };

    return (
        <Link href={`/${path}`} legacyBehavior>
            <a onClick={setOnClick}>
                {pageName}
            </a>
        </Link>
    );
};

export default LinkToAccessAnotherPage;
