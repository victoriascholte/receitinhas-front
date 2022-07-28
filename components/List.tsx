import styles from '../styles/List.module.scss'
import Link from "next/link";
import Tag from "./Tag";

function List() {
    return (
        <>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <div>
                        <h2>Danoninho saudável</h2>
                        <div className={styles.tags}>
                            <ul>
                                <Tag backgroundColor={'mauve'} children={'Lanches'}></Tag>
                                <Tag backgroundColor={'babyBlue'} children={'Doces'}></Tag>
                                <Tag backgroundColor={'salmonPink'} children={'Almoço'}></Tag>
                            </ul>
                            <span>A partir de 6 meses</span>
                        </div>
                    </div>
                    <Link href={'#'}>Ver receita</Link>
                </li>
                <li className={styles.item}>
                    <div>
                        <h2>Sopa de Abóbora</h2>
                        <div className={styles.tags}>
                            <ul>
                                <Tag backgroundColor={'mauve'} children={'Lanches'}></Tag>
                                <Tag backgroundColor={'babyBlue'} children={'Doces'}></Tag>
                                <Tag backgroundColor={'salmonPink'} children={'Almoço'}></Tag>
                            </ul>
                            <span>A partir de 6 meses</span>
                        </div>
                    </div>
                    <Link href={'#'}>Ver receita</Link>
                </li>
            </ul>
        </>
    )
}

export default List