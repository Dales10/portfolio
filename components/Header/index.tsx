import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/header.module.scss';

const Header = () => {
    const [menu, setMenu] = useState(false);

    return (
        <header className='h-10 flex justify-between items-center mt-10 mx-8 md:mx-16 xl:mx-28 text-xl'>
            <h1 className={`${styles.name} text-base lg:text-xl`}>
                Portfólio
            </h1>

            <div className='hidden lg:block'>
                <nav>
                    <ul className='flex gap-10 font-semibold'>
                        <li>
                            <Link href='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href='/sobreMim'>
                                Sobre Mim
                            </Link>
                        </li>
                        <li>
                            <Link href='/skills'>
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link href='/projetos'>
                                Projetos
                            </Link>
                        </li>
                        <li>
                            <Link href='/contato'>
                                Contato
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
                                        <Link href='/'>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/sobreMim'>
                                            Sobre Mim
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/skills'>
                                            Skills
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/projetos'>
                                            Projetos
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/contato'>
                                            Contato
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
