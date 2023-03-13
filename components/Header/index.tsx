import styles from '../../styles/header.module.scss';

const Header = () => {
    return (
        <header className='h-10 flex justify-between items-center mt-10 ml-28 mr-28 text-xl'>
            <h1 className={styles.name}>
                Dário Matias
            </h1>

            <nav>
                <ul className='flex gap-10 font-semibold'>
                    <li>
                        Home
                    </li>
                    <li>
                        Sobre Mim
                    </li>
                    <li>
                        Skills
                    </li>
                    <li>
                        Projetos
                    </li>
                    <li>
                        Contato
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
