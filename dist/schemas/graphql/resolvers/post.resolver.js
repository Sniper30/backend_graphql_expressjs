import { servicePosts } from "../../mongo/models/post.model.js";
export const resolvers = {
    Query: {
        getPosts: () => servicePosts.getPosts()
    },
    Mutation: {
        addPost: (root, post) => servicePosts.addPost(post)
    }
};
//# sourceMappingURL=post.resolver.js.map