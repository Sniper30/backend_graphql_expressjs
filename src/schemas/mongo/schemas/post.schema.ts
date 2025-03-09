import { Schema } from "mongoose";


const schema = new Schema({
    comment: String,
    picture: String,
    userId:  String,
    interactions: {
        comments: [Schema.ObjectId],
        likes: [Schema.ObjectId]
    }
})
export const postSchema = schema;
   