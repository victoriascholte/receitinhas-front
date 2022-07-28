import styles from '../styles/Header.module.scss'
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
    page?: string
}

function Header(props: HeaderProps) {
    return (
        <>
            <header className={styles.header}>
                <Link href={'/'}><Image className={styles.logo} src={'/logo-receitinhas-200-50.svg'} alt='Receitinhas Logo' width={300} height={75}/></Link>
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