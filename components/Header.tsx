import styles from '../styles/Header.module.scss'
import {func} from "prop-types";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
}

function Header(props: HeaderProps) {
    return (
        <>
            <header className={styles.header}>
                <Image src={'/logo-receitinhas-200-50.svg'} alt='Receitinhas Logo' width={300} height={75}/>
                <nav>
                    <ul>
                        <li><Link href={'/recipes'}>Receitas</Link></li>
                        <li><Link href={'mailto:victoria.scholte@gmail.com'}>Contato</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header