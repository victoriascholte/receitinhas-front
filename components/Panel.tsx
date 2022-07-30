import styles from '../styles/Panel.module.scss'
import Tag from "./Tag";
import TagList from "./TagList";
import Recipe from "../models/Recipe";

interface RecipeProps {
    recipe: Recipe
}

function Panel(props: RecipeProps) {
    return (
        <>
            <div className={styles.panel}>
                <h2>{props.recipe.title}</h2>
                <TagList age={props.recipe.age} categories={props.recipe.categories}></TagList>
                <div className={styles.instructions}>
                    <div className={styles.ingredients}>
                        <h4>Ingredientes:</h4>
                        <ul>
                            {props.recipe.ingredients.map((ingredient, i) => {
                                return (
                                    <li key={i}>{ingredient}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={styles.preparation}>
                        <h4>Modo de preparo:</h4>
                        <p>{props.recipe.preparation}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Panel