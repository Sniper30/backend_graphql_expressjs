import { Schema } from "mongoose";

export const userLogin = new Schema({
    email: String,
    password: String,
    name: String,
    phone: String
});



