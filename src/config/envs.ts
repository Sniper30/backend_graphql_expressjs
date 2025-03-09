import "dotenv/config";
interface vars {
    port:number
    database_url: string
    apollo_server_port: number
}

export const envs: vars = {
    port: Number(process.env.PORT),
    apollo_server_port: Number(process.env.APOLLO_SERVER_PORT),
    database_url: process.env.DATABASE_URL
}