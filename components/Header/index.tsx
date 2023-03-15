import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/header.module.scss';

const Header = () => {
    const [menu, setMenu] = useState(false);
    const path = useRouter().pathname;
    
    return (
        <header className='h-10 flex justify-between items-center mt-10 mx-8 md:mx-16 xl:mx-28 text-xl'>
            <h1 className={`${styles.name} text-base lg:text-xl`}>
                Portfólio
            </h1>

            <div className='hidden lg:block'>
                <nav>
                    <ul className='flex gap-10 font-semibold'>
                        <li>
                            <Link href='/' legacyBehavior>
                                <a className={path === '/' ? styles.pageName : styles.normal}>
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/sobreMim' legacyBehavior>
                                <a className={path === '/sobreMim' ? styles.pageName : styles.normal}>
                                    Sobre Mim
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/skills' legacyBehavior>
                                <a className={path === '/skills' ? styles.pageName : styles.normal}>
                                    Skills
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/projetos' legacyBehavior>
                                <a className={path === '/projetos' ? styles.pageName : styles.normal}>
                                    Projetos
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/contato' legacyBehavior>
                                <a className={path === '/contato' ? styles.pageName : styles.normal}>
                                    Contato
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className='lg:hidden'>
                <div className='relative'>
                    <div
                        onClick={() => setMenu(!menu)}
                        className='absolute -top-4 flex lg:hidden flex-col justify-between h-8 z-50'
                    >
                        <span className='block w-2 h-2 bg-white rounded-full' />
                        <span className='block w-2 h-2 bg-white rounded-full' />
                        <span className='block w-2 h-2 bg-white rounded-full' />
                    </div>
                </div>

                {
                    menu && (
                        <div className='w-screen h-screen absolute top-0 left-0 bg-background bg-opacity-50 z-20'>
                            <nav className={`${styles.menu} absolute top-24 right-8 md:right-16 w-60 h-76 bg-background rounded-lg z-10`}>
                                <ul className='flex flex-col gap-4 mt-4 ml-8 text-lg font-semibold'>
                                    <li>
                                        <Link href='/' legacyBehavior>
                                            <a
                                                onClick={() => setMenu(false)}
                                                className={path === '/' ? styles.pageName : styles.normal}
                                            >
                                                Home
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/sobreMim' legacyBehavior>
                                            <a
                                                onClick={() => setMenu(false)}
                                                className={path === '/sobreMim' ? styles.pageName : styles.normal}
                                            >
                                                Sobre Mim
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/skills' legacyBehavior>
                                            <a
                                                onClick={() => setMenu(false)}
                                                className={path === '/skills' ? styles.pageName : styles.normal}
                                            >
                                                Skills
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/projetos' legacyBehavior>
                                            <a
                                                onClick={() => setMenu(false)}
                                                className={path === '/projetos' ? styles.pageName : styles.normal}
                                            >
                                                Projetos
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/contato' legacyBehavior>
                                            <a
                                                onClick={() => setMenu(false)}
                                                className={path === '/contato' ? styles.pageName : styles.normal}
                                            >
                                                Contato
                                            </a>
                                        </Link>
                                    </li>
                                </ul>

                                <div className='flex flex-col items-center my-5'>
                                    <span className='block h-[1px] w-10/12 bg-zinc-900' />

                                    <div className={`${styles.name} mt-5 text-base font-bold`}>
                                        Dário Matias
                                    </div>
                                </div>
                            </nav>
                        </div>
                    )
                }
            </div>
        </header>
    );
};

export default Header;
