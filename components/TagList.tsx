import styles from '../styles/TagList.module.scss'
import Tag from "./Tag";

interface TagListProps {
    categories: {title: string, color: string}[]
    age: string
}


function TagList(props: TagListProps) {
    return (
        <>
            <div className={styles.tags}>
                <ul>
                    {props.categories.map((category, i) => {
                        return (
                            <Tag key={i} backgroundColor={category.color} children={category.title}></Tag>
                        )
                    })}
                </ul>
                <span>{props.age}</span>
            </div>
        </>
    )
}

export default TagList