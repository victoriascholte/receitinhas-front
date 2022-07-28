import Link from "next/link";

function ListItem() {
    return (
        <>
            <h2>Danoninho saudável</h2>
            <ul>
                <li>Lanches</li>
                <li>Doces</li>
            </ul>
            <span>A partir de 6 meses</span>
            <Link href={'#'}>Ver receitas</Link>
        </>
    )
}

export default ListItem