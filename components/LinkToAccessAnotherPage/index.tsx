import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/header.module.scss";

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
    const pathname = useRouter().pathname;

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
            <a
                onClick={setOnClick}
                className={
                    pathname === `/${path}` ? styles.pageName : styles.normal
                }
            >
                {pageName}
            </a>
        </Link>
    );
};

export default LinkToAccessAnotherPage;
