import Wrapper from "../../../components/Wrapper";
import Header from "../../../components/Header";
import style from "../../../styles/Panel.module.scss";
import Panel from "../../../components/Panel";
import styles from "../../../styles/Home.module.scss";
import Recipe from "../../../models/Recipe";
import Tag from "../../../components/Tag";
import TagList from "../../../components/TagList";

interface RecipeProps {
    recipe: Recipe
}

function Show(props: RecipeProps) {
    return (
        <>
            <Wrapper>
                <Header></Header>
                <Panel recipe={props.recipe}></Panel>
                <footer className={styles.footer}>
                    <p>Victoria Scholte - Projeto Final - Reprograma</p>
                </footer>
            </Wrapper>
        </>
    )
}

export async function getServerSideProps({ params }) {
    const res = await fetch("https://receitinhas-front.vercel.app/api/recipes/"+ params.id + "/show", {
        headers: {"Content-Type": "application/json"},
        method: "GET"
    })
    const recipe = await res.json()
    return { props: { recipe: recipe.data } }
}

export default Show

