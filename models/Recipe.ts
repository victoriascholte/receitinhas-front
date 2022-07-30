export default class Recipe {
    readonly _id: string
    readonly title: string
    readonly ingredients: string[]
    readonly preparation: string
    readonly categories: {title: string, color: string}[]
    readonly age: string
}