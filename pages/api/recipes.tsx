export default async function handler(req, res) {
    let message = ""
    const resGo = await fetch('https://receitinhas.herokuapp.com/recipes/', {
        headers: {'Content-Type': 'application/json'},
        method: 'GET'
    })
    const data = await resGo.json()
    if (resGo.status === 500) {
        message = await resGo.json()
    }
    res.status(resGo.status).json({data, message})
}