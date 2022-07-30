import styles from '../styles/List.module.scss'
import Link from "next/link";
import Tag from "./Tag";
import Recipe from "../models/Recipe";
import TagList from "./TagList";

interface RecipesProps {
    recipes: Recipe[]
}

function List(props: RecipesProps) {

    function renderList() {
        return props.recipes.map((recipe, i) => {
            return (
                <li key={i} className={styles.item}>
                    <div>
                        <h2>{recipe.title}</h2>
                        <TagList age={recipe.age} categories={recipe.categories}></TagList>
                    </div>
                    <Link href={"/recipes/" + recipe._id + "/show"}>Ver receita</Link>
                </li>
            )
        })
    }

    return (
        <>
            {props.recipes?.length > 0 ?
                <ul className={styles.list}>
                    {renderList()}
                </ul> : <>Não existem dados cadastrados</>
            }
        </>

    )
}

export default List