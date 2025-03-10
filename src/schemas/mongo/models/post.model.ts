import mongoose, { Mongoose, ObjectId } from "mongoose";
import { postSchema } from "../schemas/post.schema.js";
import { IPost } from "../../../interfaces/post.interface.js";

const Post = mongoose.model("posts",postSchema);
const post = new Post();
export const servicePosts = {
    getPosts:async ()=> await Post.find({}),
    addPost:(_post: IPost)=>{
        post.comment = _post.comment;
        post.userId = _post.userId
        post.picture = _post.picture ?? ""
        post.interactions = {
            comments: [],
            likes:[]
        }
        return post.save();
    }
}
