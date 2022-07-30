export default async function handler(req, res) {
    const { id } = req.query
    let message = ""
    const resGo = await fetch("https://receitinhas.herokuapp.com/recipes/" + id, {
        headers: {'Content-Type': 'application/json'},
        method: 'GET'
    })
    const data = await resGo.json()
    if (resGo.status === 404) {
        message = "Nenhuma receita com esse ID foi encontrada"
    } else if (resGo.status === 500) {
        message = await resGo.json()
    }
    res.status(resGo.status).json({data, message})
}

