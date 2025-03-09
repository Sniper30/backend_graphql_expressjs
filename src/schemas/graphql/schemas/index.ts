import { readFileSync } from "fs";

const files = [
    "./src/schemas/graphql/schemas/querys.graphql",
    "./src/schemas/graphql/schemas/mutations.graphql",
    "./src/schemas/graphql/schemas/user.graphql",
    "./src/schemas/graphql/schemas/post.graphql"
]

let schemas = ""

for (let i = 0; i < files.length; i++) {
    let str = readFileSync(files[i]).toString('utf-8').trim()
    schemas += str 
}

export default schemas