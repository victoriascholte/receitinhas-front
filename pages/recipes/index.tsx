
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import List from "../../components/List";
import {GetRecipes} from "../../functions/recipes";
import Recipe from "../../models/Recipe";
import styles from "../../styles/Home.module.scss";

interface RecipesProps {
    recipes: Recipe[]
}

function Index(props: RecipesProps) {
    return (
        <>
            <Wrapper>
                <Header></Header>
                <List recipes={props.recipes}></List>
                <footer className={styles.footer}>
                    <p>Victoria Scholte - Projeto Final - Reprograma</p>
                </footer>
            </Wrapper>
        </>
    )
}

export async function getServerSideProps() {
    return { props: { recipes: await GetRecipes(), },}
}

export default Index