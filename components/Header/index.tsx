import { useState, useEffect, MouseEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/header.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";

import LinkToAccessAnotherPage from "./../LinkToAccessAnotherPage";

const Header = () => {
    const [menu, setMenu] = useState(false);
    const [optionsSkills, setOptionsSkills] = useState(false);
    const path = useRouter().pathname;

    const changeMenuStatus = (
        e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
    ) => {
        const tagName = (e.target as Element).classList[0];
        if (tagName === "popup-wrapper") setMenu(false);
    };

    const styleArrow = () => {
        if (optionsSkills)
            return { transform: "rotate(180deg)", color: "#FFFFFF" };
        else {
            if (path === "/skills/softSkills" || path === "/skills/hardSkills")
                return { color: "#FFFFFF" };
            else return { transform: "rotate(0)", color: "#a1a1aa" };
        }
    };

    useEffect(() => {
        if (menu) document.body.style.overflowY = "hidden";
        else document.body.style.overflowY = "auto";
    }, [menu]);

    return (
        <header className="h-10 flex justify-between items-center mt-10 mx-8 md:mx-16 xl:mx-28 text-xl">
            <Link href="/" legacyBehavior>
                <a className={path === "/" ? styles.pageName : styles.normal}>
                    <h1 className={`${styles.name} text-base lg:text-xl`}>
                        Portfólio
                    </h1>
                </a>
            </Link>

            <div className="hidden lg:block">
                <nav>
                    <ul className="flex gap-10 font-semibold">
                        <li>
                            <LinkToAccessAnotherPage
                                pageName="Sobre mim"
                                path="sobreMim"
                            />
                        </li>

                        <li className="relative">
                            <div className="flex gap-2">
                                <LinkToAccessAnotherPage
                                    pageName="Skills"
                                    path="skills"
                                    handleMenuChange={false}
                                />

                                <MdKeyboardArrowDown
                                    onClick={() =>
                                        setOptionsSkills(!optionsSkills)
                                    }
                                    style={styleArrow()}
                                    className="w-7 h-7 mt-px text-zinc-400 transition duration-200"
                                />
                            </div>

                            {optionsSkills && (
                                <div
                                    className={`${styles.menu} absolute top-8 right-1 w-32 py-4 bg-background text-center rounded-lg`}
                                >
                                    <ul>
                                        <li>
                                            <LinkToAccessAnotherPage
                                                pageName="Soft Skills"
                                                path="skills/softSkills"
                                                handleOptionsSkillsChange={true}
                                                setOptionsSkills={
                                                    setOptionsSkills
                                                }
                                            />
                                        </li>

                                        <li>
                                            <LinkToAccessAnotherPage
                                                pageName="Hard Skills"
                                                path="skills/hardSkills"
                                                handleOptionsSkillsChange={true}
                                                setOptionsSkills={
                                                    setOptionsSkills
                                                }
                                            />
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>

                        <li>
                            <Link href="/projetos" legacyBehavior>
                                <a
                                    className={
                                        path === "/projetos"
                                            ? styles.pageName
                                            : styles.normal
                                    }
                                >
                                    Projetos
                                </a>
                            </Link>
                        </li>

                        <li>
                            <LinkToAccessAnotherPage
                                pageName="Contato"
                                path="contato"
                            />
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="lg:hidden">
                <div className="relative">
                    <div
                        onClick={() => setMenu(!menu)}
                        className="absolute -top-4 flex lg:hidden flex-col justify-between h-8 z-50"
                    >
                        <span className="block w-2 h-2 bg-white rounded-full" />
                        <span className="block w-2 h-2 bg-white rounded-full" />
                        <span className="block w-2 h-2 bg-white rounded-full" />
                    </div>
                </div>

                {menu && (
                    <div
                        onClick={(e) => changeMenuStatus(e)}
                        className="popup-wrapper w-screen h-screen absolute top-0 left-0 bg-background bg-opacity-50 z-20 backdrop-blur-sm"
                    >
                        <nav
                            className={`${styles.menu} absolute top-24 right-8 md:right-16 w-60 h-76 bg-background rounded-lg z-10`}
                        >
                            <ul className="flex flex-col gap-4 mt-4 ml-8 text-lg font-semibold">
                                <li>
                                    <LinkToAccessAnotherPage
                                        pageName="Sobre Mim"
                                        path="sobreMim"
                                        handleMenuChange={true}
                                        setMenu={setMenu}
                                    />
                                </li>

                                <li>
                                    <div className="flex gap-1">
                                        <LinkToAccessAnotherPage
                                            pageName="Skills"
                                            path="skills"
                                            handleMenuChange={true}
                                            setMenu={setMenu}
                                        />

                                        <MdKeyboardArrowDown
                                            onClick={() =>
                                                setOptionsSkills(!optionsSkills)
                                            }
                                            style={
                                                optionsSkills
                                                    ? {
                                                          transform:
                                                              "rotate(180deg)",
                                                      }
                                                    : { transform: "rotate(0)" }
                                            }
                                            className="w-6 h-6 mt-[3px] text-white"
                                        />
                                    </div>

                                    {optionsSkills && (
                                        <div className="ml-4">
                                            <ul className="flex flex-col gap-1">
                                                <li>
                                                    <LinkToAccessAnotherPage
                                                        pageName="Soft Skills"
                                                        path="skills/softSkills"
                                                        handleMenuChange={true}
                                                        setMenu={setMenu}
                                                        handleOptionsSkillsChange={
                                                            true
                                                        }
                                                        setOptionsSkills={
                                                            setOptionsSkills
                                                        }
                                                    />
                                                </li>

                                                <li>
                                                    <LinkToAccessAnotherPage
                                                        pageName="Hard Skills"
                                                        path="skills/hardSkills"
                                                        handleMenuChange={true}
                                                        setMenu={setMenu}
                                                        handleOptionsSkillsChange={
                                                            true
                                                        }
                                                        setOptionsSkills={
                                                            setOptionsSkills
                                                        }
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </li>

                                <li>
                                    <LinkToAccessAnotherPage
                                        pageName="Projetos"
                                        path="projetos"
                                        handleMenuChange={true}
                                        setMenu={setMenu}
                                    />
                                </li>

                                <li>
                                    <LinkToAccessAnotherPage
                                        pageName="Contato"
                                        path="contato"
                                        handleMenuChange={true}
                                        setMenu={setMenu}
                                    />
                                </li>
                            </ul>

                            <div className="flex flex-col items-center my-5">
                                <span className="block h-px w-10/12 bg-zinc-900" />

                                <div
                                    className={`${styles.name} mt-5 text-base font-bold`}
                                >
                                    Dário Matias
                                </div>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
