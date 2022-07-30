export const GetRecipes = async () => {
    const res = await fetch("https://receitinhas-front.vercel.app/api/recipes", {
        headers: {"Content-Type": "application/json"},
        method: "GET"
    })
    return (await res.json()).data
}