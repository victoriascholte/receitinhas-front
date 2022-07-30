import styles from '../styles/Tag.module.scss'
import {string} from "prop-types";
import {text} from "stream/consumers";

interface TagProps {
    backgroundColor: string
    children: string
    key?: number
}

function Tag(props: TagProps) {
    return (
        <>
            <li
                className={`${styles.tag} 
                ${props.backgroundColor === 'mauve' ? styles.mauve :
                    props.backgroundColor === 'deepSafron' ? styles.deepSafron :
                        props.backgroundColor === 'mediumChampagne' ? styles.mediumChampagne :
                            props.backgroundColor === 'babyBlue' ? styles.babyBlue : styles.salmonPink}`}>
                {props.children}
            </li>
        </>
    )
}

export default Tag