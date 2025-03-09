import "dotenv/config";

type PORT = number

export const port: PORT = process.env.PORT as unknown as number;