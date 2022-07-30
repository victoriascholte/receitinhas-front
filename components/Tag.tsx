import styles from '../styles/Tag.module.scss'
import {string} from "prop-types";
import {text} from "stream/consumers";

interface TagProps {
    backgroundColor: string
    text: string
    key?: number
}

function Tag(props: TagProps) {
    return (
        <>
            <li key={props.key}
                className={`${styles.tag} 
                ${props.backgroundColor === 'mauve' ? styles.mauve :
                    props.backgroundColor === 'deepSafron' ? styles.deepSafron :
                        props.backgroundColor === 'mediumPurple' ? styles.mediumPurple :
                            props.backgroundColor === 'winterGreenDream' ? styles.winterGreenDream :
                                props.backgroundColor === 'babyBlue' ? styles.babyBlue : styles.salmonPink}`}>
                {props.text}
            </li>
        </>
    )
}

export default Tag