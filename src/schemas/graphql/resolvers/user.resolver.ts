import { IUser } from "../../../interfaces/user.interface.js";
import { seriviceUsers } from "../../mongo/models/user.model.js";


export const resolvers = {
    Query:{
        getUsers:()=> seriviceUsers.findUsers()
    },
    Mutation:{
        addUser: async (root: any, user: IUser)=> await seriviceUsers.saveUser(user)
    }
}