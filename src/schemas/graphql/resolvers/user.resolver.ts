import { IUser } from "../../../interfaces/user.interface.js";
import { seriviceUsers } from "../../mongo/models/user.model.js";


export const resolvers = {
    Query:{
        getUsers:()=> seriviceUsers.findUser()
    },

    Mutation:{
        addUser: async (root: any, user: IUser)=> await seriviceUsers.saveUsers(user)
    }
}