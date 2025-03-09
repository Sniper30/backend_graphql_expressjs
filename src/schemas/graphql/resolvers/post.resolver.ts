import { IPost } from "../../../interfaces/post.interface.js";
import { IUser } from "../../../interfaces/user.interface.js";
import { servicePosts } from "../../mongo/models/post.model.js";


export const resolvers = {
    Query:{
        getPosts:()=> servicePosts.getPosts()
    },

    Mutation:{
        addPost: (root: any, post: IPost)=> servicePosts.addPost(post)
    }
}