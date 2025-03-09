import { seriviceUsers } from "../../mongo/models/user.model.js";
export const resolvers = {
    Query: {
        getUsers: () => seriviceUsers.findUsers()
    },
    Mutation: {
        addUser: async (root, user) => await seriviceUsers.saveUser(user)
    }
};
//# sourceMappingURL=user.resolver.js.map