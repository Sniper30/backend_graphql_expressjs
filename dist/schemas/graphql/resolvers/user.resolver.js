import { seriviceUsers } from "../../mongo/models/user.model.js";
export const resolvers = {
    Query: {
        getUsers: () => seriviceUsers.findUser()
    },
    Mutation: {
        addUser: async (root, user) => await seriviceUsers.saveUsers(user)
    }
};
//# sourceMappingURL=user.resolver.js.map