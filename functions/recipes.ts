export const GetRecipes = async () => {
    const res = await fetch("http://localhost:3000/api/recipes", {
        headers: {"Content-Type": "application/json"},
        method: "GET"
    })
    return (await res.json()).data
}